import React, { Component } from 'react'
import { BrowserRouter as NavLink, Link } from 'react-router-dom'
import AppContext from '../App/AppContext'
import config from '../config'
import './Database.css'


class Database extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext

    state = {
        theme: this.props.theme,
        expanded: this.props.expanded,

        error: null,
        confirmation: null
    }

    updateExpansion = () => {
        let { expanded } = this.state
        this.setState({ expanded: expanded = !expanded })
    }

    setConfirm = () => {
        let { confirmation } = this.state
        this.setState({ confirmation: confirmation = !confirmation })
    }

    handleDelete = e => {
        e.preventDefault()
        if (this.props.current === 0) {
            this.props.handleGoBack()
        } else {
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
                })
                .then(() => {
                    this.context.deleteLyrics(lyricId)
                })
                .catch(error => {
                    this.setState({ error: error.message })
                })
        }
    }

    renderLyricsNav() {
        let currentArtist
        if (this.props.current === 0) {
            currentArtist = this.props.artist
        } else {
            currentArtist = "DemoFoo"
        }
        if (this.props.editable) {
            return (
                <div className="lyrics_nav">


                    <Link to={{
                        pathname: `/lyrics/${this.props.id}`,
                        state: {
                            key: this.props.id,
                            id: this.props.id,
                            title: this.props.title,
                            genre: this.props.genre,
                            mood: this.props.mood,
                            artist: currentArtist,
                            lyrics: this.props.lyrics
                        }
                    }}><button className="NavBtn_A">&#9999;</button></Link>
                    <button type="button" className="NavBtn_A" onClick={() => { this.setConfirm() }}>&#x274C;</button>
                </div>
            )
        } else {
            return
        }
    }
    renderConfirm() {
        if (this.state.confirmation) {
            return (
                <div>
                    <p className="confirm">Are You Sure?</p>
                    <button onClick={this.handleDelete} className="NavBtn">Yes</button>
                    <button onClick={this.setConfirm} className="NavBtn">No</button>
                </div>
            )
        }
    }
    renderLyricsIntoList() {
        const { title, genre, mood, artist, lyrics } = this.props
        const { expanded } = this.state
        if (expanded) {
            return (<React.Fragment>

                <div className="lyrics_header" onClick={() => { this.updateExpansion() }}>
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
                <div className="lyrics_header" onClick={() => { this.updateExpansion() }}>
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
        return (
            <div>
                <div className="lyrics">
                    {this.renderLyricsIntoList()}
                </div>
            </div>
        )
    }
}

export default Database