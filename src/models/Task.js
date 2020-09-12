const { model, Schema } = require('mongoose');

module.exports = model('Task', new Schema({
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Type'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true}));