import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LyricDatabase from '../LyricDatabase/LyricDatabase';
import Demo from '../Demo/Demo';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import ViewLyrics from '../ViewLyrics/ViewLyrics';
import CreateLyrics from '../CreateLyrics/CreateLyrics'
import Button from '../Button/Button';
import Header from '../Header/Header';
import DemoHeader from '../Header/DemoHeader';
import LandingPage from '../LandingPage/LandingPage';
import './App.css'



class App extends Component {
  state = {
    lyrics: [],
    demo: false,
    error: null
  }
  // this.setState({ demo: true = !false})
  updateDemoState = () => {
     this.setState({demo:this.state.demo = !this.state.demo})
     console.log(this.state.demo)
  }
  
  renderNavRoutes() {
    if (this.state.demo === false) {
      return (
        <Route path="/" render={(props) => (
          <Header updateS={this.updateDemoState} />
        )}
        />
      )
        } else {
          return (
            <Route path="/" render={(props) => (
              <DemoHeader updateS={this.updateDemoState} />
            )}
            />
          )
    }

  }

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/lyrics" component={LyricDatabase} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/demo" component={Demo} />
        <Route exact path="/createlyrics" component={CreateLyrics} />
        <Route exact path="/viewlyrics" component={ViewLyrics} />
        {/* <Route exact path="/:userprofile" component = {LyricDatabase}/> */}

      </>
    )
  }

  render() {
    const contextValue = {
      lyrics: this.state.lyrics,
      addLyrics: this.addLyrics,
      deleteLyrics: this.deleteLyrics,
      updateLyrics: this.updateLyrics,
      demo: this.demo
    }
    //  const { lyrics } = this.props
    //  const newLyrics = lyrics.map(lyric => <li>{lyric.artist}</li>)
    return (
      <div className="App">
        <nav className="App_nav">{this.renderNavRoutes()}</nav>
        <main className="App_main">{this.renderMainRoutes()}</main>


      </div>

    )
  }

};
export default App;
