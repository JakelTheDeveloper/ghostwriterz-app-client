import React, { Component } from 'react';
import AppContext from '../App/AppContext';
import ValidationError from '../ValidationError';
import Button from '../Button/Button';
import config from '../config';
import './EditLyrics.css'

class EditLyrics extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            lyric: [],
            id: this.props.location.state.key,
            title: this.props.location.state.title,
            genre: this.props.location.state.genre,
            mood: this.props.location.state.mood,
            artist: this.props.location.state.artist,
            lyrics: this.props.location.state.lyrics,
            error:null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    //   componentDidMount() {
    //        const lyricsId = this.props.match.params.articleId;
    //        fetch(`https://localhost:8000/api/lyrics/${lyricsId}`, {
    //          method: 'GET'
    //        })

    //          .then(responseData => {
    //         //    this.setState({

    //         //    })
    //         console.log(responseData)
    //         this.context.updateLyrics(responseData)
    //          })
    //          .catch(error => {/* some content omitted */})
    //      }

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

        let index = this.props.users.findIndex(user => user.id === this.props.current);
        let artist = this.props.users[index].id

        const loc = this.props.location.state.id;
        
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
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(response => {
                this.context.updateLyrics(response)
                this.props.history.push(`/viewlyrics`)
            })
            .catch(error => this.setState({ error: error.message }))
    }

    render() {
        const thisId = this.state.id;
        console.log(thisId)
        const sorted = this.context.lyrics.sort((a, b) => b[thisId] - a[thisId]);
        let index = sorted.findIndex(lyrics => lyrics.id === thisId);
        // const {lyric,title,lyrics} = this.state
        let myLyrics = sorted[index];

        let userIndex = this.props.users.findIndex(user => user.id === this.props.current);
        let artist = this.props.users[userIndex].nickname
        return (
            <div>
                <h1>Edit Lyrics</h1>
                <form className="_lyrics" onSubmit={this.handleSubmit}>
                    <div className="_lyrics_header">

                        <div className="_lyrics_title-box">

                            <input type="text" name="title" className="_lyrics_title_edit" onChange={this.handleChange} defaultValue={myLyrics.title} />
                        </div>
                        <div className="_lyrics_info-container">
                            <div className="_lyrics_info-box">
                                <label htmlFor="genre">&#x1F3BC;: </label>
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
                                <label htmlFor="mood">&#127917;: </label>
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
                            <div className="_lyrics_info-box">
                                <span className="_lyrics-creator">&#9997;: {artist}</span>
                            </div>
                        </div>
                    </div>
                    {<ValidationError message={this.state.error} clearError={this.clearError} />}
                    <div className="_lyrics_body">
                        <textarea className="_lyrics_entry_edit" name="lyrics" onChange={this.handleChange} defaultValue={myLyrics.lyrics}></textarea>
                    </div>
                    <div className="_lyrics_nav">
                        {/* <Button type="button" value = "Submit" className="NavBtn" btnName="Save"/> */}
                        <button type="submit" className="NavBtn_blue">Submit</button>
                        <Button type="Cancel" className="NavBtn_blue" btnName="Cancel" path="viewlyrics" />
                    </div>
                </form>
            </div>

        )
    }
}

export default EditLyrics;