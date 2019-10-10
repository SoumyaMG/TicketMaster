import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

class EmployeeShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: {}
        }
        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const employee = response.data
                this.setState(() => ({ employee }))
            })
    }

    handleRemove() {
        const confirmRemove = window.confirm("Are you Sure???")
        if (confirmRemove) {
            axios.delete(`/employees/${this.state.employee._id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            })
                .then(response => {
                    this.props.history.push("/employees")
                })
        }
    }


    render() {
        return (
            <div>
                <h2>Employee Details</h2>
                <p><b>Id  :  </b>{this.state.employee._id}</p>
                <p><b>Name  :  </b>{this.state.employee.name}</p>
                <p><b>Email  :  </b>{this.state.employee.email}</p>
                <p><b>Mobile  :  </b>{this.state.employee.mobile}</p>
                <p><b>Department  :  </b>{this.state.employee.department}</p>
                <p><Link to={`/employees/edit/${this.state.employee._id}`}>Edit</Link></p>
                <button className="btn btn-primary" onClick={this.handleRemove}>remove</button>
            </div>
        )
    }
}

export default EmployeeShow