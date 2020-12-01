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
    let computedHeaderName;
    let computedNavName;
    let computedUlName;
    let computedLiName;
        switch(this.props.theme) {
            case 'red':
                computedHeaderName = "header_red"
                computedNavName = 'Nav_red'
                computedUlName = 'Ul_red'
                computedLiName = 'Li_red'
              break;
            case 'green':
                computedHeaderName = "header_green"
                computedNavName = 'Nav_green'
                computedUlName = 'Ul_green'
                computedLiName = 'Li_green'
              break;
              case 'yellow':
                computedHeaderName = "header_yellow"
                computedNavName = 'Nav_yellow'
                computedUlName = 'Ul_yellow'
                computedLiName = 'Li_yellow'
              break;
              case 'pink':
                computedHeaderName = "header_pink"
                computedNavName = 'Nav_pink'
                computedUlName = 'Ul_pink'
                computedLiName = 'Li_pink'
              break;
              case 'orange':
                computedHeaderName = "header_orange"
                computedNavName = 'Nav_orange'
                computedUlName = 'Ul_orange'
                computedLiName = 'Li_orange'
              break;
              case 'purple':
                computedHeaderName = "header_purple"
                computedNavName = 'Nav_purple'
                computedUlName = 'Ul_purple'
                computedLiName = 'Li_purple'
              break;
            default:
                computedHeaderName = "header_blue"
                computedNavName = 'Nav_blue'
                computedUlName = 'Ul_blue'
                computedLiName = 'Li_blue'
          }
    return(
        <div>
            <header>
           <h1>
            <Link to ='/' className = {computedHeaderName}>GhostWriterz</Link>
          </h1>
        </header>
        <nav className = {computedNavName}>
              <ul className = {computedUlName}>
                  <li><Link to ='/dashboard' className = {computedLiName}>Dashboard</Link></li>
                  {/* {(this.props.user.length>0)? */}
                  <li><Link to ='/viewlyrics' className = {computedLiName}>Lyrics</Link></li>
                  <li></li>
                  <li><Link to ='/createlyrics' className = {computedLiName}>Create</Link></li>
                  <li><Link to ='/' onClick ={()=> {this.props.updateAuth()}} className = {computedLiName}>Sign Out</Link></li>
              </ul>
          </nav>
        </div>
        
        
    )
}
}
export default DemoHeader