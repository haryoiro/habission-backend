const express = require('express');
let {
    getUserList,
    addUser,
    getUserById,
    login,

} = require('../controllers/userControllers');
const {
    getMissionList,
    addMission,
} = require('../controllers/missionControllers');

let router = express.Router();

router.route('/users')
    .get(getUserList)

router.route('/user/:id')
    .get(getUserById)

router.route('/missions')
    .get(getMissionList)
    .post(addMission);

router.route('/login')
    .post(login);
router.route('register')
    .post(addUser);

module.exports = router;

