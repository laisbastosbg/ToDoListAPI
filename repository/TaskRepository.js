import { sql } from './PostgresConnection.js'

export class TaskRepository {

    async create(task) {
        const { description, userID } = task

        await sql`INSERT INTO tasks (id, description, status, user_id) VALUES (DEFAULT, ${description}, false, ${userID})`
    }
}