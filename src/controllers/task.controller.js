import Task from '../models/task.model'

const controller = {
  list: async (req, h) => {
    const task_list = await Task.find().exec()
    return task_list
  },

  create: async (req, h) => {
    if(!req.payload.text){
      return h.response({ error: 'Missing field!' }).code(400)
    }

    let task = new Task({
      done: false,
      text: req.payload.text
    })

    task.save()
    
    return h.response(task)
  },

  get: async (req, h) => {
    const task = await Task.findById(req.params.id).exec()
    if (!task) return h.response({ error: 'No task with id: ' + req.params.id }).code(400)

    return h.response(task);
  },

  delete: async (req, h) => {
    const task = await Task.findById(req.params.id).exec()
    if (!task) return h.response({ error: 'No task with id: ' + req.params.id }).code(400)

    await task.delete()
    return h.response().code(200)
  },

  update: async (req, h) => {
    const task = await Task.findById(req.params.id).exec()
    if (!task) return h.response({ error: 'No task with id: ' + req.params.id }).code(400)

    task.done = req.payload.done !== undefined ? req.payload.done : task.done
    task.text = req.payload.text !== undefined ? req.payload.text : task.text

    await task.save()

    return h.response(task)
  }
}

export default controller