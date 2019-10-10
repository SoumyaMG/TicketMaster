import React from 'react'
import axios from '../../config/axios'


class TicketForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            customer: props.isEdit ? props.ticket.customer : '',
            priority: props.isEdit ? props.ticket.priority : '',
            message: props.isEdit ? props.ticket.message : '',
            departments: [],
            department: props.isEdit ? props.ticket.department : '',
            employees: [],
            employee: props.isEdit ? props.ticket.employee : ''
        }
        this.handleCutomerChange = this.handleCutomerChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.handlePriorityChange = this.handlePriorityChange.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
        this.handleEmployeeChange = this.handleEmployeeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            customer: this.state.customer,
            message: this.state.message,
            priority: this.state.priority,
            department: this.state.department,
            employee: this.state.employee
        }

        this.props.handleSubmit(formData)
    }

    handleCutomerChange(e) {
        const customer = e.target.value
        this.setState(() => ({ customer }))
    }

    handleMessageChange(e) {
        const message = e.target.value
        this.setState(() => ({ message }))
    }

    handlePriorityChange(e) {
        const priority = e.target.value
        this.setState(() => ({ priority }))
    }

    handleDepartmentChange(e) {
        const department = e.target.value
        this.setState(() => ({ department }))
        console.log(department)
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const emps = response.data
                const employees = emps.filter((employee) => {
                    return employee.department = department
                })
                this.setState(() => ({ employees }))
            })

    }

    handleEmployeeChange(e) {
        const employee = e.target.value
        this.setState(() => ({ employee }))
    }


    componentDidMount() {
        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const customers = response.data
                this.setState(() => ({ customers }))
            })

        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const departments = response.data
                this.setState(() => ({ departments }))
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                            <label htmlFor="exampleInputCustomer1">Customer</label>
                            <select className="form-control" value={this.state.customer} onChange={this.handleCutomerChange}>
                                    <option value='ec'>select</option>
                                    {
                                        this.state.customers.map((customer) => {
                                            return (
                                                <option key={customer._id} value={customer._id}>{customer.name}</option>
                                            )
                                        })
                                    }
                            </select>
                        </div>
                    message: <textarea className="form-control" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                    <br />
                    <p>Preority:</p>
                    <input type="radio" onChange={this.handlePriorityChange} value="high" name="priority" />High<br />
                    <input type="radio" onChange={this.handlePriorityChange} value="medium" name="priority" />Medium<br />
                    <input type="radio" onChange={this.handlePriorityChange} value="low" name="priority" />Low
                    <br /> <br />
                    <div className="form-group">
                            <label htmlFor="exampleInputDepartment1">Department</label>
                            <select className="form-control" value={this.state.department} onChange={this.handleDepartmentChange}>
                                <option value=''>select</option>
                                {
                                    this.state.departments.map((department) => {
                                        return (
                                            this.state.departments.map((department) => {
                                                return <option value={department._id} key={department._id}>{department.name}</option>
                                            })
                                        )
                                    })
                                }
                            </select>
                    </div>
                    <div className="form-group">
                            <label htmlFor="exampleInputEmployee1">Employee</label>
                            <select className="form-control" value={this.state.employee} onChange={this.handleEmployeeChange}>
                                <option value=''>select</option>
                                {
                                    this.state.employees.map((employee) => {
                                        return (
                                            <option key={employee._id} value={employee._id}>{employee.name}</option>
                                        )
                                    })
                                }
                            </select>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default TicketForm