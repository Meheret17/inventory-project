const express = require('express')
const productRouter = require('./product')
const userRouter = require('./users')

const mainRouter = express.Router()
mainRouter.use('/products', productRouter)
mainRouter.use('/users', userRouter)

module.exports = mainRouter