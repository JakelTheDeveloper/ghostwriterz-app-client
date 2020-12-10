import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
class DemoHeader extends Component {
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
            <li><Link to='/dashboard' className="li_header">Dashboard</Link></li>
            <li><Link to='/viewlyrics' className="li_header">My Lyrics</Link></li>
            <li><Link to='/lyrics' className="li_header">Find Lyrics</Link></li>
            <li><Link to='/createlyrics' className="li_header">Create</Link></li>
            <li><Link to='/' onClick={() => { this.props.updateAuth() }} className="li_header">Sign Out</Link></li>
          </ul>
        </nav>
      </div>


    )
  }
}
export default DemoHeader