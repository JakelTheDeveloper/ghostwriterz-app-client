import React, { Component } from 'react';
import Button from '../Button/Button';
import AppContext from '../App/AppContext';
import ValidationError from '../ValidationError';
import './SignIn.css'

class SignIn extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext;

    state = {
        username:'',
        password:'',
        error:null
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

    clearError = () => {
        this.setState({
            error: null
        })
    }

    handleSubmitBasicAuth  = ev => {
        ev.preventDefault();
        const{username,password} = this.state
        const payload = {
            username:username,
            password:password
          }
          fetch(`http://localhost:8000/api/auth/signin`, {
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body: JSON.stringify(payload)
          })
          .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json().then((data)=> {
                    this.context.updateAuth(data.authToken,username)
                    this.props.history.push(`/dashboard`)
                })
            )
         .catch(error => this.setState({error:error = error.error}))
        }
    render() {
        return (
            <div>
            <h2 id = "signin-header">Sign In</h2>
            <form onSubmit = {this.handleSubmitBasicAuth}>
                <label htmlFor ="username">Email:</label>
                <input type="text" id ="username" name="username" onChange = {this.handleChange}/>
                <br/>
                <label htmlFor ="password">Password:</label>
                <input type="text" id ="password" name="password" onChange = {this.handleChange}/>
                <br/>
                {<ValidationError message={this.state.error} clearError={this.clearError} />}
                <button type = "submit" className = "NavBtn_blue">Submit</button>
                <Button type="cancel" className = "NavBtn_blue" btnName="Cancel" onClick={() => this.props.history.push(`/viewlyrics`)}/>
                
            </form>
            </div>
            )
    }
}

export default SignIn;