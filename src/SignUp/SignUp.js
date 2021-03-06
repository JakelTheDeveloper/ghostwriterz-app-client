import React, { Component } from 'react'
import ValidationError from '../ValidationError'
import config from '../config'
import './SignUp.css'

class SignUp extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    state = {
        fullname: '',
        username: '',
        email: '',
        password: '',
        password_confirm: '',
        error: null
    }

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    clearError = () => {
        this.setState({
            error: null
        })
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({ ...this.state, [event.target.name]: value })
    }

    handleSubmitRegister = ev => {
        ev.preventDefault()
        const { fullname, username, email, password, password_confirm } = this.state
        const newUser = {
            fullname: fullname,
            username: email,
            nickname: username,
            password: password,
            passwordConfirm: password_confirm
        }
        return fetch(`${config.URL}/api/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json().then(this.props.history.push('/'))
                        .then(window.location.reload(false)),
            )
            .catch(error => this.setState({ error: error = error.error }))
    }


    render() {
        return (
            <div>
                <h2 id="signup-header">Create Account</h2>
                {<ValidationError className="error" message={this.state.error} clearError={this.clearError} />}
                <form onSubmit={this.handleSubmitRegister}>
                    <label htmlFor="name" className="name" >Full Name:</label>
                    <input type="text" id="name" name="fullname" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="username" className="_username">UserName:</label>
                    <input type="text" id="username" name="username" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="email" className="email">Enter email:</label>
                    <input type="text" id="email" name="email" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="password" className="_password">Password:</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="password-confirm" className="password-confirm">Confirm password:</label>
                    <input type="password" id="password-confirm" name="password_confirm" onChange={this.handleChange} />
                    <br />
                    <button type="submit" className="NavBtn">Submit</button>
                    <button type="cancel" className="NavBtn" onClick={() => this.props.history.push('/')}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default SignUp