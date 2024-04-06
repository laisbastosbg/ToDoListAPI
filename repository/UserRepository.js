import { sql } from './PostgresConnection.js'

export class UserRepository {

    async create(user) {
        const { name, email, password } = user

        await sql`INSERT INTO usuarios (id, name, email, password) VALUES (DEFAULT, ${name}, ${email}, ${password})`
    }

    async getByEmail(email) {
        const users = await sql`SELECT * FROM usuarios WHERE email = ${email}`

        return users
    }
}