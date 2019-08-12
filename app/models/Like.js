const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        validate: {
            validator: function(reg) {
                return /^[a-zA-Z0-9_-]{6,24}$/.test(reg);
            },
            message: props => `${props.value} is not a valid username!`
        }
    },
    is_liked: {
        type: Boolean,
        required: true
    }
});

// Export Like model
const Like = module.exports = mongoose.model('Like', likeSchema);
module.exports.get = function(callback, limit) {
    Like.find(callback).limit(limit);
}