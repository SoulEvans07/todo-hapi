import mongoose from 'mongoose'
import { mongo } from './vars'

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

export default {
  connect: () => {
    mongoose.connect(mongo.uri, {
      keepAlive: 1,
      useNewUrlParser: true
    })
    return mongoose.connection
  }
}
