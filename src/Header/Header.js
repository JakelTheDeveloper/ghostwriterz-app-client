import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
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
                  <li><Link to ='/demo' onClick ={()=> {this.props.updateS()}} className = "navLinks">Demo</Link></li>
                  <li><Link to ='/signin' className = "navLinks">Sign In</Link></li>
                  <li><Link to ='/signup' className = "navLinks">Sign Up</Link></li>
              </ul>
          </nav>
        </div>
        
        
    )
}
}
export default Header