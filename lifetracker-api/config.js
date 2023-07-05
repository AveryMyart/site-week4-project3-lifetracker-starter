require('dotenv').config()
require('colors')


const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const SECRET_KEY = process.env.SECRET_KEY || "secret_dev";


function getDatabaseURI() {
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_USER ? encodeURI(process.env.DATABASE_PASS) : "postgres"
    const dbHost = process.env.DATABASE_USER || "localhost"
    const dbPort = process.env.DATABASE_USER || 5432
    const dbName = process.env.DATABASE_USER || "lifetracker"


    return process.env.DATABASE_URL || `postgresq://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

module.exports = {
PORT,
getDatabaseURI,
SECRET_KEY
}