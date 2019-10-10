const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name: {
        type: String,
        require: true
    }
})

const Department = mongoose.model('Department', departmentSchema)

module.exports = Department