// const express = require('express')
const http = require('http')
const app = require('./app.js')
const server = http.createServer(app)
const logger = require('./utils/logger')

var listener = server.listen(3001, () => {
  logger.info('app is on ' + listener.address().port)
})