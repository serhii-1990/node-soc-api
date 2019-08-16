const mongoose = require("mongoose");
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
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          reg
        );
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
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
          reg
        );
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
  userInfo: {
    preview: {
      type: String,
      unique: false,
      required: false
    },
    firstname: {
      type: String,
      unique: false,
      required: false,
      maxlength: 40
    },
    lastname: {
      type: String,
      unique: false,
      required: false,
      maxlength: 40
    },
    status: {
      type: String,
      unique: false,
      required: false,
      maxlength: 80
    },
    education: {
      type: String,
      unique: false,
      required: false,
      maxlength: 140
    },
    job: {
      type: String,
      unique: false,
      required: false,
      maxlength: 140
    },
    birthday: {
      type: String,
      unique: false,
      required: false,
      validate: {
        validator: function(reg) {
          return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
            reg
          );
        },
        message: props => `${props.value} is not a valid data!`
      }
    },
    isBlocked: {
      type: Boolean,
      unique: false,
      required: false
    }
  }
});
// Export User model
const User = (module.exports = mongoose.model("User", userSchema));
module.exports.get = function(callback, limit) {
  User.find(callback).limit(limit);
};
