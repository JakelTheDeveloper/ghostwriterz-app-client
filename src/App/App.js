import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import LyricDatabase from '../LyricDatabase/LyricDatabase'
import UserProfile from '../User/UserProfile'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import ViewLyrics from '../ViewLyrics/ViewLyrics'
import CreateLyrics from '../CreateLyrics/CreateLyrics'
import Header from '../Header/Header'
import DemoHeader from '../Header/DemoHeader'
import EditLyrics from '../EditLyrics/EditLyrics'
import LandingPage from '../LandingPage/LandingPage'
import './App.css'
import AppContext from './AppContext'
import config from '../config'
import TokenService from '../services/token-service'
import decode from 'jwt-decode'



class App extends Component {

  static defaultProps = {
    match: {
      params: {}
    }
  }
  constructor(props) {
    super(props)
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
    if (TokenService.hasAuthToken()) {
      this.setData()
    } else {
      this.props.history.push('/')
      fetch(`${config.URL}/api/lyrics`)
        .then(response => {
          if (!response.ok)
            return response.json().then(e => Promise.reject(e))
          return response.json()
        })
        .then(lyrics => this.setState({ lyrics }))
        .catch(error => this.setState({ error: error.message }))
      fetch(`${config.URL}/api/users`)
        .then(response => {
          if (!response.ok)
            return response.json().then(e => Promise.reject(e))
          return response.json()
        })
        .then(users => {
          this.setState({ users })
        })
        .catch(error => this.setState({ error: error.message }))
    }
  }


  setData = () => {
    let myLyrics = []
    const decodedToken = decode(TokenService.getAuthToken())
    fetch(`${config.URL}/api/lyrics`)
      .then(response => {
        if (!response.ok)
          return response.json().then(e => Promise.reject(e))
        return response.json()
      })
      .then(lyrics => myLyrics = lyrics)
      .catch(error => this.setState({ error: error.message }))
    fetch(`${config.URL}/api/users`)
      .then(response => {
        return response.json()
      })
      .then(users => {
        this.setState({
          users: users, user: this.state.user = users.filter(user => user.id === decodedToken.user.id),
          current: this.state.current = users.filter(user => user.id === decodedToken.user.id), lyrics: this.state.lyrics = myLyrics,
          isAuthenticated: this.state.isAuthenticated = true, demo: this.state.demo = false
        })
      }).catch(error => this.setState({ error: error.message }))
  }


  updateUser(user) {
    let { isAuthenticated, current } = this.state
    this.setState({
      user, current: current = user[0].id,
      isAuthenticated: isAuthenticated = true
    })
  }


  updateAuth = () => {
    let { isAuthenticated, demo, username, current, user } = this.state
    TokenService.clearAuthToken(config.TOKEN_KEY)
    this.setState({
      isAuthenticated: isAuthenticated = false,
      demo: demo = false, username: username = "DemoFoo",
      current: current = 0, user: user = []
    })
  }

  updateDemoState = () => {
    let { demo, resData, isAuthenticated } = this.state
    this.setState({ demo: demo = !demo, resData: resData = 'demoToken', isAuthenticated: isAuthenticated = !isAuthenticated })
  }

  deleteLyrics = lyricId => {
    this.setState({
      lyrics: this.state.lyrics.filter(lyrics => lyrics.id !== lyricId)
    })
  }

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
            current={this.state.current} {...props} />
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
            <SignIn theme={this.state.theme} users={this.state.users} user={this.state.user} updateUser={user => this.updateUser(user)}
              current={this.state.current} {...props} />
          )}
          />

          <Route path="/signup" render={(props) => (
            <SignUp theme={this.state.theme} users={this.state.users} user={this.state.user}
              current={this.state.current} {...props} />
          )}
          />

          <Route path="/dashboard" render={(props) => (
            <UserProfile theme={this.state.theme} users={this.state.users} user={this.state.user}
              current={this.state.current} lyrics={this.state.lyrics} {...props} />
          )}
          />


        </Switch>
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
    let computedClassName
    switch (this.state.theme) {
      case 'red':
        computedClassName = 'App_nav_red'
        break
      case 'green':
        computedClassName = 'App_nav_green'
        break
      case 'yellow':
        computedClassName = 'App_nav_yellow'
        break
      case 'pink':
        computedClassName = 'App_nav_pink'
        break
      case 'orange':
        computedClassName = 'App_nav_orange'
        break
      case 'purple':
        computedClassName = 'App_nav_purple'
        break
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

}
export default withRouter(App)
