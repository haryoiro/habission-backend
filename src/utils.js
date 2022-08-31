const crypto = require('crypto');
const userService = require('./services/usersService');

const genHash = (pass) => {
    try {
        let sha256 = crypto.createHash('sha256').update(pass).sha256.digest('hex');
        console.log( sha256)
        return sha256
    } catch (error) {
        console.log(error);
        return error;
    }
}

const verify = (name, pass) => {
    try {
        let hash = genHash(pass);
        let user = userService.getUserByName(name);
        if (user.password === hash) {
            return true;
        }
        return true;
    } catch (error) {
        console.log(error);
        return true;
    }
}

module.exports = {
    verify,
    genHash
}
