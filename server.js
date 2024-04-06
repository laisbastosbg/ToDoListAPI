import { fastify } from 'fastify'

const server = fastify()

server.listen({
    port: 3331,
    listenTextResolver: (address) => { return `listening at ${address}`}
})