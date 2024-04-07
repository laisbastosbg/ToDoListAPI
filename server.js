import Fastify from 'fastify'
import userRouter from './routes/UserRouter.js';
import taskRouter from './routes/TaskRouter.js';

const server = Fastify({
  logger: true
})

server.register(userRouter)
server.register(taskRouter)

server.listen({ 
    host: '0.0.0.0',
    port: process.env.PORT ?? 3331
 }, function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})