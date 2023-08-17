// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod database;
mod model;
mod state;
extern crate serde_json;
use model::timer::{Timer, TimerBMC};
use state::{AppState, ServiceAccess};
use tauri::{AppHandle, Manager, State};
// // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn greet(app_handle: AppHandle, name: &str) -> String {
//     // Should handle errors instead of unwrapping here
//     app_handle.db(|db| database::add_item(name, db)).unwrap();

//     let items = app_handle.db(|db| database::get_all(db)).unwrap();

//     let items_string = items.join(" | ");

//     format!("Your name log: {}", items_string)
// }

#[tauri::command]
fn timer_to_desktop_db(app_handle: AppHandle, timer_data: &str) {
    //deserialize timer data
    let timer_object: Timer = serde_json::from_str(timer_data).unwrap();
    println!("{:?}", &timer_object);

    //add timer object to db
    app_handle
        .db(|db| TimerBMC::store(timer_object, db))
        .unwrap();
}

#[tauri::command]
fn get_timer_by_date(app_handle: AppHandle, date: &str) -> String {
    let items = app_handle.db(|db| TimerBMC::get_by_date(date, db)).unwrap();

    format!("{:?}", items)
}

fn main() {
    tauri::Builder::default()
        .manage(AppState {
            db: Default::default(),
        })
        .invoke_handler(tauri::generate_handler![
            timer_to_desktop_db,
            get_timer_by_date
        ])
        .setup(|app| {
            let handle = app.handle();

            let app_state: State<AppState> = handle.state();
            let db =
                database::initialize_database(&handle).expect("Database initialize should succeed");

            *app_state.db.lock().unwrap() = Some(db);

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
