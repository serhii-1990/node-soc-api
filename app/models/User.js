// External Dependancies
const mongoose = require('mongoose')

/*  Reg for password
  (?=.*\d)          //should contain at least one digit
  (?=.*[a-z])       //should contain at least one lower case
  (?=.*[A-Z])       //should contain at least one upper case
  [a-zA-Z0-9]{8,}   //should contain at least 8 from the mentioned characters
 */
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);