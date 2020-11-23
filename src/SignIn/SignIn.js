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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({...this.state,[event.target.name]:value})
        console.log(value)
    }

    handleSubmitBasicAuth  = ev =>{
        ev.preventDefault();
        const{username,password} = this.state
        console.log(username,password)
        
    }
    render() {
        return (
            <div>
            <h2 id = "signin-header">Sign In</h2>
            <form onSubmit = {this.handleSubmitBasicAuth}>
                <label htmlFor ="username">Username:</label>
                <input type="text" id ="username" name="username" onChange = {this.handleChange}/>
                <br/>
                <label htmlFor ="password">Password:</label>
                <input type="text" id ="password" name="password" onChange = {this.handleChange}/>
                <br/>
                <Button type="cancel" className = "NavBtn_blue" btnName="Cancel" onClick={() => this.props.history.goBack()}/>
                <button type = "submit" className = "NavBtn_blue">Submit</button>
            </form>
            </div>
            )
    }
}

export default SignIn;