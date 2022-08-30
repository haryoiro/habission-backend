
require('dotenv').config();

const { Client } = require('pg');
const { createTestTable, createUserTable } = require('./query/createTable');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATBASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
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

