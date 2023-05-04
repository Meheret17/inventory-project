const bcrypt = require('bcrypt')

const hashPassword = async (req, res, next) => {
    const salt  = bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.password, salt)
    req.password = hash
    next()
}