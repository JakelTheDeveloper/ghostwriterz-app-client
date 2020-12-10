import React, { Component } from 'react'
import AppContext from '../App/AppContext'
import ValidationError from '../ValidationError'
import config from '../config'
import TokenService from '../services/token-service'
import decode from 'jwt-decode'
import './SignIn.css'

class SignIn extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext

    state = {
        username: '',
        password: '',
        error: null
    }
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({ ...this.state, [event.target.name]: value })
    }

    clearError = () => {
        this.setState({
            error: null
        })
    }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { username, password } = this.state
        const payload = {
            username: username,
            password: password
        }
        fetch(`${config.URL}/api/auth/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json().then((data) => {
                        TokenService.saveAuthToken(data.authToken)
                        const decodedToken = decode(data.authToken)
                        const user = [{ id: decodedToken.user.id, nickname: decodedToken.user.nickname }]
                        this.props.updateUser(user)
                        this.props.history.push(`/dashboard`)
                    })
            )
            .catch(error => this.setState({ error: error = error.error }))
    }
    render() {
        return (
            <div>
                <h2 id="signin-header">Sign In</h2>
                <form id = "signin_form" onSubmit={this.handleSubmitBasicAuth}>
                    <div className = "elements">
                    <label htmlFor="username" id="username">Email:</label>
                    <input type="text" className="username" name="username" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="password" id="password">Password:</label>
                    <input type="password" className="password" name="password" onChange={this.handleChange} />
                    <br />
                    </div>
                    {<ValidationError message={this.state.error} clearError={this.clearError} />}
                    <button type="submit" className="NavBtn">Submit</button>
                    <button type="cancel" className="NavBtn" onClick={() => this.props.history.push(`/viewlyrics`)}>Cancel</button>

                </form>
            </div>
        )
    }
}

export default SignIn