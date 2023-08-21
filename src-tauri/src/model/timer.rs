use rusqlite::{named_params, Connection, Result};

extern crate serde;
extern crate serde_json;

use serde::{Deserialize, Serialize};
/*
CREATE Timer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    working INTEGER NOT NULL,
    breaking INTEGER NOT NULL,
    cycles TEXT NOT NULL,
    todos TEXT NOT NULL,
    memo TEXT NOT NULL
);
 */

#[derive(Debug, Deserialize, Serialize)]
pub struct Timer {
    id: Option<i32>,
    date: String,
    working: i16,
    breaking: i16,
    cycles: String,
}

pub struct TimerBMC;
impl TimerBMC {
    pub fn store(data: Timer, db: &Connection) -> Result<()> {
        dbg!(&data);
        let mut stmt = db.prepare("INSERT INTO Timer (date,working,breaking,cycles) VALUES (@date,@working,@breaking,@cycles)")?;
        stmt.execute(named_params! { "@date": data.date,"@working":data.working,"@breaking":data.breaking,"@cycles":data.cycles})?;
        Ok(())
    }

    pub fn get_by_date(date: &str, db: &Connection) -> Result<String, rusqlite::Error> {
        let mut stmt = db.prepare("SELECT * FROM Timer WHERE date = @date")?;
        let mut rows = stmt.query(named_params! { "@date": date })?;
        let mut items = Vec::new();
        while let Some(row) = rows.next()? {
            let id: i32 = row.get("id")?;
            let date: String = row.get("date")?;
            let working: i16 = row.get("working")?;
            let breaking: i16 = row.get("breaking")?;
            let cycles: String = row.get("cycles")?;
            let timer = Timer {
                id: Some(id),
                date,
                working,
                breaking,
                cycles,
            };
            items.push(timer);
        }

        match serde_json::to_string(&items) {
            Ok(json_str) => Ok(json_str),
            Err(_) => Err(rusqlite::Error::QueryReturnedNoRows),
        }
    }

    pub fn get_all(db: &Connection) -> Result<Vec<Timer>, rusqlite::Error> {
        let mut stmt = db.prepare("SELECT * FROM Timer")?;
        let mut rows = stmt.query([])?;
        let mut items = Vec::new();
        while let Some(row) = rows.next()? {
            let id: i32 = row.get("id")?;
            let date: String = row.get("date")?;
            let working: i16 = row.get("working")?;
            let breaking: i16 = row.get("breaking")?;
            let cycles: String = row.get("cycles")?;
            let timer = Timer {
                id: Some(id),
                date,
                working,
                breaking,
                cycles,
            };
            dbg!(&timer);
            items.push(timer);
        }
        Ok(items)
    }

    //get,create,update,delete,list
    fn add_todo() {}

    fn add_memo() {}
}
