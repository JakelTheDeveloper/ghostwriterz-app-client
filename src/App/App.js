import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom';
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
import config from '../config';



class App extends Component {

  static defaultProps = {
    match: {
      params: {}
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      resData: '',
      lyrics: [],
      users: [],
      user: [],
      current: 0,
      demo: false,
      error: null,
      theme: "blue",
      username: ''
    }
  }


  componentDidMount() {
  
    fetch(`${config.URL}/api/lyrics`)
      .then(response =>{
        if(!response.ok)
        return response.json().then(e=>Promise.reject(e))
        console.log(response.json)
       return response.json()
      })
      .then(lyrics => this.setState({ lyrics }))
    .catch(error => console.log(error))
    fetch(`${config.URL}/api/users`)
    .then(response =>{
      if(!response.ok)
      return response.json().then(e=>Promise.reject(e))
      console.log(response)
     return response.json()
    })
      .then(users => {
        this.setState({ users })
      })
      .catch(error => console.log(error))
  }

  //   createTokenProvider = () => {
  //     let _token = {accessToken:string, refreshToken:string} = 
  //     JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH')||'')||null;
  //     return {
  //       getToken,
  //       isLoggedIn,
  //       setToken,
  //       subscribe,
  //       unsubscribe,
  //     };
  // }

  updateAuth = (token, person) => {
    let { resData, users, isAuthenticated, demo, username, current, user } = this.state;
    
    if (resData === '') {
      let thisUser = users.filter(user => user.username === person)
      this.setState({
        isAuthenticated: isAuthenticated = !isAuthenticated,
        resData: resData = token, demo: demo = false, username: username = person,
        current: current = thisUser[0].id, user: user = thisUser
      })
    } else {
      this.setState({
        isAuthenticated: isAuthenticated = !isAuthenticated,
        resData: resData = '', demo: demo = false, username: username = '',
        current: current = 0, user: user = []
      })
    }
  }

  // this.setState({ demo: true = !false})
  updateDemoState = () => {
    let {demo,resData,isAuthenticated} = this.state
    this.setState({ demo: demo = !demo,resData:resData = 'demoToken',isAuthenticated:isAuthenticated = !isAuthenticated })
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
    if (this.state.demo === true || this.state.isAuthenticated === true) {
      return (
        <Route path="/" render={(props) => (
          <DemoHeader updateAuth={this.updateAuth}
          theme={this.state.theme} users={this.state.users} user={this.state.user}
          current={this.state.current} {...props} />
        )}

        />
      )
    } else {
      return (
        <Route path="/" render={(props) => (
          <Header updateS={this.updateDemoState}
            theme={this.state.theme} users={this.state.users} user={this.state.user}
            current={this.state.current} {...props}/>
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

          <Route path="/lyrics/:lyric_id" render={(props) => (
            <EditLyrics theme={this.state.theme} users={this.state.users} user={this.state.user}
              current={this.state.current} {...props} />
          )}
          />

          <Route path="/createlyrics" render={(props) => (
            <CreateLyrics theme={this.state.theme} users={this.state.users} user={this.state.user}
              current={this.state.current} {...props} />
          )}
          />

          <Route path="/viewlyrics" render={(props) => (
            <ViewLyrics theme={this.state.theme} users={this.state.users} user={this.state.user}
              current={this.state.current} {...props} />
          )}
          />

          <Route path="/lyrics" render={(props) => (
            <LyricDatabase theme={this.state.theme} users={this.state.users} user={this.state.user}
            />
          )}
          />

          <Route path="/signin" render={(props) => (
            <SignIn theme={this.state.theme} users={this.state.users} user={this.state.user}
              current={this.state.current} {...props} />
          )}
          />

          <Route path="/signup" render={(props) => (
            <SignUp theme={this.state.theme} users={this.state.users} user={this.state.user}
              current={this.state.current} {...props} />
          )}
          />

          {/* <Route path="/demo" render={(props) => (
            <Demo theme={this.state.theme} user={this.state.user} />
          )}
          /> */}

          <Route path="/dashboard" render={(props) => (
            <UserProfile theme={this.state.theme} users={this.state.users} user={this.state.user}
              current={this.state.current} lyrics = {this.state.lyrics} {...props} />
          )}
          />

          {/* {['/', '/lyrics/:lyric_id'].map(path => (
            <Route
              exact
              key={path}
              path={path}
              component={ViewLyrics} />
          ))} */}

        </Switch>
        {/* <Route exact path="/:userprofile" component = {LyricDatabase}/> */}
      </>
    )
  }

  render() {
    const contextValue = {
      lyrics: this.state.lyrics,
      currentUser: this.state.current,
      user: this.state.user,
      addLyrics: this.addLyrics,
      deleteLyrics: this.deleteLyrics,
      updateLyrics: this.updateLyrics,
      demo: this.demo,
      updateAuth: this.updateAuth,
      isAuthenticated: this.state.isAuthenticated,
      resData: this.state.resData
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
