import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LyricDatabase from '../LyricDatabase/LyricDatabase';
import Button from '../Button/Button';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import './App.css'



class App extends Component {
  state = {
    lyrics: this.props.lyrics,
    error:null
  }

  renderNavRoutes(){
    return(
      <>
        <Route path="/" component = {Header}/>
      </>
    )
  }

  renderMainRoutes(){
    return(
      <>
      <Route exact path="/" component = {LandingPage}/>
      <Route exact path="/lyrics" component = {LyricDatabase}/>
      </>
    )
  }

  render() {
    //  const { lyrics } = this.props
    //  const newLyrics = lyrics.map(lyric => <li>{lyric.artist}</li>)
    return (
      <div className = "App">  
        <nav className = "App_nav">{this.renderNavRoutes()}</nav>
        <main className = "App_main">{this.renderMainRoutes()}</main>
        
        
        </div>
        
    )
  }

};
export default App;
