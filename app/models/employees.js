const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value)
            },
            message: function () {
                return { notice: 'invalid email format' }
            }
        }
    },
    mobile: {
        type: String,
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    }
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee