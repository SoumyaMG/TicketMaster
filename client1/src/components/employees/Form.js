import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.isEdit ? props.employee.name : '',
            email: props.isEdit ? props.employee.email : '',
            mobile: props.isEdit ? props.employee.mobile : '',
            department: props.isEdit ? props.employee.department : '',
            departments: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleMobileChange = this.handleMobileChange.bind(this)
        this.handleDeptChange = this.handleDeptChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department
        }

        this.props.handleSubmit(formData)
    }

    handleNameChange(e) {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    handleEmailChange(e) {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    handleMobileChange(e) {
        const mobile = e.target.value
        this.setState(() => ({ mobile }))
    }

    handleDeptChange(e) {
        const department = e.target.value
        this.setState(() => ({ department }))
    }

    componentDidMount() {
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
                            <label htmlFor="exampleInputName1">Name</label>
                            <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control" id="exampleInputName1" placeholder="Enter name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputmobile1">Mobile</label>
                            <input type="text" value={this.state.mobile} onChange={this.handleMobileChange} className="form-control" id="exampleInputmobile1" placeholder="Enter mobile"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputdepartment1">Department</label>
                            <select className="form-control" value={this.state.department} onChange={this.handleDeptChange}>
                                <option value=''>select</option>
                                {
                                    this.state.departments.map(function (department) {
                                        return <option value={department._id} key={department._id}>{department.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button> or <Link to="/employees">back</Link>
                    </form>
            </div>
        )
    }
}

export default EmployeeForm