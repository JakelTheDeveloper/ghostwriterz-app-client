import React, { Component } from 'react';
import Button from '../Button/Button';
import './SignUp.css'

class SignUp extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        return (
            <div>
            <h2 id = "signup-header">Create Account</h2>
            <form>
                <label htmlFor ="username">Create a username:</label>
                <input type="text" id ="username"/>
                <br/>
                <label htmlFor ="email">Enter email:</label>
                <input type="text" id ="email"/>
                <br/>
                <label htmlFor ="password">Password:</label>
                <input type="text" id ="password"/>
                <br/>
                <label htmlFor ="password-confirm">Confirm password:</label>
                <input type="text" id ="password-confirm"/>
                <br/>
                <Button type="cancel"  className = "NavBtn" btnName="Cancel"/>
                <Button type="submit" className = "NavBtn" btnName="Submit"/>
            </form>
            </div>
            )
    }
}

export default SignUp;