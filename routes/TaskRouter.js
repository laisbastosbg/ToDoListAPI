import { TaskRepository } from '../repository/TaskRepository.js';

const taskRepository = new TaskRepository()

async function taskRouter(fastify, options) {
    fastify.post('/tasks', (request, reply) => {
        const task = request.body
    
        taskRepository.create(task)
    
        return reply.status(201).send()
    })

    fastify.patch('/task/:id/status', (request, reply) => {
        const { status } = request.body;
        const taskID = request.params.id

        taskRepository.updateStatus({ taskID, status })

        return reply.status(200).send()
    })
}

export default taskRouter;