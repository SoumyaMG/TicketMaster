const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/ticket-master-be', { useNewUrlParser: true })
    .then(() => {
        console.log('connection established....!!')
    })
    .catch((err) => {
        console.log('error in connecting to db', err)
    })

module.exports = mongoose