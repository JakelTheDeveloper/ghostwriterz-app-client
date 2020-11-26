import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import ValidationError from '../ValidationError';
import AppContext from '../App/AppContext';
import config from '../config';
import './CreateLyrics.css'

class CreateLyrics extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            genre: "Hip Hop",
            mood: "Happy",
            artist: this.props.user,
            lyrics: "",
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ ...this.state, [event.target.name]: value })
    }
    clearError = () => {
        this.setState({
            error: null
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        if (this.state.artist === undefined || this.state.artist.length === 0) {
            this.props.history.push(`/signin`)
        }else 
        if (this.state.title === "" || this.state.title === null) {
            this.setState({ error: "Title must not be blank!" })
        }else
            if (this.state.lyrics === "" || this.state.lyrics === null) {
                this.setState({ error: "Lyrics must not be blank!" })
            } else {
                let index = this.props.users.findIndex(user => user.id === this.props.current);
                let artist = this.props.users[index].id
                const url = `${config.URL}/api/lyrics`
                const options = {
                    method: 'POST',
                    body: JSON.stringify({
                        title: this.state.title,
                        genre: this.state.genre,
                        mood: this.state.mood,
                        artist: artist,
                        lyrics: this.state.lyrics
                    }),
                    headers: { 'Content-Type': 'application/json' }
                }
                fetch(url, options)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Something went wrong, please try again later');
                        }
                        return res.json();
                    })
                    .then(lyrics => {
                        this.context.addLyrics(lyrics)
                        this.props.history.push(`/viewlyrics`)
                    })
                    .catch(err =>  this.setState({ error: err.message }))
            }
    }

    render() {
        let artist;
        if (this.props.current === 0) {
           artist = "DemoFoo"
        } else {
            artist = this.props.user[0].nickname;
        }
        return (
            <div>
                <h2 id="signup-header">Create Lyrics</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="genre">&#x1F3BC;: </label>
                    <select id="genre" name="genre" onChange={this.handleChange}>
                        <option defaultValue="Hip Hop">Hip Hop</option>
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
                    <div>
                        <label htmlFor="mood">&#127917;: </label>
                        <select id="mood" name="mood" onChange={this.handleChange}>
                            <option defaultValue="Happy">Happy</option>
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
                    <label htmlFor="artist-name">Artist Name:</label>
                    {/* onChange = {this.handleChange} */}
                    <p>{artist}</p>
                    <br />
                    {<ValidationError message={this.state.error} clearError={this.clearError} />}
                    <div>
                        <label htmlFor="lyrics-entry">Lyrics:</label>
                        <textarea type="text" className="_lyrics_entry_edit" name="lyrics" onChange={this.handleChange} />
                    </div>
                    {/* <Button type="cancel" className = "NavBtn" btnName="Cancel"/> */}
                    <button type="submit" className="NavBtn_blue">Submit</button>
                    {/* <Button type="submit" className = "NavBtn" btnName="Submit"/> */}
                </form>
            </div>
        )
    }
}

export default CreateLyrics;