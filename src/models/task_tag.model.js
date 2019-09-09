import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TaskTagSchema = new Schema({
    name: String,
    color: String,
    background: String
});

const TaskTagModel = mongoose.model('TaskTag', TaskTagSchema)
export default TaskTagModel
