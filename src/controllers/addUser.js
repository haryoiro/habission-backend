const db = require('../db')
const { successResponse, errorResponse } = require('../utils')
const { addUserQuery } = require('../query/addUser')

const addUserQuery = (name, pass) => {
    return {
        name: 'addUser',
        text: 'INSERT INTO users (name, password) VALUES ($1, $2)',
        values: [name, pass],
        rowMode: 'array',
    }
}

const addUser = async (req, res) => {
    const { name, pass } = req.body;
    try {
        let res = db.query(addUserQuery(name, pass));
        res.send(successResponse({ message: 'User added' }))
    } catch (error) {
        res.send(errorResponse({ message: 'Error adding user' }))
    }

}

module.exports = { addUser }
