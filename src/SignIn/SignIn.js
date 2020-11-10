import React, { Component } from 'react';
// import './LandingPage.css'

class SignIn extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        return (<div>
            This is the sign in page.
        </div>)
    }
}

export default SignIn;