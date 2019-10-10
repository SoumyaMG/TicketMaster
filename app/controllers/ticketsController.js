const Ticket = require('../models/tickets')

module.exports.list = (req, res) => {
    Ticket.find()
        .then((tickets) => {
            res.send(tickets)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Ticket.findById(id)
        .then((ticket) => {
            res.send(ticket)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    console.log(data)
    const ticket = new Ticket(data)
    ticket.save()
        .then((ticket) => {
            res.send(ticket)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body
    Ticket.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
        .then((ticket) => {
            if (ticket) {
                res.send(ticket)
            }
            else {
                res.status('404').send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Ticket.findByIdAndDelete(id)
        .then((ticket) => {
            if (ticket) {
                res.send(ticket)
            }
            else {
                res.status('404').send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
}