import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    done: Boolean,
    text: String
});

module.exports = mongoose.model('Task', TaskSchema);
