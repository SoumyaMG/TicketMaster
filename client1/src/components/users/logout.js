import React from 'react'
import axios from '../../config/axios'

class Logout extends React.Component {

    componentDidMount() {
        axios.delete('/users/logout',{
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(() => {
                this.props.history.push('/users/login')
                window.location.reload()
            })

        localStorage.removeItem('token')
    }

    render() {
        return (
            <div>Logged out successfully</div>
        )
    }
}

export default Logout