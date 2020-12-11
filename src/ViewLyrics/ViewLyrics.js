import React, { Component } from 'react'
import Button from '../Button/Button'
import AppContext from '../App/AppContext'
import Database from '../LyricDatabase/Database'
import lyricsStore from '../STORE'

class Viewlyrics extends Component {
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

    goBack = () => {
        this.props.history.push('/signin')
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({ ...this.state, [event.target.name]: value })
    }
    getArtistName(artist) {
        if (this.props.user.length > 0) {
            let index = this.props.users.findIndex(user => user.id === artist)
            return this.props.users[index].nickname
        } else {
            return "DemoFoo"
        }
    }
    render() {
        let sorted
        let userLyrics
        if (this.props.user.length < 1) {
            sorted = lyricsStore.sort((a, b) => (a.id > b.id) ? 1 : -1)
            userLyrics = sorted
        } else {
            sorted = this.context.lyrics.sort((a, b) => (a.id > b.id) ? 1 : -1)
            userLyrics = sorted.filter(lyric => lyric.artist === this.props.user[0].id)
        }
        let lyrics = userLyrics
        if (this.state.title !== null) {
            lyrics = userLyrics.filter(lyric => lyric.title.toLowerCase().includes(this.state.title.toLowerCase()))
        } else
            if (this.state.lyrics !== null) {
                lyrics = userLyrics.filter(lyric => lyric.lyrics.toLowerCase().includes(this.state.lyrics.toLowerCase()))
            } else {
                lyrics = userLyrics
            }

        return (
            <div>
                <h1>View Lyrics</h1>

                <label htmlFor="title" className="labelItem">Filter By Title:</label>
                <input type="text" id="title" name="title" onChange={this.handleChange} />
                <br />
                <label htmlFor="artist-name" className="labelItem">Filter By Artist:</label>
                <input type="text" id="artist-name" name="artist" onChange={this.handleChange} />
                <br />
                <div>
                    <label htmlFor="lyrics-entry" className="labelItem">Filter By Lyrics:</label>
                    <input type="text" id="lyrics-entry" name="lyrics" onChange={this.handleChange} />
                </div>

                {lyrics.map(lyric =>
                    <Database key={lyric.id} id={lyric.id} title={lyric.title} genre={lyric.genre} mood={lyric.mood} current={this.props.current}
                        artist={this.getArtistName(lyric.artist)} lyrics={lyric.lyrics} expanded={lyric.expanded} editable={true} handleGoBack={() => this.goBack()}
                    />)}
            </div>

        )
    }
}

export default Viewlyrics