import React, { Component } from 'react';
import { Route, Switch,withRouter } from 'react-router-dom';
import LyricDatabase from '../LyricDatabase/LyricDatabase';
import Demo from '../Demo/Demo';
import UserProfile from '../User/UserProfile';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import ViewLyrics from '../ViewLyrics/ViewLyrics';
import CreateLyrics from '../CreateLyrics/CreateLyrics'
import Header from '../Header/Header';
import DemoHeader from '../Header/DemoHeader';
import EditLyrics from '../EditLyrics/EditLyrics';
import LandingPage from '../LandingPage/LandingPage';
import './App.css'
import AppContext from './AppContext';
import Database from '../LyricDatabase/Database';



class App extends Component {

  static defaultProps = {
    match: {
      params: {}
    }
  }

  state = {
    lyrics: [],
    users: [],

    demo: false,
    error: null,
    theme: "yellow"
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/lyrics`)
      .then(response => response.json())
      .then(lyrics => this.setState({ lyrics }))
    fetch(`http://localhost:8000/api/users`)
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }



  // this.setState({ demo: true = !false})
  updateDemoState = () => {
    this.setState({ demo: this.state.demo = !this.state.demo })
  }

  deleteLyrics = lyricId => {
    this.setState({
      lyrics: this.state.lyrics.filter(lyrics => lyrics.id !== lyricId)
    });
  };

  addLyrics = createdLyrics => {
    this.setState({ lyrics: [...this.state.lyrics, createdLyrics] })
  }

  updateLyrics = updatedLyrics => {

    const newLyrics = this.state.lyrics.map(lyric =>
      (lyric.id === updatedLyrics.id)
        ? updatedLyrics
        : lyric
    )
    this.setState({
      lyrics: newLyrics
    })
  }

  renderNavRoutes() {
    if (this.state.demo === false) {
      return (
        <Route path="/" render={(props) => (
          <Header updateS={this.updateDemoState}
            theme={this.state.theme} />
        )}
        />
      )
    } else {
      return (
        <Route path="/" render={(props) => (
          <DemoHeader updateS={this.updateDemoState}
            theme={this.state.theme} />
        )}
        />
      )
    }

  }

  renderMainRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={(props) => (
            <LandingPage theme={this.state.theme} />
          )}
          />
          <Route path="/lyrics/:lyric_id" component={EditLyrics} />
          <Route path="/createlyrics" component={CreateLyrics} />
          <Route path="/viewlyrics" component={ViewLyrics} />

          <Route path="/lyrics" render={(props) => (
            <LyricDatabase theme={this.state.theme} />
          )}
          />
          {/* {['/', '/lyrics/:lyric_id'].map(path => (
            <Route
              exact
              key={path}
              path={path}
              component={ViewLyrics} />
          ))} */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/demo" component={Demo} />
          <Route path="/:user" component={UserProfile} />


        </Switch>
        {/* <Route exact path="/:userprofile" component = {LyricDatabase}/> */}
      </>
    )
  }

  render() {
    const contextValue = {
      lyrics: this.state.lyrics,
      currentUser: 1,
      users: this.state.users,
      addLyrics: this.addLyrics,
      deleteLyrics: this.deleteLyrics,
      updateLyrics: this.updateLyrics,
      demo: this.demo
    }
    let computedClassName;
    switch (this.state.theme) {
      case 'red':
        computedClassName = 'App_nav_red'
        break;
      case 'green':
        computedClassName = 'App_nav_green'
        break;
      case 'yellow':
        computedClassName = 'App_nav_yellow'
        break;
      case 'pink':
        computedClassName = 'App_nav_pink'
        break;
      case 'orange':
        computedClassName = 'App_nav_orange'
        break;
      case 'purple':
        computedClassName = 'App_nav_purple'
        break;
      default:
        computedClassName = 'App_nav_blue'
    }
    return (
      <AppContext.Provider value={contextValue}>
        <div className="App">
          <nav className={computedClassName}>{this.renderNavRoutes()}</nav>
          <main className="App_main">{this.renderMainRoutes()}</main>
        </div>
      </AppContext.Provider>

    )
  }

};
export default withRouter(App);
