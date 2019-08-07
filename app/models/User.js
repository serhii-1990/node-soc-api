const mongoose = require('mongoose');
// User model schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(reg) {
                return /^(?=.{3,24})[a-z][a-z0-9]*[._-]?[a-z0-9]+$/.test(reg);
            },
            message: props => `${props.value} is not a valid username!`
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(reg) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(reg);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            // Latin lowercase and capital letters, numbers, special characters, min 8 characters
            validator: function(reg) {
                return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(reg);
            },
            message: props => `${props.value} is not a valid password!`
        }
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    }
});
// Export User model
const User = module.exports = mongoose.model('User', userSchema);
module.exports.get = function(callback, limit) {
    User.find(callback).limit(limit);
}