const createUserTable = "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(20) NOT NULL, password VARCHAR(255) NOT NULL, rank INTEGER NOT NULL DEFAULT 0);";

const createMissionTable = {
    name: 'createMissions',
    // クエリをここに書く
}

const createTestTable = "CREATE TABLE IF NOT EXISTS test (id SERIAL PRIMARY KEY, name VARCHAR(20) NOT NULL);";

module.exports = {
    createUserTable,
    createMissionTable,
    createTestTable
}
