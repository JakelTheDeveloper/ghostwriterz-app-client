import React, { Component } from 'react';
import { BrowserRouter as NavLink, Link } from 'react-router-dom';
import Button from '../Button/Button';
import AppContext from '../App/AppContext';
import './Database.css';


class Database extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext;
    state={
    expanded:this.props.expanded
    }
     updateExpansion = () => {
         console.log("happened")
        this.setState({ expanded: this.state.expanded = !this.state.expanded })
     }
    renderLyricsNav() {
        if (this.props.editable) {
            return (
                <div className="lyrics_nav">
                    <Button type="Delete" className="NavBtn_B" btnName='&#128465;' />

                    <Link to={{
                        pathname: `/lyrics/${this.props.id}`,
                        state: {
                            id: this.props.id,
                            title: this.props.title,
                            genre: this.props.genre,
                            mood: this.props.mood,
                            artist: this.props.artist,
                            lyrics: this.props.lyrics
                        }
                    }}><Button className = "NavBtn_C" btnName='&#9999;' /></Link>
                </div>
            )
        } else {
            return
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
            <div className="lyrics">
                {this.renderLyricsIntoList()}
            </div>
        )
    }
}

export default Database;