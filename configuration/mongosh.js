const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/taskmanager"
const connection = async() => {
    try {
        await mongoose.connect(url)
        console.log("mongodb connected")
    } catch (error) {
        console.log("mongodb connection failed:", error.message)
        process.exit(1)
    }
};
module.exports = connection;