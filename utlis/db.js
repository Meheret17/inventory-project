const mongoose = require('mongoose')
const connectDB = async () => {
    try{
    const connection = await mongoose.connect(process.env.DB_URI)
    console.log(`Mongodb connected to ${connection.connection.host}`)

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB