import React, { Component } from 'react'
import Database from '../LyricDatabase/Database'

import './LyricDatabase.css'
import AppContext from '../App/AppContext'

class LyricDatabase extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            title: null,
            genre: null,
            mood: null,
            artist: null,
            lyrics: null,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    static contextType = AppContext


    handleChange(event) {
        const value = event.target.value
        this.setState({ ...this.state, [event.target.name]: value })
    }

    getArtistName(artist) {
        let index = this.props.users.findIndex(user => user.id === artist)
        return this.props.users[index].nickname
    }
    render() {

        const sorted = this.context.lyrics.sort((a, b) => (a.id > b.id) ? 1 : -1)
        let lyrics = sorted

        if (this.state.title !== null) {
            lyrics = sorted.filter(lyric => lyric.title.toLowerCase().includes(this.state.title.toLowerCase()))
        } else
            if (this.state.lyrics !== null) {
                lyrics = sorted.filter(lyric => lyric.lyrics.toLowerCase().includes(this.state.lyrics.toLowerCase()))
            } else {
                lyrics = sorted
            }


        return (
            <div>
                <h2 id="signup-header">View Lyrics</h2>
                <form>
                    <label htmlFor="title"></label>
                    <input type="text" id="title" name="title" placeholder="Filter By Title" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="artist-name"></label>
                    <input type="text" id="artist-name" name="artist" placeholder="Search By Artist Name" onChange={this.handleChange} />
                    <br />
                    <div>
                        <label htmlFor="lyrics-entrty"></label>
                        <input type="text" id="lyrics-entry" name="lyrics" placeholder="Search By Lyrics Including" onChange={this.handleChange} />
                    </div>
                </form>

                <div className="lyrics_list">
                    {lyrics.map(lyric =>
                        <Database key={lyric.id} id={lyric.id} title={lyric.title} genre={lyric.genre} mood={lyric.mood} theme={this.props.theme}
                            artist={this.getArtistName(lyric.artist)} lyrics={lyric.lyrics} expanded={false} editable={false}
                        />)}
                </div>
            </div>
        )
    }
}

export default LyricDatabase