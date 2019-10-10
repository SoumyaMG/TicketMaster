import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

class DepartmentShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: {}
        }
        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/departments/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const department = response.data
                this.setState(() => ({ department }))
            })
    }

    handleRemove() {
        const confirmRemove = window.confirm("Are you Sure???")
        if (confirmRemove) {
            axios.delete(`/departments/${this.state.department._id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            })
                .then(response => {
                    this.props.history.push("/departments")
                })
        }
    }


    render() {
        console.log(this.state.department)
        return (
            <div>
                <h2 className="mb-4">Department Details</h2>
                <p><b>Id  :  </b>{this.state.department._id}</p>
                <p><b>Name  :  </b>{this.state.department.name}</p>
                <p><Link to={`/departments/edit/${this.state.department._id}`}>Edit</Link></p>
                <button className="btn btn-primary" onClick={this.handleRemove}>remove</button>
            </div>
        )
    }
}

export default DepartmentShow