const express = require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const port = 3005
const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(port, function () {
    console.log('listening to the port number.....', port)
})