const express = require('express');
let {
    getUserList,
    addUser,
    getUserById,
} = require('../controllers/userControllers');
const {
    getMissionList,
    addMission,
} = require('../controllers/missionControllers');

let router = express.Router();

router.route('/users')
    .get(getUserList)
    .post(addUser);

router.route('/user/:id')
    .get(getUserById)

router.route('/missions')
    .get(getMissionList)
    .post(addMission);


module.exports = router;

