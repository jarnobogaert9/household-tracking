const {model, Schema} = require('mongoose');

module.exports = model('Type', new Schema({
    title: {
        type: String,
        required: true
    },
    color: {
        type: String
    }
}, {timestamps: true}));