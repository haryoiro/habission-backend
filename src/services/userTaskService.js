const { Missions, UserTask, Users } = require('../../sequelize/module/index');
const models = require('../../sequelize/module/mission');


const getUserTask = async (user_id) => {
    console.log(user_id);
    console.log("user?id")
    try {
        let userTasks = await UserTask.findOne({
            where: {
                user_id: user_id
            }
        });
        if (!userTasks) {
            console.log("user tasks is null")
            return null;
        }
        console.log(userTasks.length)

        for (let i of userTasks) {
            console.log("data",i)

            let mission = await Missions.findOne({
                where: {
                    id: i.mission_id
                }
            });

            Object.assign(i, mission);
        }
        console.log(userTasks)

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
