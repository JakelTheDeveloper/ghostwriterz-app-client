import React, { Component } from 'react';
import Button from '../Button/Button';
import AppContext from '../App/AppContext';
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

    handleSubmitBasicAuth  = ev => {
        ev.preventDefault();
        const{username,password} = this.state
        console.log(username,password)

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
          .then(res => {
            if (!res.ok) {
                throw new Error('Wrong username or password');
            }
              return res.json()
            })
          .then((data)=>{
              this.context.updateAuth(data.authToken,username)
              this.props.history.push(`/dashboard`)

          })
         .catch(error => console.log(error))
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