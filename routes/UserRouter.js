// import { fastify } from 'fastify';
import { UserRepository } from '../repository/UserRepository.js';

async function userRouter(fastify, options) {
    fastify.post('/users', (request, reply) => {
        const user = request.body

        const userRepository = new UserRepository()
    
        userRepository.create(user)
    
        // console.log(database.list())
    
        return reply.status(201).send()
    })

    fastify.get('/', (request, reply) => {
    
        return {"text": "coe rapaziada"}
    })
}

export default userRouter;