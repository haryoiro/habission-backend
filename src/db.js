
require('dotenv').config();

const { Client } = require('pg');
const { createTestTable, createUserTable } = require('./query/createTable');

const dbUrl = process.env.DATABASE_URL;

const client = new Client({
    connectionString: dbUrl,
});

client.connect().then(() => {
    console.log("Connected to database");
}).then(() => {
    client.query(createTestTable)
    client.query(createUserTable)
}).catch(error => {
    console.log(error)
});

module.exports = client

