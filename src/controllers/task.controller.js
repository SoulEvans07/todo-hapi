import Task from '../models/task.model'
import TaskTag from '../models/task_tag.model'

const controller = {
  list: async (req, h) => {
    const task_list = await Task.find().populate('tags').exec()
    return task_list.filter(task => task.parent === null)
  },

  create: async (req, h) => {
    if(!req.payload || !req.payload.title) return h.response({ error: 'Missing field!' }).code(400)

    let task = new Task({
      done: false,
      title: req.payload.title,
      tags: [],
      parent: null,
      subtasks: []
    })

    task.save()

    return h.response(task)
  },

  get: async (req, h) => {
    if(!req.params.id.match(/^[0-9a-fA-F]{24}$/)) return h.response({ error: 'Invalid Task ID!' }).code(400)

    //const task = await Task.findOne({ _id: req.params.id }).populate('subtasks').populate('tags').exec()
    const task = await Task.findById(req.params.id).populate('subtasks').populate('tags').exec()
    if (!task) return h.response({ error: 'No task with id: ' + req.params.id }).code(400)

    return h.response(task);
  },

  delete: async (req, h) => {
    if(!req.params.id.match(/^[0-9a-fA-F]{24}$/)) return h.response({ error: 'Invalid Task ID!' }).code(400)

    const task = await Task.findById(req.params.id).exec()
    if (!task) return h.response({ error: 'No task with id: ' + req.params.id }).code(400)

    if(task.parent) {
      const parent = await Task.findById(task.parent).exec()
      const index = parent.subtasks.indexOf(task._id);
      if (index !== -1) {
        parent.subtasks.splice(index, 1)
      }
      await parent.save()
    }

    await task.delete()
    return h.response().code(200)
  },

  update: async (req, h) => {
    if(!req.params.id.match(/^[0-9a-fA-F]{24}$/)) return h.response({ error: 'Invalid Task ID!' }).code(400)

    const task = await Task.findById(req.params.id).exec()
    if (!task) return h.response({ error: 'No task with id: ' + req.params.id }).code(400)

    task.done = req.payload.done !== undefined ? req.payload.done : task.done
    task.title = req.payload.title !== undefined ? req.payload.title : task.title
    task.tags = req.payload.tags !== undefined ? req.payload.tags : task.tags
    task.subtasks = req.payload.subtasks !== undefined ? req.payload.subtasks : task.subtasks

    await task.save()

    return h.response(task)
  }
}

export default controller
