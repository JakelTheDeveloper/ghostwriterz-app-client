import React, { Component } from 'react';
// import './LandingPage.css'

class Demo extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        return (<div>
            This is the demo page.
        </div>)
    }
}

export default Demo;