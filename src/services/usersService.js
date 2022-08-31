const {Users,UserTask} = require('../../sequelize/module/index');
const models = require('../../sequelize/module/user');

const getAllUsers = async () => {
    try {
        let user_tasks = await User.findAll();
        return user_tasks;
    } catch (error) {
        console.log(error);
        return error;
    }
}
const getAllUsersRel = async () => {
    try {
        await Users.hasMany(UserTask);
        await UserTask.belongTo(Users, {
            foreignKey: 'user_id'
        })
        return await Users.findAll({
            include: [UserTask]
        });
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
