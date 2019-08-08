const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
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
    refreshToken: {
        type: String,
        required: true
    },
    isRevoked: {
        type: Boolean,
        required: true
    }
});

const Token = module.exports = mongoose.model('Token', tokenSchema);
module.exports.get = function(callback, limit) {
    Token.find(callback).limit(limit);
}