const createUserTable = "CREATE TABLE IF NOT EXISTS users (user_id serial primary key,name text not null unique,pass text not null,rank integer not null)";

const createMissionTable = "CREATE TABLE IF NOT EXISTS mission(mission_id serial primary key,title text not null,desc text not null);"

const createUsertaskTable = "CREATE TABLE CREATE TABLE IF NOT EXISTS user_task(id serial primary key,user_id integer reference user(user_id), mission_id integer reference mission(mission_id),done boolean default false);"// クエリをここに書く

const createTestTable = "CREATE TABLE IF NOT EXISTS test (id SERIAL PRIMARY KEY, name VARCHAR(20) NOT NULL);";

module.exports = {
    createUserTable,
    createMissionTable,
    createTestTable,
    createUsertaskTable
}
