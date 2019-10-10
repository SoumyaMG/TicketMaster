import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

class EmployeeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const employees = response.data
                this.setState(() => ({ employees, isLoading: false }))
            })
    }
    render() {
        console.log(this.state.employees)
        return (
            <div>
                <h2 className="mb-4">Listing Employees</h2>
                {
                    this.state.isLoading ? (<div className="spinner-border text-primary mb-4" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>) : (
                        this.state.employees.length === 0 ? (<p>No employees found</p>) :
                            (
                                <ul className="list-group mb-4">
                                    {
                                        this.state.employees.map(function (employee) {
                                            return <li className="list-group-item" key={employee._id}><Link to={`/employees/${employee._id}`}>{employee.name}</Link></li>
                                        })
                                    }
                                </ul>
                            )
                    )

                }
                <h4><Link to="/employees/new">Add Employee</Link></h4>
            </div>

        )
    }
}

export default EmployeeList