const db = require('../db')
const { successResponse, errorResponse } = require('../utils')

const getUsersQuery = (name, pass) => {
    return {
        name: 'addUser',
        text: 'SELECT * FROM users',
        values: [name, pass],
        rowMode: 'array',
    }
}

const getUsers = async (req, res) => {
    const { name, pass } = req.body;
    try {
        let res = db.query(addUserQuery(name, pass));
        res.send(successResponse({ message: 'User added' }))
    } catch (error) {
        res.send(errorResponse({ message: 'Error adding user' }))
    }
}

module.exports = { getUsers }
