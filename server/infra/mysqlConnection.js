require('dotenv/config')
const mysql = require('mysql2/promise')

const getConnection = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      })
    
    console.log('MySQL connected!')
    return connection
}

module.exports = { getConnection }