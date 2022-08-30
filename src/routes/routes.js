const express = require('express');
let {
    getUserList,
    newUser,
    getUserById,
} = require('../controllers/userControllers');

let userRouter = express.Router();

userRouter.route('/')
    .get(getUserList)
    .post(newUser);

userRouter.route('/:id')
    .get(getUserById)

module.exports = userRouter;

