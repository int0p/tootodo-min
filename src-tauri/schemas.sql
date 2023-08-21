PRAGMA foreign_keys = ON;
-- Area Table
DROP TABLE IF EXISTS  Area;
CREATE TABLE IF NOT EXISTS Area (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    status TEXT CHECK(status IN ('진행중', '완료', '진행예정')),
    isDisplay INTEGER DEFAULT 0 CHECK(isDisplay IN (0, 1))
);

-- Project Table
DROP TABLE IF EXISTS  Project;
CREATE TABLE IF NOT EXISTS Project (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    status TEXT CHECK(status IN ('진행중', '완료', '진행예정')),
    color TEXT,  -- rgba representation
    created_at DATE,
    duration_start DATE,
    duration_end DATE,
    area_id INTEGER,
    isDisplay INTEGER DEFAULT 0 CHECK(isDisplay IN (0, 1)),
    FOREIGN KEY (area_id) REFERENCES Area(id)
);

-- Milestone Table
DROP TABLE IF EXISTS  Milestone;
CREATE TABLE IF NOT EXISTS  Milestone (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    status TEXT CHECK(status IN ('진행중', '완료', '진행예정')),
    startDate DATE,
    endDate DATE,
    project_id INTEGER,
    isDisplay INTEGER DEFAULT 0 CHECK(isDisplay IN (0, 1)),
    FOREIGN KEY (project_id) REFERENCES Project(id)
);

-- Todo Table
DROP TABLE IF EXISTS Todo;
CREATE TABLE IF NOT EXISTS Todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    isDone INTEGER DEFAULT 0 CHECK(isDone IN (0, 1)),
    allocatedDate DATE NULL,
    created_at DATE,
    project_id INTEGER,
    milestone_id INTEGER,
    parentTodo_id INTEGER,
    FOREIGN KEY (project_id) REFERENCES Project(id),
    FOREIGN KEY (milestone_id) REFERENCES Milestone(id),
    FOREIGN KEY (parentTodo_id) REFERENCES Todo(id)
);

-- NoteType Table
-- 목차, 새로운 투두, 관련투두, Gpt와 대화, 마크다운 메모, 이미지,그림,코드,주석
DROP TABLE IF EXISTS NoteType;
CREATE TABLE IF NOT EXISTS NoteType (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type_name TEXT UNIQUE
);

-- Note Table
DROP TABLE IF EXISTS Note;
CREATE TABLE IF NOT EXISTS Note (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    todo_id INTEGER,
    noteType_id INTEGER,
    content TEXT,
    parentNote_id INTEGER,
    FOREIGN KEY (todo_id) REFERENCES Todo(id),
    FOREIGN KEY (noteType_id) REFERENCES NoteType(id),
    FOREIGN KEY (parentNote_id) REFERENCES Note(id)
);

-- ExecutionDate Table
DROP TABLE IF EXISTS ExecutionDate;
CREATE TABLE IF NOT EXISTS ExecutionDate (
    date DATE,
    todo_id INTEGER,
    FOREIGN KEY (todo_id) REFERENCES Todo(id)
);

-- Timer Table 
DROP TABLE IF EXISTS Timer;
CREATE TABLE IF NOT EXISTS Timer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    working INTEGER NOT NULL,
    breaking INTEGER NOT NULL,
    cycles TEXT NOT NULL,
    memo TEXT,
    todo_id INTEGER DEFAULT NULL,
    FOREIGN KEY (todo_id) REFERENCES Todo(id)
);