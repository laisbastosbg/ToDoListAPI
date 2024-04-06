import Fastify from 'fastify'
import userRouter from './routes/UserRouter.js';

const server = Fastify({
  logger: true
})

server.register(userRouter)

server.listen({ port: 3331 }, function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})