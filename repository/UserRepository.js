// import { randomUUID } from 'node:crypto'
import { sql } from './PostgresConnection.js'

export class UserRepository {

    async create(user) {
        // const userID = randomUUID()

        const { name, email, password } = user

        await sql`INSERT INTO usuarios (id, name, email, password) VALUES (DEFAULT, ${name}, ${email}, ${password})`
    }

    async list() {
        await sql`SELECT * FROM usuarios`
    }
}