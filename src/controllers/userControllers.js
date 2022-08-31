const userService = require('../services/usersService')
const userTaskService = require('../services/userTaskService');
const crypto = require('crypto');
const genHash = (pass) => {
    let sha256 = crypto.createHash('sha256');
    sha256.update(pass);
    return sha256.digest('hex');
}

const verify = (id, pass) => {
    try {
        let hash = genHash(pass);
        let user = userService.getUserById(id);
        if (user.password === hash) {
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const login = async (req, res) => {
    const { query } = req;
    let { id, pass } = query;
    if (!(id && pass)) {
        res.status(400).json({ message: 'idとpassが必要です' })
    }
    if (verify(id, pass)) {
        res.status(204).json({ id })
    } else {
        res.status(401).json({ message: 'ログインに失敗しました' })
    }
}

const getUserList = async (req, res) => {
    try {
        let result = await userService.getAllUsers()

        res.status(200).json(result);
    }
    catch (error) {
        res.status(404).json({ message: 'User not found' })
    }
}

/**
 * ユーザを追加する。
 * セキュリティは一切なし。
 * json format
 * {
 *    "name": String,
 *    "password": String
 * }
 */
const addUser = async (req, res) => {
    const { name, password } = req.query;

    if (!name || !password) {
        res.status(400).json({ message: 'nameとpasswordが必要です' })
    }

    try {
        let hashedPassword = genHash(password);
        let result = await userService.addUser(name,hashedPassword);
        res.status(201).json({ message: 'ユーザを追加しました。' });
    } catch (error) {
        res.status(401).json({ message: `ユーザを追加できませんでした。 ${error}` })
    }
}

/**
 * ユーザIDからユーザを取得
 */
const getUserById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        let result = await userService.getUserById(id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(404).json({ message: 'User not found' })
    }
}

const getUserTask = async (req, res) => {
    const { id } = req.query;
    try {
        let result = await userService.getUserTask(id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(404).json({ message: 'User not found' })
    }
}

const doneUserTask = async (req, res) => {
    const { user_id, mission_id } = req.query;

    try {

        if (!user_id || !mission_id) {
            res.status(400).json({ message: 'user_idとmission_idが必要です' })
        }

        let result = await userTaskService.doneUserTask(user_id, mission_id);
        res.status(201).json({ message: 'user task done'});
    } catch (error) {
        res.status(404).json({ message: 'User task not found' })
    }
}


module.exports = {
    getUserList,
    addUser,
    getUserById,
    getUserTask,
    login,
    doneUserTask,
}
