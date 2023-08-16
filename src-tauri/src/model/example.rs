// https://www.youtube.com/watch?v=FlpZ8mzOXCs
use rusqlite::config::DbConfig;
use rusqlite::{params, Connection, Result};
use std::fs::File;
use std::io::prelude::*;

#[derive(Debug)]
struct Person {
    id: Option<i32>,
    name: String,
    data: Option<Vec<u8>>,
}

impl Person {
    fn new(name: String) -> Person {
        Person {
            id: None,
            name,
            data: None,
        }
    }

    fn new_from_db(id: i32, name: String, data: Option<Vec<u8>>) -> Person {
        Person {
            id: Some(id),
            name,
            data,
        }
    }

    fn add_to_db(&mut self, conn: &Connection) -> Result<()> {
        conn.execute(
            "INSERT INTO person (name, data) VALUES (?1, ?2)",
            params![&self.name, &self.data],
        )?;

        let id = conn.last_insert_rowid() as i32;
        self.id = Some(id);

        Ok(())
    }

    fn get_all_from_db(conn: &Connection) -> Result<Vec<Person>> {
        let mut stmt = conn.prepare("SELECT id, name, data FROM person")?;
        let person_iter = stmt.query_map(params![], |row| {
            let id = row.get(0)?;
            let name = row.get(1)?;
            let data = row.get(2)?;
            Ok(Person::new_from_db(id, name, data))
        })?;

        let mut people: Vec<Person> = Vec::new();
        for person in person_iter {
            people.push(person.unwrap());
        }
        Ok(people)
    }
}

#[derive(Debug)]
struct Pet {
    id: Option<i32>,
    name: String,
}

impl Pet {
    fn new(name: String) -> Pet {
        Pet { id: None, name }
    }

    fn new_from_db(id: i32, name: String) -> Pet {
        Pet { id: Some(id), name }
    }

    fn add_to_db(&mut self, conn: &Connection) -> Result<()> {
        conn.execute("INSERT INTO pet (name) VALUES (?1)", params![&self.name])?;

        let id = conn.last_insert_rowid() as i32;
        self.id = Some(id);

        Ok(())
    }

    fn get_all_from_db(conn: &Connection) -> Result<Vec<Pet>> {
        let mut stmt = conn.prepare("SELECT id, name FROM pet")?;
        let pet_iter = stmt.query_map(params![], |row| {
            let id = row.get(0)?;
            let name = row.get(1)?;
            Ok(Pet::new_from_db(id, name))
        })?;

        let mut pets: Vec<Pet> = Vec::new();
        for pet in pet_iter {
            pets.push(pet.unwrap());
        }
        Ok(pets)
    }
}

#[derive(Debug)]
struct PetOwner {
    id: i32,
    person_id: Option<i32>,
    pet_id: Option<i32>,
    person: Person,
    pet: Pet,
}

impl PetOwner {
    fn new_from_db(id: i32, person: Person, pet: Pet) -> PetOwner {
        PetOwner {
            id,
            person_id: person.id,
            pet_id: pet.id,
            person,
            pet,
        }
    }

    fn add_to_db(conn: &Connection, person: Person, pet: Pet) -> Result<PetOwner> {
        conn.execute(
            "INSERT INTO pet_owner (person_id,pet_id) VALUES (?1,?2)",
            params![person.id, pet.id],
        )
        .unwrap();
        let id = conn.last_insert_rowid() as i32;

        Ok(PetOwner {
            id,
            person_id: person.id,
            pet_id: pet.id,
            person,
            pet,
        })
    }

    fn get_all_from_db(conn: &Connection) -> Result<Vec<PetOwner>> {
        let mut stmt = conn.prepare(
            "
            SELECT pet_owner.id as pet_owner_id,
                person.id as person_id,
                person.name as person_name,
                pet.id as pet_id,
                pet.name as pet_name
            FROM pet_owner
            INNER JOIN person ON pet_owner.person_id = person.id
            INNER JOIN pet ON pet_owner.pet_id = pet.id
        ",
        )?;
        let pet_owner_iter = stmt.query_map(params![], |row| {
            let pet_owner_id = row.get(0)?;
            let person_id = row.get(1)?;
            let person_name = row.get(2)?;
            let pet_id = row.get(3)?;
            let pet_name = row.get(4)?;

            let person = Person::new_from_db(person_id, person_name, None);
            let pet = Pet::new_from_db(pet_id, pet_name);

            Ok(PetOwner::new_from_db(pet_owner_id, person, pet))
        })?;

        let mut pet_owners: Vec<PetOwner> = Vec::new();
        for pet_owner in pet_owner_iter {
            pet_owners.push(pet_owner.unwrap());
        }
        Ok(pet_owners)
    }
}

fn read_sql_from_file(path: &str) -> String {
    let mut file = File::open(path).expect("file not found");
    let mut contents = String::new();
    file.read_to_string(&mut contents)
        .expect("something went wrong reading the file");

    contents
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn db() -> Result<()> {
        let conn = Connection::open("test.db")?;
        let _ = conn.set_db_config(DbConfig::SQLITE_DBCONFIG_ENABLE_FKEY, true)?;

        /*
        conn.execute(
            "CREATE TABLE person (
                id    INTEGER PRIMARY KEY,
                name  TEXT NOT NULL,
                data  BLOB
            )",
            (), // empty list of parameters.
        )?;
         */

        let sql_file_contets: String = read_sql_from_file("start.sql");

        conn.execute_batch(
            sql_file_contets.as_str(),
            // empty list of parameters.
        )?;

        /*
        let me = Person {
            id: 0,
            name: "Steven".to_string(),
            data: None,
        };
        */
        let mut me = Person::new("Steven".to_string());
        let mut dog = Pet::new("doggy".to_string());

        /*
        conn.execute(
            "INSERT INTO person (name, data) VALUES (?1, ?2)",
            params![&me.name, &me.data],
        )?;
        */
        me.add_to_db(&conn)?;
        dog.add_to_db(&conn)?;
        let pet_owner_1 = PetOwner::add_to_db(&conn, me, dog)?;

        /*
        let mut stmt = conn.prepare("SELECT id, name, data FROM person")?;
        let person_iter = stmt.query_map([], |row| {
            Ok(Person {
                id: row.get(0)?,
                name: row.get(1)?,
                data: row.get(2)?,
            })
        })?;
        */
        let person_iter = Person::get_all_from_db(&conn)?;

        for person in person_iter {
            println!("Found person {:?}", person);
        }

        let pets = Pet::get_all_from_db(&conn)?;
        for pet in pets {
            println!("Found pet {:?}", pet);
        }

        let pet_owners = PetOwner::get_all_from_db(&conn)?;
        for pet_owner in pet_owners {
            println!("Found pet owner {:?}", pet_owner);
        }
        Ok(())
    }
}
