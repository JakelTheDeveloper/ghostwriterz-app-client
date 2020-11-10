import React, { Component } from 'react';
// import './LandingPage.css'

class SignUp extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        return (<div>
            This is the sign up page.
        </div>)
    }
}

export default SignUp;