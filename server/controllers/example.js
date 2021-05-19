// const express = require('express')
// const router = express.Router()
const router = require('express').Router()
const logger = require('../utils/logger')

router.get('/', (req, res) => {
  logger.info('Example route here!')
  res.status(200).json({ example: 'Hello there!' })
})

logger.info('example router: ', router)

module.exports = router