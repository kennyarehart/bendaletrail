const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes/api.js')
const cors = require('cors')
// const server = require('http').Server(app)

app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use('/', router)

app.listen(PORT)

console.log('App is listening on port ' + PORT)
