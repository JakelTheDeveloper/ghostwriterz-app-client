import React, { Component } from 'react';
import Button from '../Button/Button';
import './SignIn.css'

class SignIn extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        return (
            <div>
            <h2 id = "signin-header">Sign In</h2>
            <form>
                <label htmlFor ="username">Username:</label>
                <input type="text" id ="username"/>
                <br/>
                <label htmlFor ="password">Password:</label>
                <input type="text" id ="password"/>
                <br/>
                <Button type="cancel" btnName="Cancel"/>
                <Button type="submit" btnName="Submit"/>
            </form>
            </div>
            )
    }
}

export default SignIn;