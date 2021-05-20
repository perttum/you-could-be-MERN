const router = require('express').Router()
const logger = require('../utils/logger')

router.get('/', (req, res) => {
  logger.info('Visit Example route!')
  res.status(200).json({ example: 'Hello there! I come in peace and from the backend off this app.' })
})

module.exports = router