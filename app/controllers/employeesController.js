const Employee = require('../models/employees')

module.exports.list = (req, res) => {
    Employee.find()
        .then((employees) => {
            res.send(employees)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Employee.findById(id)
        .then((employee) => {
            res.send(employee)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const employee = new Employee(data)
    employee.save()
        .then((employee) => {
            res.send(employee)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body
    Employee.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
        .then((employee) => {
            if (employee) {
                res.send(employee)
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
    Employee.findByIdAndDelete(id)
        .then((employee) => {
            if (employee) {
                res.send(employee)
            }
            else {
                res.status('404').send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
}