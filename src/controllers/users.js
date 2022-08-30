const db = require('../db')
const { addUserQuery } = require('../query/addUser')


const addUser = (req, res) => {
    const { name, pass } = req.body;
    db.query(addUserQuery(name, pass))
        .then(result => {
            res.send("ok")
        }
    )
}

module.exports = { addUser }
