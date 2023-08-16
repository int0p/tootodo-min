// use rusqlite::{named_params, Connection};

// pub fn add_item(title: &str, db: &Connection) -> Result<(), rusqlite::Error> {
//     let mut statement = db.prepare("INSERT INTO Timer (title) VALUES (@title)")?;
//     statement.execute(named_params! { "@title": title })?;

//     Ok(())
// }

// pub fn get_all(db: &Connection) -> Result<Vec<String>, rusqlite::Error> {
//     let mut statement = db.prepare("SELECT * FROM items")?;
//     let mut rows = statement.query([])?;
//     let mut items = Vec::new();
//     while let Some(row) = rows.next()? {
//         let title: String = row.get("title")?;

//         items.push(title);
//     }

//     Ok(items)
// }
