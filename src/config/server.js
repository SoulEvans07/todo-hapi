import hapi from 'hapi'
import taskRoutes from '../routes/task.routes'
import tagRoutes from '../routes/task_tag.routes'

const server = hapi.server({
  port: 5000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*']
    }
  }
})

server.events.on('response', function (request) {
  console.log('HTTP ' + request.response.statusCode + ' # ' + request.method.toUpperCase() + ' ' + request.path +
    '\t < ' + request.info.remoteAddress);
});

server.route([
  ...taskRoutes,
  ...tagRoutes
])

export default server