import React from 'react'
import axios from '../../config/axios'

import TicketForm from './Form'

class TicketNew extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('/tickets', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    this.props.history.push('/tickets')
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2 className="mb-4">Add New Ticket</h2>
                <TicketForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default TicketNew