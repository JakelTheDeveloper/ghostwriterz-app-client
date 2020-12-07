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
                {lyrics.map(lyric =>
                    <Database key={lyric.id} id={lyric.id} title={lyric.title} genre={lyric.genre} mood={lyric.mood} current={this.props.current}
                        artist={this.getArtistName(lyric.artist)} lyrics={lyric.lyrics} expanded={lyric.expanded} editable={true} handleGoBack={() => this.goBack()}
                    />)}
            </div>

        )
    }
}

export default Viewlyrics