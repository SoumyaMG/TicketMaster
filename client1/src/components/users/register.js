import React from 'react'
import axios from '../../config/axios'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            errMsg: '',
            successMsg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/users/register', formData)
            .then((response) => {
                // console.log('resolve', response.data)
                if (response.data.hasOwnProperty('errors')) {
                    this.setState({
                        errMsg: response.data.message
                    })
                }
                else {
                    this.setState({
                        successMsg: 'successfully registered',
                        username: '',
                        email: '',
                        password: '',
                        errMsg: ''
                    })

                }
                console.log(response.data)
            })
            .catch((err) => {
                console.log('reject', err)
            })
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                {this.state.errMsg && <p>{this.state.errMsg}</p>}
                {this.state.successMsg && <p>{this.state.successMsg}</p>}
                <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            < input type="text" id="inputName3" value={this.state.username} name="username" onChange={this.handleChange} className="form-control" placeholder="Username"/>
                        </div>
                    </div><br/>
                    <div className="form-row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        
                            <input type="text" id="inputEmail3" value={this.state.email} name="email" onChange={this.handleChange} className="form-control" placeholder="Email"/>
                        </div>
                    </div><br/>
                    <div className="form-row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        
                            <input type="password" id="inputPassword3" value={this.state.password} name="password" onChange={this.handleChange} className="form-control" placeholder="Password"/>
                    </div>
                    </div><br/>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register