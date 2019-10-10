const User = require('../models/users')
const express = require('express')
//const router = express.Router()

//register
module.exports.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user) => {
            // res.send(user)  insted of sending whole user information, we can send the data that we require to send
            res.send({
                _id: user._id,
                username: user.name,
                email: user.email
            })
        })
        .catch((err) => {
            res.send(err)
        })
}

//login
module.exports.login = (req, res) => {
    const body = req.body

    User.findByCredentials(body.email, body.password)
        .then((user) => {
            return user.generateToken()
        })
        .then((token) => {
            //res.setHeader('x-auth', token).send({}) insted we send in the body, because axios in react can not read header
            res.send({ token })
        })
        .catch((err) => {
            res.send(err)
        })
}

//logout

module.exports.logout = (req, res) => {
    const { user, token } = req
    console.log(user)
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(() => {
            res.send({ notice: 'successfully logged out' })
        })
        .catch((err) => {
            res.send(err)
        })
}


//private route
module.exports.account = (req, res) => {
    const { user } = req
    console.log(user)
    res.send(user)
}

module.exports.list = (req, res) => {
    User.find()
        .then((users) => {
            res.send(users)
        })
}