const {model, Schema} = require('mongoose');

module.exports = model('User', new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
}, {timestamps: true}));