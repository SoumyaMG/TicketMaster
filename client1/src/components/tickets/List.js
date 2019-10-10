import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

class TicketList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: []
        }
    }

    componentDidMount() {
        axios.get('/tickets', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const tickets = response.data
                this.setState(() => ({ tickets }))
            })
    }
    render() {
        return (
            <div>
                <h2 className="mb-4">Listing Tickets</h2>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Ticket_Id</th>
                            <th scope="col">Customer_Name</th>
                            <th scope="col">Preority</th>
                            <th scope="col">Department</th>
                            <th scope="col">Employee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tickets.map((ticket) => {
                                return (<tr key={ticket._id}>
                                    <td>{ticket._id}</td>
                                    <td>{ticket.customer}</td>
                                    <td>{ticket.priority}</td>
                                    <td>{ticket.department}</td>
                                    <td>{ticket.employee}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br/>
                <h4><Link to="/tickets/new">Add Ticket</Link></h4>
            </div>
        )
    }
}

export default TicketList