const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postid: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    maxlength: 24,
    validate: {
      validator: function(reg) {
        return /^[a-z0-9_-]{6,24}$/.test(reg);
      },
      message: props => `${props.value} is not a valid username!`
    }
  },
  firstname: {
    type: String,
    unique: false,
    required: false,
    maxlength: 40,
    minlength: 3,
    validator: function(reg) {
      return /"[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]$"/.test(reg);
    },
    message: props => `${props.value} is not a valid data!`
  },
  lastname: {
    type: String,
    unique: false,
    required: false,
    maxlength: 40,
    minlength: 3,
    validator: function(reg) {
      return /"[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]$"/.test(reg);
    },
    message: props => `${props.value} is not a valid data!`
  },
  body: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 240
  }
});

// Export Comment model
const Comment = (module.exports = mongoose.model("Comment", commentSchema));
module.exports.get = function(callback, limit) {
  Comment.find(callback).limit(limit);
};
