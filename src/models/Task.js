const { model, Schema } = require('mongoose');

module.exports = model('Task', new Schema({
    type: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Type'
    },
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true}));