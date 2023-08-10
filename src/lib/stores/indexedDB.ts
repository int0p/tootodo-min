import Dexie, { type Table } from 'dexie';

interface Timer {
    id: number,
    date: string,
    cycles:[],
    working: number,
    breaking: number,
}

class AppDatabase extends Dexie {
    timers!: Table<Timer>;
    constructor() {
        super('AppDatabase');
        this.version(1).stores({
            timers: '++id, date, cycles, working, breaking',
        });
    }
}

const db = new AppDatabase();

export{db, AppDatabase}