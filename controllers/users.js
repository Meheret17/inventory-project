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
    const user = User({ name, email, password })
    const u = await user.save()
    const id = u.id
    
    return res.status(201).json({
      success: true,
      name, email, id
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}
exports.getUserById = async (req, res, next)=>{
    try{
        const {id} = req.params
        const user = await User.findById(id).select("-password")
        console.log(user)
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'user is not found'
            })
        }else{
            return res.status(200).json({
                success: true,
                user
            })
        }
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}