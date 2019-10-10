import React from 'react'
import { Link } from 'react-router-dom'

class DepartmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.isEdit ? props.department.name : '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name: this.state.name
        }

        this.props.handleSubmit(formData)
    }

    handleNameChange(e) {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    render() {
        return (
            <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-control" id="exampleInputName1" placeholder="Enter name"/>
                        </div><br />
                        <button type="submit" className="btn btn-primary">Submit</button>  or <Link to="/departments">back</Link>
                    </form>
            </div>
        )
    }
}

export default DepartmentForm