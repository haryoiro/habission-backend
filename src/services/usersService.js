const {Users,UserTask} = require('../../sequelize/module/index');
const models = require('../../sequelize/module/user');

const getAllUsers = async () => {
    try {
        // Users.hasMany(UserTask);
        // UserTask.belongTo(Users,
        //     {
        //         foreignKey: 'user_ id'
        // });

        let user_tasks = await UserTask.findAll({
            where: {
                done: false
            },
            include: [{
                modle: Users,

            }]
        });

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
