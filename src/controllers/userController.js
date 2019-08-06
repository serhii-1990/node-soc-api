// External Dependancies
const boom = require('boom')

// Get Data Models
const User = require('../models/User')

// Get all users
exports.getUsers = async(req, reply) => {
    try {
        const user = await User.find()
        console.log(JSON.stringify(user));
        return JSON.stringify(user)
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single user by ID
exports.getSingleUser = async(req, reply) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        return JSON.stringify(user)
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new user
exports.addUser = async(req, reply) => {
    try {
        const user = new User(req.body)
        return user.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing users
exports.updateUser = async(req, reply) => {
    try {
        const id = req.params.id
        const user = req.body
        const {...updateData } = user
        const update = await User.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a user
exports.deleteUser = async(req, reply) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndRemove(id)
        return JSON.stringify(user)
    } catch (err) {
        throw boom.boomify(err)
    }
}