import { UserRepository } from '../repository/UserRepository.js';

const userRepository = new UserRepository()

async function userRouter(fastify, options) {
    fastify.post('/users', (request, reply) => {
        const user = request.body
    
        userRepository.create(user)
    
        return reply.status(201).send()
    })

    fastify.get('/users', (request, reply) => {
        const { email } = request.query
        
        const user = userRepository.getByEmail(email)

        return user
    })
}

export default userRouter;