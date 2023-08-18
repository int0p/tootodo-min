import { invoke } from '@tauri-apps/api/tauri';

export async function getPomoRecords(date) {
    if (!date) return;
    let data = JSON.parse(
        JSON.parse(
            await invoke('get_timer_by_date', {
                date
            })
        )
    );
    data.forEach((pomoRecord) => {
        pomoRecord.cycles = JSON.parse(pomoRecord.cycles);
    });
    return data;
}