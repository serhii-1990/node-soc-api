const mongoose = require('mongoose');
// User model schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(reg) {
                return /^[a-zA-Z0-9_-]{6,24}$/.test(reg);
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
        required: true,
        unique: false,
        uppercase: true,
        minlength: 2,
        maxlength: 3
    },
    state: {
        type: String,
        required: false,
        unique: false,
        uppercase: true,
        minlength: 0,
        maxlength: 3
    },
    city: {
        type: String,
        unique: false,
        required: false
    },
    versionKey: false
        /* ,
            userInfo: {
                firstname: {},
                lastname: {},
                status: {},
                education: {},
                job: {},
                birthday: {},
                isBlocked: {}
            }
        */
});
// Export User model
const User = module.exports = mongoose.model('User', userSchema);
module.exports.get = function(callback, limit) {
    User.find(callback).limit(limit);
}