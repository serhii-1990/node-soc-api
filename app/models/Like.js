const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
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