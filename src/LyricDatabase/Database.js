import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './Database.css';


class Database extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    state = {
        id:this.props.id,
        title: this.props.title,
        genre: this.props.genre,
        mood: this.props.mood,
        artist: this.props.artist,
        lyrics: this.props.lyrics,
        expanded: this.props.expanded,
        editable:this.props.editable
    }
    updateExpansion = () => {
        this.setState({ expanded: this.state.expanded = !this.state.expanded })
    }
    renderLyricsNav(){
        const { title,id, genre, mood, artist, lyrics, expanded, editable } = this.state;
        if(this.state.editable){
            return(
        <div className="lyrics_nav">
        <Button type="Delete" className="NavBtn_B" btnName='&#128465;' />
        {/* <NavLink  to="/editlyrics" >
        <Button className = "NavBtn_C" btnName='&#9999;' />
    </NavLink> */}
    <NavLink  to={{
        pathname:`/lyrics/${id}`,
        aboutProps:{
            id:id
        }}} >
        <Button className = "NavBtn_C" btnName='&#9999;' />
    </NavLink> 
    </div>
    )
    }else{
        return
    }
}

    renderLyricsIntoList() {
        const { title,id, genre, mood, artist, lyrics, expanded, editable } = this.state;
        if (expanded) {
            return (<React.Fragment>

                <div className="lyrics_header">
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
            </React.Fragment>
            )
        } else {
            return (
                <div className="lyrics_header">
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
      
        // const { title, rating, genre, mood, artist, lyrics, expanded } = this.state;
        return (
            <div className="lyrics" onClick={() => { this.updateExpansion() }}>
                {this.renderLyricsIntoList()}
            </div>
        )
    }
}

export default Database;