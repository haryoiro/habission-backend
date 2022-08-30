const missionService = require('../services/missionService');

const getMissionList = async (req, res) => {
    try {
        let result = await missionService.getAllMission();

        res.json(result);
    } catch (error) {
        res.status(404).json({ message: 'ミッション覧を取得できません' })
    }
}

/**
 * post url/missions?title=<title>&description=<description>&point=<(optional) point>
 */
const addMission = async (req, res) => {
    const { query } = req;
    let { title, description, point } = query;
    try {
        if (!(title && description)) {
            res.status(400).json({ message: 'titleとdescが必要です' })
        }
        if (!point) {
            point = 1;
        }

        let result = await missionService.addMission(title, description, point);
        res.status(200).json({ message: `ミッションが追加されました。`});
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: 'ミッションを追加できませんでした。' })
    }
}

module.exports = {
    getMissionList,
    addMission,
}
