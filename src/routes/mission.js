const express = require('express')
let missionRouter = express.Router();
let {
    getMissionList,
    newMission,
} = require('../controllers/missionControllers');

missionRouter.route('/')
    .get(getMissionList)
    .post(newMission);

module.exports = missionRouter;
