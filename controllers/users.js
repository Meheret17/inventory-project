const mongoose = require('mongoose')
const User = require('../models/users')
const bcrypt = require('bcrypt')

exports.createUser = async (req, res, next) => {
  try {
    const requiredFields = ["name", "email", "password"]
    const missing = []

    requiredFields.forEach((field) => {
      if (!req.body.hasOwnProperty(field)) {
        missing.push(field)
      }
    })

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing Fields: ${missing.join(", ")}`
      })
    }

    const { name, email, password } = req.body

    if (typeof name !== 'string' || name.trim().split(" ").length < 2) {
      return res.status(400).json({
        success: false,
        message: `Full name is required and must contain at least two words`
      })
    }
    const user = await User.create({ name, email, password: hashedPassword }).select("-password")
    
    return res.status(201).json({
      success: true,
      user
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}