const addUser = {
  name: 'addUser',
  text: 'SELECT * FROM users WHERE name = $1',
  values: ['brianc'],
  rowMode: 'array',
}


function addUserQuery(name, pass) {
    return {
        name: 'addUser',
        text: 'INSERT INTO users (name, password) VALUES ($1, $2)',
        values: [name, pass],
        rowMode: 'array',
    }
}
