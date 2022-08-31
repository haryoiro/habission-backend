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
        await UserTask.findOne({
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
        // 加算処理
        let currMission = await Missions.findOne({
            where: {
                id: mission_id
            }
        })
        let currUser = await Users.findOne({
            where: {
                id: user_id
            }
        });
        if (currUser) {
            await Users.update({
                rank: currUser.point + currMission.point
            })
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
