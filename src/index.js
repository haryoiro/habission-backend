
require('dotenv').config();
const { addUser } = require('./controllers/addUser')
const { getUsers } = require('./controllers/getUsers')
const db = require('./db');

const express = require('express')
const app = express()
const port = 3000||process.env.PORT

app.get('/', async (req, res) => {
    res.send('ROOT')
})
app.post('/user', addUser);
app.get('/users', getUsers)

app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port} !`)
})


