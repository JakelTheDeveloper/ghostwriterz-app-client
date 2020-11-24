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
import Database from '../LyricDatabase/Database';



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
      userName:String
    }
  }


  componentDidMount() {
    fetch(`http://localhost:8000/api/lyrics`)
      .then(response => response.json())
      .then(lyrics => this.setState({ lyrics }))
    fetch(`http://localhost:8000/api/users`)
      .then(response => response.json())
      .then(users => {
        this.setState({ users: users })
      })
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

  updateAuth = (token,person) => {
    console.log(this.state.current)
    if(this.state.resData === ''){
      let thisUser = this.state.users.filter(user => user.username === person)
    this.setState({isAuthenticated:this.state.isAuthenticated = !this.state.isAuthenticated,
      resData:this.state.resData = token,demo:this.state.demo = false,userName:this.state.userName = person,
      current:this.state.current = thisUser[0].id
    })
    console.log(this.state.current)
    }else{
      this.setState({isAuthenticated:this.state.isAuthenticated = !this.state.isAuthenticated,
        resData:this.state.resData = '', demo:this.state.demo = false})
    }
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
    if (this.state.demo === true||this.state.isAuthenticated === true) {
      return (
        <Route path="/" render={(props) => (
          <DemoHeader updateAuth={this.updateAuth}
            theme={this.state.theme} />
        )}
        
        />
      )
    } else {
      return (
        <Route path="/" render={(props) => (
          <Header updateS={this.updateAuth}
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
          <Route path="/signup" component={SignUp} />
          <Route path="/demo" render={(props) => (
            <Demo theme={this.state.theme} user={this.state.user} />
          )}
          />
          <Route path="/dashboard" render={(props) => (
            <UserProfile theme={this.state.theme} users={this.state.users} user={this.state.user}
              current={this.state.current} {...props} />
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
      updateAuth:this.updateAuth,
      isAuthenticated:this.state.isAuthenticated,
      resData:this.state.resData
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
