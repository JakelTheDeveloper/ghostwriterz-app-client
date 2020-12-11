import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
class Header extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            <Link to='/' className="title_header">GhostWriterz</Link>
          </h1>
        </header>
        <nav className="nav_header">
          <ul className="ul_header">
            <li><Link to='/signin' className="li_header_">Sign In</Link></li>
            <li><Link to='/signup' className="li_header_">Sign Up</Link></li>
          </ul>
        </nav>
      </div>


    )
  }
}
export default Header