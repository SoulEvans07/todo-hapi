import hapi from 'hapi'

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })
  

  server.route({
    method: 'GET',
    path:'/api',
    handler: (request, h) => {
      return { text: 'Hello World' }
    }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()