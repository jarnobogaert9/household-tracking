const {model, Schema} = require('mongoose');

module.exports = model('Task', new Schema({
    title: {
        type: String,
        required: true
    },
    color: {
        type: String
    }
}, {timestamps: true}));