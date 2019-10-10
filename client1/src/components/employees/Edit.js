import React from 'react'
import axios from '../../config/axios'

import EmployeeForm from './Form'

class EmployeeEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            employee: {},
            isLoading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                const employee = response.data
                this.setState(() => ({ employee, isLoading: false }))
            })
    }

    handleSubmit(formData) {
        const id = this.props.match.params.id
        axios.put(`/employees/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    this.props.history.push(`/employees/${id}`)
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2>Edit Employee</h2>
                {
                    (!this.state.isLoading && <EmployeeForm
                        employee={this.state.employee}
                        isEdit={true}
                        handleSubmit={this.handleSubmit} />)
                }
            </div>
        )
    }
}

export default EmployeeEdit