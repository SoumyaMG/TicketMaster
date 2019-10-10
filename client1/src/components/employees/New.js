import React from 'react'
import axios from '../../config/axios'

import EmployeeForm from './Form'

class EmployeeNew extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('/employees', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    this.props.history.push('/employees')
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2 className="mb-4">Add New Employee</h2>
                <EmployeeForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default EmployeeNew