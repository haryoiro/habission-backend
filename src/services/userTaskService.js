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
        let foundUserTask = await UserTask.findOne({
            where: {
                user_id,
                mission_id
            }
        });

        let createOrUpdateUserTask = UserTask.update({
            done: true
        }, {
            where: {
                user_id,
                mission_id
            }
        });
        if (createOrUpdateUserTask) {
            let task = await UserTask.create({
                user_id,
                mission_id,
                done: true
            });
            return { task, created: true };
        }

        return {createOrUpdateUserTask, created: false};
    } catch (error) {
        console.log(error);
        return error;
    }

}

module.exports = {
    getUserTask,
    doneUserTask
}
