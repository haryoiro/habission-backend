const userService = require('../services/usersService')
const userTaskService = require('../services/userTaskService');

const { verify } = require('../utils');


const login = async (req, res) => {
    const { query } = req;
    let { name, pass } = query;
    if (!(name && pass)) {
        res.status(400).json({ message: 'idとpassが必要です' })
    }
    if (verify(name, pass)) {
        res.status(204).json({ id }).cookie('manin_id', id, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
        })
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
    const { name, pass } = req.query;
    console.log(name, pass);

    if (!name || !pass) {
        res.status(400).json({ message: 'nameとpasswordが必要です' })
    }

    try {
        let hashedPassword = genHash(pass);
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
    const { mission } = req.query;
    console.log(mission);
    try {

        if (mission) {
            res.status(200).json(await userService.getUserById(id));
        } else {
            res.status(200).json(await userTaskService.getUserTask(id));
        }
    }
    catch (error) {
        res.status(404).json({ message: 'User not found' })
    }
}

const getUserTask = async (req, res) => {
    console.log("user task")
    const { id } = req.params;
    console.log("user task")
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
