import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
class DemoHeader extends Component{
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
                  <li><Link to ='/demo' className = "navLinks">Dashboard</Link></li>
                  <li><Link to ='/viewlyrics' className = "navLinks">Lyrics</Link></li>
                  <li><Link to ='/createlyrics' className = "navLinks">Create</Link></li>
                  <li><Link to ='/' onClick ={()=> {this.props.updateS()}} className = "navLinks">Sign Out</Link></li>
              </ul>
          </nav>
        </div>
        
        
    )
}
}
export default DemoHeader