import { TaskRepository } from '../repository/TaskRepository.js';

const taskRepository = new TaskRepository()

async function taskRouter(fastify, options) {
    fastify.post('/tasks', (request, reply) => {
        const task = request.body
    
        taskRepository.create(task)
    
        return reply.status(201).send()
    })

    fastify.get('/tasks/:userID', (request, reoly) => {
        const userID = request.params.userID

        const tasks = taskRepository.listUserTasks(userID)

        return tasks
    })

    fastify.patch('/tasks/:id/status', (request, reply) => {
        const { status } = request.body;
        const taskID = request.params.id

        taskRepository.updateStatus({ taskID, status })

        return reply.status(200).send()
    })

    fastify.patch('/tasks/:id/description', (request, reply) => {
        const { description } = request.body;
        const taskID = request.params.id

        taskRepository.updateDescription({ taskID, description })

        return reply.status(200).send()
    })

    fastify.delete('/tasks/:id', (request, reply) => {
        const id = request.params.id

        taskRepository.deleteTask(id)

        return reply.status(200).send()
    })
}

export default taskRouter;