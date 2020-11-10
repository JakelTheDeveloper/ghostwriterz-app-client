import React, { Component } from 'react';
import './Database.css';


class Database extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:this.props.title,
            genre:this.props.genre,
            mood:this.props.mood,
            artist:this.props.artist,
            lyrics:this.props.lyrics,
            expanded:this.props.expanded
        }
    }
    render() {
        const {title,genre,mood,artist,lyrics,expanded} = this.state;
        if (expanded) {
            return (
                <div className="lyrics_list">
                    <div className="lyrics">
                        <div className="lyrics_header">
                            <div className="lyrics_title-box">
                                <span className="lyrics_title">{title}</span>
                            </div>
                            <div className="lyrics_info-container">
                                <div className="lyrics_info-box">

                                    <span className="lyrics-rank">Rank: &#9733; &#9733; &#9733; &#9734; &#9734;</span>
                                </div>
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
                            <span className="lyrics_entry"> {lyrics}</span>
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <div className="lyrics_list">
                    <div className="lyrics">
                        <div className="lyrics_header">
                            <div className="lyrics_title-box">
                                <span className="lyrics_title">{title}</span>
                            </div>
                            <div className="lyrics_info-container">
                                <div className="lyrics_info-box">

                                    <span className="lyrics-rank">Rank: &#9733; &#9733; &#9733; &#9734; &#9734;</span>
                                </div>
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
                    </div>
                </div>
            )
        }
    }
}

export default Database;