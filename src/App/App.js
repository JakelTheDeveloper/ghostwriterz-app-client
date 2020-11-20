import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
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
import lyrics from '../STORE';
// import lyrics from '../STORE';



class App extends Component {

  static defaultProps = {
    match: {
      params: {}
    }
  }

  state = {
    lyrics: [],
    users:[],
    demo: false,
    error: null,
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

//   handleDeleteNote = noteId => {    
//     this.setState({
//         notes: this.state.notes.filter(note => note.id !== noteId)
//     });
// };

  addLyrics = createdLyrics => {
    this.setState({lyrics:[...this.state.lyrics,createdLyrics]})
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
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/lyrics/:lyric_id" component={EditLyrics} />
        <Route  path="/createlyrics" component={CreateLyrics} />
        <Route  path="/viewlyrics" component={ViewLyrics} />
        <Route  path="/lyrics" component={LyricDatabase} />
        <Route  path="/signin" component={SignIn} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/demo" component={Demo} />
        <Route  path="/:user/" component={UserProfile} />
     
        
        </Switch>
        {/* <Route exact path="/:userprofile" component = {LyricDatabase}/> */}
      </>
    )
  }

  render() {
    console.log(this.state.users)
    const contextValue = {
      lyrics: this.state.lyrics,
      currentUser:2,
      users:this.state.users,
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
