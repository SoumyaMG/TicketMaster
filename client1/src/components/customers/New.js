import React from 'react'
import axios from '../../config/axios'

import CustomerForm from './Form'

class CustomerNew extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('/customers', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    this.props.history.push('/customers')
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2>Add New Customer</h2>
                <CustomerForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default CustomerNew