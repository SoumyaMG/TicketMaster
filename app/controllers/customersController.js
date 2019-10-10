const Customer = require('../models/customers')

module.exports.list = (req, res) => {
    Customer.find()
        .then((customers) => {
            res.send(customers)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Customer.findById(id)
        .then((customer) => {
            res.send(customer)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const customer = new Customer(data)
    customer.save()
        .then((customer) => {
            res.send(customer)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body
    Customer.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
        .then((customer) => {
            if (customer) {
                res.send(customer)
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
    Customer.findByIdAndDelete(id)
        .then((customer) => {
            if (customer) {
                res.send(customer)
            }
            else {
                res.status('404').send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
}