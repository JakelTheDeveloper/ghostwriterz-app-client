import React, { Component } from 'react';
import './Header.css';
import {Route,Link} from 'react-router-dom';
class Header extends Component{
    static defaultProps={
        match:{
            params:{}
        }
    }
render(){
    return(
        <div>
            <header>
           <h1>
            <Link to ='/' className = "header">GhostWriterz</Link>
          </h1>
        </header>
             <nav>
              <ul>
                  <li>Demo</li>
                  <li>Sign Up</li>
                  <li>Sign In</li>
              </ul>
          </nav>
        </div>
        
        
    )
}
}
export default Header