require('dotenv').config()

let DB_HOST = process.env.DEV_DB_HOST

module.exports = { DB_HOST }