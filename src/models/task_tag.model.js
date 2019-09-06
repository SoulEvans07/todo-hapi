import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TaskTagSchema = new Schema({
    name: String,
    color: String,
    background: String
});

module.exports = mongoose.model('TaskTag', TaskTagSchema);
