const { Missions, UserTask } = require('../../sequelize/module/index');
const models = require('../../sequelize/module/mission');


const getUserTask = async (user_id) => {
    try {
        return await UserTask.findAll({
            where: {
                user_id
            }
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}
const doneUserTask = async (user_id, mission_id) => {
    try {
        return await UserTask.create({
            user_id,
            mission_id
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    getUserTask,
    doneUserTask
}
