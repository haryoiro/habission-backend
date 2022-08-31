const {Users, UserTask} = require('../../sequelize/module/index');
const { genHash } = require('../utils');

const getAllUsers = async () => {
    try {
        let user_tasks = await Users.findAll();
        return user_tasks;
    } catch (error) {
        console.log(error);
        return error;
    }
}


const getUserByName = async (name) => {
    try {
        return await Users.findOne({
            where: {
                name,
            }
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}
const getUserById = async (id) => {
    try {
        return await Users.findOne({
            where: {
                id,
            }
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

const addUser = async (name, pass) => {
    try {
        let hashedPassword = genHash(pass);
        return await Users.create({
            name,
            pass: hashedPassword
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    getAllUsers,
    getUserByName,
    getUserById,
    addUser,
}
