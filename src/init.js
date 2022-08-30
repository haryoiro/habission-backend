const db = require('db')


function initDb() {
    try {
        db.query(createTestTable)
        db.query(createUserTable)
    } catch (error) {
        console.log(error)
    }
}

initDb();
