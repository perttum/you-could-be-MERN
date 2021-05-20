const express = require('express')
require('express-async-errors')
const app = express()


app.use(express.json())

// Routes
const example = require('./controllers/example')

app.use('/api/example', example)

// UNCOMMENT THE CODE BELOW WHEN USING REACT-ROUTER ON FRONTEND
// const path = require('path')
// app.use(express.static(path.join(__dirname, 'build')))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })


module.exports = app