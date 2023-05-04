const express = require('express')
const {hashPassword} = require('../middlewares/hasher')
const {createUser, getUserById} = require('../controllers/users')

const userRouter = express.Router()

userRouter.post('/', hashPassword, createUser)
userRouter.get('/:id', getUserById)

module.exports = userRouter
