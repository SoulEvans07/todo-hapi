import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    done: Boolean,
    title: String,
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskTag'
    }],
});

TaskSchema.add({
    subtasks: [{
        type: mongoose.Schema.Types.ObjectId,
        refs: 'Task'
    }],
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        refs: 'Task'
    }
})

const TaskModel = mongoose.model('Task', TaskSchema)
export default TaskModel
