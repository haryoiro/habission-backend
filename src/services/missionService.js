const { Missions, UserTask } = require('../../sequelize/module/index');
const models = require('../../sequelize/module/mission');

const getAllMission = async () => {
    try {
        return await Missions.findAll();

    } catch (error) {
        console.log("failed to get all misssion",error);
        return error;
    }
}

const addMission = async (title, description, point) => {
    try {
        return await Missions.create({
            title,
            description,
            point
        });

    } catch (error) {
        console.log("failed to create mission",error);
        return error;
    }
}

const getMissionById = async (id) => {
    try {
        return await Missions.findOne({
            where: {
                id
            }
        });
    } catch (error) {
        console.log("failed to get mission by id", error);
        return error;
    }
}

module.exports = {
    getAllMission,
    getMissionById,
    addMission
}
