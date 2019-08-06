// External Dependancies
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    country: String,
    city: String,
    personalInfo: {
        age: Number,
        education: String,
        job: String,
        status: String
    }
})

module.exports = mongoose.model('User', userSchema)