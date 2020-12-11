import React, { Component } from 'react'
import AppContext from '../App/AppContext'
import ValidationError from '../ValidationError'
import { NavLink } from 'react-router-dom'
import config from '../config'
import lyricsStore from '../STORE'
import './EditLyrics.css'

class EditLyrics extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext

    constructor(props) {
        super(props)
        this.state = {
            lyric: [],
            id: this.props.location.state.key,
            title: this.props.location.state.title,
            genre: this.props.location.state.genre,
            mood: this.props.location.state.mood,
            artist: this.props.location.state.artist,
            lyrics: this.props.location.state.lyrics,
            error: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({ ...this.state, [event.target.name]: value })
    }

    clearError = () => {
        this.setState({
            error: null
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.props.current === 0) {
            this.props.history.push(`/signin`)
        } else {
            let artist = this.props.user[0].id

            const loc = this.props.location.state.id

            // validation not shown
            fetch(`${config.URL}/api/lyrics/${loc}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    id: this.state.id,
                    title: this.state.title,
                    genre: this.state.genre,
                    mood: this.state.mood,
                    artist: artist,
                    lyrics: this.state.lyrics
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(response => {
                    this.context.updateLyrics(response)
                    this.props.history.push(`/viewlyrics`)
                })
                .catch(error => this.setState({ error: error.message }))
        }
    }

    render() {
        let thisId
        let artist
        let sorted
        let index
        if (this.props.current === 0) {
            thisId = 1
            artist = "DemoFoo"
            sorted = lyricsStore.sort((a, b) => b[thisId] - a[thisId])
            index = sorted.findIndex(lyrics => lyrics.id === thisId)
        } else {
            thisId = this.state.id
            artist = this.props.user[0].nickname
            sorted = this.context.lyrics.sort((a, b) => b[thisId] - a[thisId])
            index = sorted.findIndex(lyrics => lyrics.id === thisId)
        }
        let myLyrics = sorted[index]
        return (
            <div>
                <h1>Edit Lyrics</h1>
                <form id="lyrics" onSubmit={this.handleSubmit}>
                    <div className="lyrics_header">
                        <div className="_lyrics_info-container">
                            <div className="_lyrics_title-box">
                                <label htmlFor = "title" className = "_title_label">Title:</label>
                                <input type="text" name="title" id = "title" className="_lyrics_title_edit" onChange={this.handleChange} defaultValue={myLyrics.title} required />
                            </div>
                            <div className="_lyrics_info-box">
                                <label htmlFor="genre" className = "_genre_label">&#x1F3BC;: </label>
                                <select id="genre" name="genre" onChange={this.handleChange} className="_lyrics-genre">
                                    <option defaultValue={myLyrics.genre}>{myLyrics.genre}</option>
                                    <option value="Hip Hop">Hip Hop</option>
                                    <option value="Pop">Pop</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Jazz">Jazz</option>
                                    <option value="Folk">Folk</option>
                                    <option value="Musical">Musical</option>
                                    <option value="Country">Country</option>
                                    <option value="Classical">Classical</option>
                                    <option value="Heavy Metal">Heavy Metal</option>
                                    <option value="Rhythm and Blues">Rhythm and Blues</option>
                                    <option value="Electronic Dance">Electronic Dance</option>
                                    <option value="Punk">Punk</option>
                                    <option value="Soul">Soul</option>
                                    <option value="Electronic Music">Electronic Music</option>
                                    <option value="Rap">Rap</option>
                                    <option value="Reggae">Reggae</option>
                                    <option value="Funk">Funk</option>
                                    <option value="Disco">Disco</option>
                                    <option value="House">House</option>
                                    <option value="Techno">Techno</option>
                                    <option value="Gospel">Gospel</option>
                                </select>

                            </div>
                            <div className="_lyrics_info-box">
                                <label htmlFor="mood" className = "_mood_label">&#127917;: </label>
                                <select id="mood" name="mood" onChange={this.handleChange} className="_lyrics-mood" >
                                    <option defaultValue={myLyrics.mood}>{myLyrics.mood}</option>
                                    <option value="Happy">Happy</option>
                                    <option value="Energetic">Energetic</option>
                                    <option value="Sad">Sad</option>
                                    <option value="Calm">Calm</option>
                                    <option value="Depression">Depression</option>
                                    <option value="Anger">Anger</option>
                                    <option value="Carefree">Carefree</option>
                                    <option value="Gloomy">Gloomy</option>
                                    <option value="Annoyed">Annoyed</option>
                                </select>
                            </div>
                            <br/>
                            <div className="_lyrics_info-box">
                                <span className="_lyrics-creator">&#9997;: {artist}</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="NavBtn">Submit</button>
                    <NavLink to="/viewlyrics" >
                        <button className="NavBtn">Cancel</button>
                    </NavLink>
                    {<ValidationError message={this.state.error} clearError={this.clearError} />}
                    <div className="_lyrics_body">
                    <label htmlFor="_lyrics_entry_edit" className = "lyrics_edit_label">Lyrics:</label>
                        <textarea className="_lyrics_entry_edit" id = "lyrics" name="lyrics" onChange={this.handleChange} defaultValue={myLyrics.lyrics} required></textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditLyrics