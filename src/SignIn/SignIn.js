import React, { Component } from 'react';
import Button from '../Button/Button';

import './SignIn.css'

class SignIn extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    state = {
        username:'',
        password:''
    }
    constructor(props){
        super(props);
    }
    handleSubmitBasicAuth  = ev =>{
        ev.preventDefault();
        const{username,password} = ev.target
        // saveCredentials(window.btoa(username.value + ':' + password.value)
        // TokenService.saveAuthToken(
        // TokenService.makeBasicAuthToken(username.value, password.value)
        //     )
    username.value = ''
    password.value = ''
    }
    render() {
        return (
            <div>
            <h2 id = "signin-header">Sign In</h2>
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor ="username">Username:</label>
                <input type="text" id ="username" name="username"/>
                <br/>
                <label htmlFor ="password">Password:</label>
                <input type="text" id ="password" name="password"/>
                <br/>
                <Button type="cancel" className = "NavBtn" btnName="Cancel" onClick={() => this.props.history.goBack()}/>
                <button type = "submit" className = "NavBtn">Submit</button>
            </form>
            </div>
            )
    }
}

export default SignIn;