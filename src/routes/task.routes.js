import taskController from '../controllers/task.controller'

const task_routes = []

task_routes.push({
  method: 'GET',
  path: '/api/tasks',
  handler: taskController.list
})

task_routes.push({
  method: 'POST',
  path: '/api/tasks/new',
  handler: taskController.create
})

task_routes.push({
  method: 'GET',
  path: '/api/tasks/{id}',
  handler: taskController.get
})

task_routes.push({
  method: 'POST',
  path: '/api/tasks/{id}/new',
  handler: taskController.newSubtask
})

task_routes.push({
  method: 'POST',
  path: '/api/tasks/{id}/update',
  handler: taskController.update
})

task_routes.push({
  method: 'DELETE',
  path: '/api/tasks/{id}',
  handler: taskController.delete
})

export default task_routes
