import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './Database.css';


class Database extends Component {
    state = {
        title: this.props.title,
        genre: this.props.genre,
        mood: this.props.mood,
        artist: this.props.artist,
        lyrics: this.props.lyrics,
        expanded: this.props.expanded
    }
    updateExpansion = () => {
        this.setState({ expanded: this.state.expanded = !this.state.expanded })
    }

    renderLyricsIntoList() {
        const { title, genre, mood, artist, lyrics, expanded } = this.state;
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
                <div className="lyrics_nav">
                    <Button type="Delete" className="NavBtn_B" btnName='&#128465;' />
                    {/* <NavLink  to="/editlyrics" >
                    <Button className = "NavBtn_C" btnName='&#9999;' />
                </NavLink> */}
                <NavLink  to={{
                    pathname:"/editlyrics",
                    aboutProps:{
                        title:title,
                        genre:genre,
                        mood:mood,
                        artist:artist,
                        lyrics:lyrics
                    }}} exact >
                    <Button className = "NavBtn_C" btnName='&#9999;' />
                </NavLink>
                    
                </div>
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