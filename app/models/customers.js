const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const customerSchema = new Schema({
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
    }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer