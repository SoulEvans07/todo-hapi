import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    done: Boolean,
    text: String,
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskTag'
    }]
});

module.exports = mongoose.model('Task', TaskSchema);
