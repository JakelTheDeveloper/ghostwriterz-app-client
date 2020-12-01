import React, { Component } from 'react';
import { BrowserRouter as NavLink,Link } from 'react-router-dom';
import Button from '../Button/Button';
import AppContext from '../App/AppContext';
import config from '../config';
import './Database.css';


class Database extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext;

    state={
    theme:this.props.theme,
    expanded:this.props.expanded,

    error:null,
    confirmation:null
    }

     updateExpansion = () => {
         let {expanded} = this.state
        this.setState({ expanded: expanded = !expanded })
     }

     setConfirm = () => {
        let {confirmation} = this.state
        this.setState({ confirmation: confirmation = !confirmation })
     }

     handleDelete = e => {
        e.preventDefault()
        if(this.props.current === 0){
            this.props.handleGoBack()
        }else{
        const lyricId = this.props.id
    
        fetch(`${config.URL}/api/lyrics/${lyricId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
          .then(res => {
            if (!res.ok)
              return res.json()
              .then(e => Promise.reject(e))
            // return res.json()
          })
          .then(() => {
            //this.context.props.deleteNote(note)
            this.context.deleteLyrics(lyricId)
            // allow parent to perform extra behaviour
            // this.props.onDeleteNote(noteId)
          })
          .catch(error => {
            this.setState({error:error.message})
          })
        }
      }

    renderLyricsNav() {
        let computedClassName;
        let computedBtnClass;
        switch(this.state.theme) {
            case 'red':
                computedClassName = 'Art_red'
                computedBtnClass = 'NavBtnC_red'
              break;
            case 'green':
                computedClassName = 'Art_green'
                computedBtnClass = 'NavBtnC_green'
              break;
              case 'yellow':
                computedClassName = 'Art_yellow'
                computedBtnClass = 'NavBtnC_yellow'
              break;
              case 'pink':
                computedClassName = 'Art_pink'
                computedBtnClass = 'NavBtnC_pink'
              break;
              case 'orange':
                computedClassName = 'Art_orange'
                computedBtnClass = 'NavBtnC_orange'
              break;
              case 'purple':
                computedClassName = 'Art_purple'
                computedBtnClass = 'NavBtnC_purple'
              break;
            default:
                computedClassName = 'Art_blue'
                computedBtnClass = 'NavBtnC_blue'
          }
        if (this.props.editable) {
            return (
                <div className="lyrics_nav">
                  

                    <Link to={{
                        pathname: `/lyrics/${this.props.id}`,
                        state: {
                            key:this.props.id,
                            id: this.props.id,
                            title: this.props.title,
                            genre: this.props.genre,
                            mood: this.props.mood,
                            artist: this.props.artist,
                            lyrics: this.props.lyrics
                        }
                    }}><Button className = {computedBtnClass} btnName='&#9999;' /></Link>
                    <button type="button" className="NavBtn_B" onClick={() => {this.setConfirm()}}>&#128465;</button>
                </div>
            )
        } else {
            return
        }
    }
    renderConfirm(){
        if(this.state.confirmation){
            return(
                <div>
                    <p className = "confirm">Are You Sure?</p>
                    <button onClick = {this.handleDelete} className="NavBtn_blue">Yes</button>
                    <button onClick = {this.setConfirm} className="NavBtn_blue">No</button>
                </div>
            )
        }
    }
    renderLyricsIntoList() {
        const { title, genre, mood, artist, lyrics } = this.props;
        const {expanded} = this.state;
        if (expanded) {
            return (<React.Fragment>

                <div className="lyrics_header" onClick={() => {this.updateExpansion()}}>
                    <div className="lyrics_title-box">
                        <span className="lyrics_title">{title}</span>
                    </div>
                    <div className="lyrics_info-container">
                        <div className="lyrics_info-box">
                            <span className="lyrics-genre">&#x1F3BC;: {genre}</span>
                        </div>
                        <div className="lyrics_info-box">
                            <span className="lyrics-mood">&#127917;: {mood}</span>
                        </div>
                        <div className="lyrics_info-box">
                            <span className="lyrics-creator">&#9997;: {artist}</span>
                        </div>
                    </div>
                </div>
                <div className="lyrics_body">
                    <p className="lyrics_entry"> {lyrics}</p>
                </div>
                {this.renderLyricsNav()}
                {this.renderConfirm()}
            </React.Fragment>
            )
        } else {
            return (
                <div className="lyrics_header" onClick={() => {this.updateExpansion()}}>
                    <div className="lyrics_title-box">
                        <span className="lyrics_title">{title}</span>
                    </div>
                    <div className="lyrics_info-container">

                        <div className="lyrics_info-box">
                            <span className="lyrics-genre">&#x1F3BC;: {genre}</span>
                        </div>
                        <div className="lyrics_info-box">
                            <span className="lyrics-mood">&#127917;: {mood}</span>
                        </div>
                        <div className="lyrics_info-box">
                            <span className="lyrics-creator">&#9997;: {artist}</span>
                        </div>
                    </div>
                </div>)
        }
    }
    render() {
        // onClick={() => { this.updateExpansion() }}
        // const { title, rating, genre, mood, artist, lyrics, expanded } = this.state;
        return (
            <div>
            <div className="lyrics">
                {this.renderLyricsIntoList()}
            </div>
            </div>
        )
    }
}

export default Database;