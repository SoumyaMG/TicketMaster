const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    message:
    {
        type: String,
        minlength: 10,
        maxlength: 128
    },
    priority:
    {
        type: String,
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket