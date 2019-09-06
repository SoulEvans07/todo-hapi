import tagController from '../controllers/task_tag.controller'

const tag_routes = []

tag_routes.push({
  method: 'GET', 
  path: '/api/tags',
  handler: tagController.list
})

tag_routes.push({
  method: 'POST',
  path: '/api/tags/new',
  handler: tagController.create
})

tag_routes.push({
  method: 'GET',
  path: '/api/tags/{id}',
  handler: tagController.get
})

tag_routes.push({
  method: 'POST',
  path: '/api/tags/{id}/update',
  handler: tagController.update
})

tag_routes.push({
  method: 'DELETE',
  path: '/api/tags/{id}',
  handler: tagController.delete
})

export default tag_routes