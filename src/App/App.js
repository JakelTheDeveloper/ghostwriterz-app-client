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
import EditLyrics from '../EditLyrics/EditLyrics';
import LandingPage from '../LandingPage/LandingPage';
import './App.css'
import AppContext from './AppContext';
import lyrics from '../STORE';



class App extends Component {

  static defaultProps = {
    match: {
        params: {}
    }
}

  state = {
    lyrics: [],
    demo: false,
    error: null,
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/lyrics`)
      .then(response => response.json())
      .then(lyrics => this.setState({ lyrics }))
  }


  // this.setState({ demo: true = !false})
  updateDemoState = () => {
    console.log(this.state.lyrics)
    this.setState({ demo: this.state.demo = !this.state.demo })
    console.log(this.state.demo)
  }

  updateLyrics = updatedLyrics => {
   
    const newLyrics = this.state.lyrics.map(lyric =>
      (lyric.id === updatedLyrics.id)
        ? updatedLyrics
        : lyric
    )
    console.log(updatedLyrics)
    this.setState({
      lyrics: newLyrics
    })
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
        <Route exact path="/lyrics/:lyric_id" component={EditLyrics} />
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
      <AppContext.Provider value={contextValue}>
        <div className="App">
          <nav className="App_nav">{this.renderNavRoutes()}</nav>
          <main className="App_main">{this.renderMainRoutes()}</main>
        </div>
      </AppContext.Provider>

    )
  }

};
export default App;
