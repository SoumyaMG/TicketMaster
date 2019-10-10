const Department = require('../models/departments')

module.exports.list = (req, res) => {
    Department.find()
        .then((departments) => {
            res.send(departments)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Department.findById(id)
        .then((department) => {
            res.send(department)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const department = new Department(data)
    department.save()
        .then((department) => {
            res.send(department)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body
    Department.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
        .then((department) => {
            if (department) {
                res.send(department)
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
    Department.findByIdAndDelete(id)
        .then((department) => {
            if (department) {
                res.send(department)
            }
            else {
                res.status('404').send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
}