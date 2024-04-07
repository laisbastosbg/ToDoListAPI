import { sql } from './PostgresConnection.js'

export class TaskRepository {

    async create(task) {
        const { description, userID } = task

        await sql`INSERT INTO tasks (id, description, status, user_id) VALUES (DEFAULT, ${description}, false, ${userID})`
    }

    async updateStatus(task) {
        const { taskID, status }  = task

        console.log(taskID)
        console.log(status)

        await sql`UPDATE tasks SET status = ${status} WHERE id = ${taskID}`
    }
}