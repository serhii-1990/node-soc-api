const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 24,
        validate: {
            validator: function(reg) {
                return /^(?=.{3,24})[a-z][a-z0-9]*[._-]?[a-z0-9]+$/.test(reg);
            },
            message: props => `${props.value} is not a valid username!`
        }
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
        validate: {
            validator: function(reg) {
                return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(reg);
            },
            message: props => `${props.value} is not a valid url!`
        }

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