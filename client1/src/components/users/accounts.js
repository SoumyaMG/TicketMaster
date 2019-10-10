import React from 'react'
import axios from '../../config/axios'

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        axios.get('/users/account', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response)
                const user=response.data
                this.setState({ user })
            })
    }
    render() {
        //console.log(this.state.user)
        return (
            <div>
                <h2>User Information</h2>
                <p><b>Username  : </b>{this.state.user.username}</p>
                <p><b>Email  : </b>{this.state.user.email}</p>
            </div>
        )
    }
}

export default Account