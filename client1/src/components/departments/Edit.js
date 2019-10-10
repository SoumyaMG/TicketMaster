import React from 'react'
import axios from '../../config/axios'

import DepartmentForm from './Form'

class DepartmentEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: {},
            isLoading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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
                this.setState(() => ({ department, isLoading: false }))
            })
    }

    handleSubmit(formData) {
        const id = this.props.match.params.id
        axios.put(`/departments/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    this.props.history.push(`/departments/${id}`)
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2>Edit Department</h2>
                {
                    (!this.state.isLoading && <DepartmentForm
                        department={this.state.department}
                        isEdit={true}
                        handleSubmit={this.handleSubmit} />)
                }
            </div>
        )
    }
}

export default DepartmentEdit