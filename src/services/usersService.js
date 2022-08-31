const {Users,UserTask} = require('../../sequelize/module/index');
const models = require('../../sequelize/module/user');

const getAllUsers = async () => {
    try {
        // Users.hasMany(UserTask);
        // UserTask.belongTo(Users,
        //     {
        //         foreignKey: 'user_ id'
        // });
        return await Users.findAll();
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getUserById = async (id) => {
    try {
        return await Users.findOne({
            where: {
                id
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
    getUserById,
    addUser,
}
