
require('dotenv').config();

const { Client } = require('pg');
const { createTestTable, createUserTable } = require('./query/createTable');

const dbUrl = process.env.DATABASE_URL;

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
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

