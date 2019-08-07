const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 24
    },
    title: {
        type: String,
        required: false,
        maxlength: 40
    },
    body: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 240
    },
    image: {
        type: String,
        required: false,
    },
    likes: {
        type: Number,
        required: true,
    }
});

// Export Post model
const Post = module.exports = mongoose.model('Post', postSchema);
module.exports.get = function(callback, limit) {
    Post.find(callback).limit(limit);
}