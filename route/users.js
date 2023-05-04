const express = require('express')
const hasher = require('../middlewares/hasher')
const createUser = require('../controllers/users')

const userRouter = express.Router()

userRouter.post('/', hasher, createUser)

module.exports = userRouter
