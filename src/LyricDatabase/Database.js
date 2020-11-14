import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';
import './Database.css';


class Database extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            rating: this.props.rating,
            genre: this.props.genre,
            mood: this.props.mood,
            artist: this.props.artist,
            lyrics: this.props.lyrics,
            expanded: this.props.expanded
        }
    }

    renderLyricsIntoList() {
        const { title, rating, genre, mood, artist, lyrics, expanded } = this.state;
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
                </div>
            )
        }
    }
    render() {
        // const { title, rating, genre, mood, artist, lyrics, expanded } = this.state;
        return (
            <div className="lyrics">
                {this.renderLyricsIntoList()}
            </div>
        )
    }
}

export default Database;