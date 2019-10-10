import React from 'react'
import axios from '../../config/axios'

import CustomerForm from './Form'

class CustomerEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer: {},
            isLoading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/customers/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const customer = response.data
                this.setState(() => ({ customer, isLoading: false }))
            })
    }

    handleSubmit(formData) {
        const id = this.props.match.params.id
        axios.put(`/customers/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    this.props.history.push(`/customers/${id}`)
                }
            })
            .catch(err => {
                alert(err)
            })
    }


    render() {
        return (
            <div>
                <h2>Edit Customer</h2>
                {
                    (!this.state.isLoading && <CustomerForm
                        customer={this.state.customer}
                        isEdit={true}
                        handleSubmit={this.handleSubmit} />)
                }
            </div>
        )
    }
}

export default CustomerEdit