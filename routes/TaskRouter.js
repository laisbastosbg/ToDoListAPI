import { TaskRepository } from '../repository/TaskRepository.js';

const taskRepository = new TaskRepository()

async function taskRouter(fastify, options) {
    fastify.post('/tasks', (request, reply) => {
        const task = request.body
    
        taskRepository.create(task)
    
        return reply.status(201).send()
    })
}

export default taskRouter;