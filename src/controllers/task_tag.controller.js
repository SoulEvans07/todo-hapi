import TaskTag from '../models/task_tag.model'

const controller = {
  list: async (req, h) => {
    const tag_list = await TaskTag.find().exec()
    return tag_list
  },

  create: async (req, h) => {
    if(!req.payload || 
       !req.payload.name ||
       !req.payload.color ||
       !req.payload.background) {
      return h.response({ error: 'Missing field!' }).code(400)
    }

    let tag = new TaskTag({
      name: req.payload.name,
      color: req.payload.color,
      background: req.payload.background
    })

    tag.save()
    
    return h.response(tag)
  },

  get: async (req, h) => {
    if(!req.params.id.match(/^[0-9a-fA-F]{24}$/)) return h.response({ error: 'Invalid TaskTag ID!' }).code(400)

    const tag = await TaskTag.findById(req.params.id).exec()
    if (!tag) return h.response({ error: 'No task tag with id: ' + req.params.id }).code(400)

    return h.response(tag);
  },

  delete: async (req, h) => {
    if(!req.params.id.match(/^[0-9a-fA-F]{24}$/)) return h.response({ error: 'Invalid TaskTag ID!' }).code(400)

    const tag = await TaskTag.findById(req.params.id).exec()
    if (!tag) return h.response({ error: 'No task tag with id: ' + req.params.id }).code(400)

    await tag.delete()
    return h.response().code(200)
  },

  update: async (req, h) => {
    if(!req.params.id.match(/^[0-9a-fA-F]{24}$/)) return h.response({ error: 'Invalid TaskTag ID!' }).code(400)

    const tag = await TaskTag.findById(req.params.id).exec()
    if (!tag) return h.response({ error: 'No task tag with id: ' + req.params.id }).code(400)

    tag.name = req.payload.name !== undefined ? req.payload.name : task.name
    tag.color = req.payload.color !== undefined ? req.payload.color : task.color
    tag.background = req.payload.background !== undefined ? req.payload.background : task.background

    await tag.save()

    return h.response(tag)
  }
}

export default controller