import taskController from '../controllers/task.controller'

const task_routes = []

task_routes.push({
  method: 'GET', 
  path: '/api/tasks',
  handler: taskController.getTaskList
})

export default task_routes