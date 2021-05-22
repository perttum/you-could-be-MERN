require('dotenv').config()

let PORT
let DB_HOST

switch(process.env.NODE_ENV){

case 'development':
  DB_HOST = process.env.DEV_DB_HOST
  PORT = process.env.LOCAL_PORT
  break

  // case 'production':

default:
  DB_HOST = process.env.DEV_DB_HOST
  PORT = process.env.LOCAL_PORT
  break
}

module.exports = { PORT, DB_HOST }