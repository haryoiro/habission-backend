const express = require('express');
let {
    getUserList,
    addUser,
    getUserById,
    doneUserTask,
    login,
} = require('../controllers/userControllers');
const {
    getMissionList,
    addMission,
    getMissionById,

} = require('../controllers/missionControllers');

let router = express.Router();

router.route('/users')
    .get(getUserList)
    .patch(doneUserTask)
router.route('/user/:id')
    .get(getUserById)

router.route('/missions')
    .get(getMissionList)
    .post(addMission);
router.route('/mission/:id')
    .get(getMissionById)

router.route('/login')
    .post(login);
router.route('/register')
    .post(addUser);

module.exports = router;

