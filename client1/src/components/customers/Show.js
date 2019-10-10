import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

class CustomerShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer: {}
        }
        this.handleRemove = this.handleRemove.bind(this)
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
                this.setState(() => ({ customer }))
            })
    }

    handleRemove() {
        const confirmRemove = window.confirm("Are you Sure???")
        if (confirmRemove) {
            axios.delete(`/customers/${this.state.customer._id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            })
                .then(response => {
                    this.props.history.push("/customers")
                })
        }
    }

    render() {
        return (
            <div>
                <h2 className="mb-4">Customer Details</h2>
                <p><b>Id  :  </b>{this.state.customer._id}</p>
                <p><b>Name  :  </b>{this.state.customer.name}</p>
                <p><b>Email  :  </b>{this.state.customer.email}</p>
                <p><Link to={`/customers/edit/${this.state.customer._id}`}>Edit</Link></p>
                <button className="btn btn-primary" onClick={this.handleRemove}>remove</button>
            </div>
        )
    }
}

export default CustomerShow