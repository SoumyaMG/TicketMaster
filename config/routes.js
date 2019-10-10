const express = require('express')
const router = express.Router()

const customersController = require('../app/controllers/customersController')
const departmentsController = require('../app/controllers/departmentsController')
const employeesController = require('../app/controllers/employeesController')
const ticketsController = require('../app/controllers/ticketsController')
const usersController = require('../app/controllers/usersController')
const { authenticateUser } = require('../app/middleware/authentication')

router.get('/customers', authenticateUser, customersController.list)
router.get('/customers/:id', authenticateUser, customersController.show)
router.post('/customers', authenticateUser, customersController.create)
router.put('/customers/:id', authenticateUser, customersController.update)
router.delete('/customers/:id', authenticateUser, customersController.destroy)

router.get('/departments', authenticateUser, departmentsController.list)
router.get('/departments/:id', authenticateUser, departmentsController.show)
router.post('/departments', departmentsController.create)
router.put('/departments/:id', departmentsController.update)
router.delete('/departments/:id', departmentsController.destroy)

router.get('/employees', authenticateUser, employeesController.list)
router.get('/employees/:id', authenticateUser, employeesController.show)
router.post('/employees', authenticateUser, employeesController.create)
router.put('/employees/:id', authenticateUser, employeesController.update)
router.delete('/employees/:id', authenticateUser, employeesController.destroy)

router.get('/tickets', authenticateUser, ticketsController.list)
router.get('/tickets/:id', authenticateUser, ticketsController.show)
router.post('/tickets', authenticateUser, ticketsController.create)
router.put('/tickets/:id', authenticateUser, ticketsController.update)
router.delete('/tickets/:id', authenticateUser, ticketsController.destroy)

router.get('/users', usersController.list)
router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout',authenticateUser, usersController.logout)

module.exports = router