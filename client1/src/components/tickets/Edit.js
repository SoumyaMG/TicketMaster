import React from 'react'
import axios from '../../config/axios'

import TicketForm from './Form'

class TicketEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ticket: {},
            isLoading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/tickets/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const ticket = response.data
                this.setState(() => ({ ticket, isLoading: false }))
            })
    }

    handleSubmit(formData) {
        const id = this.props.match.params.id
        axios.put(`/tickets/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    this.props.history.push(`/tickets/${id}`)
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2>Edit Ticket</h2>
                {
                    (!this.state.isLoading && <TicketForm
                        ticket={this.state.ticket}
                        isEdit={true}
                        handleSubmit={this.handleSubmit} />)
                }
            </div>
        )
    }
}

export default TicketEdit