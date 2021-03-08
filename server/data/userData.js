const db = require('../infra/mysqlConnection')

exports.insert = async (user) => {
    const conn = await db.getConnection()
    
    try {
        await conn.query(
            'INSERT INTO users (name, email) VALUES (?, ?);',
            [user.name, user.email]
        )
    } catch (error) {
        console.log(error)
        conn.rollback()
    } finally {
        conn.end()
    }
    
    return this.selectAll()
}

exports.select = async (id) => {
    const conn = await db.getConnection()
    const [rows] = await conn.query('SELECT * FROM users WHERE id = ?;', [id])
    conn.end()
    console.log(rows)
    return rows
}

exports.selectAll = async () => {
    const conn = await db.getConnection()
    const [rows] = await conn.query('SELECT * FROM users;')
    conn.end()
    console.log(rows)
    return rows
}

exports.update = async (user) => {
    const conn = await db.getConnection()
    
    try {
        await conn.query(
            'UPDATE users SET name = ?, email = ? WHERE id = ?;',
            [user.name, user.email, user.id]
        )
    } catch (error) {
        console.log(error)
        conn.rollback()
    } finally {
        conn.end()
    }
    
    return this.selectAll()
}

exports.delete = async (id) => {
    const conn = await db.getConnection()
    
    try {
        await conn.query('DELETE FROM users WHERE id = ?;', [id])
    } catch (error) {
        console.log(error)
        conn.rollback()
    } finally {
        conn.end()
    }
    
    return this.selectAll()
}
