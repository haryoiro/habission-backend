
const userService = require('../services/usersService')


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
    const { name, password } = req.body;

    if (!name || !password) {
        res.status(400).json({ message: 'nameとpasswordが必要です' })
    }

    try {
        let result = await userService.addUser(name, password);
        res.status(200).json({ message: 'ユーザを追加しました。' });
    } catch (error) {
        res.status(401).json({ message: `ユーザを追加できませんでした。 ${error}` })
    }
}

/**
 * ユーザIDからユーザを取得
 */
const getUserById = async (req, res) => {
    const { id } = req.query;
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

    if (!user_id || !mission_id) {
        res.status(400).json({ message: 'user_idとmission_idが必要です' })
    }

    try {
        let result = await userService.doneUserTask(user_id, mission_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: 'User task not found' })
    }
}


module.exports = {
    getUserList,
    addUser,
    getUserById,
    getUserTask,
}
