import React, { Component } from 'react';
import Button from '../Button/Button';
import AppContext from '../App/AppContext';
import Database from '../LyricDatabase/Database';
// import './SignIn.css'

class Viewlyrics extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    constructor(props){
        super(props);
        this.state = {
            title:null,
            genre:null,
            mood:null,
            artist:null,
            lyrics:null,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    static contextType = AppContext;

    handleChange(event){
        const value = event.target.value;
        this.setState({...this.state,[event.target.name]:value})
        console.log(this.state.genre)
    }
    render() {
        const sorted = this.context.lyrics.sort((a, b) => (a.id > b.id) ? 1 : -1)
        // const userLyrics = sorted.filter(lyric => lyric.artist === this.context.user)
        let lyrics = sorted
        // let currentLyrics = lyrics.filter(lyric => lyric.artist === "Jupiter");
        return (
            <div>
            <h2 id = "signup-header">View Lyrics</h2>
            <form>
                <label htmlFor ="title"></label>
                <input type="text" id ="title" name = "title" placeholder = "Filter By Title" onChange = {this.handleChange}/>
                <br/>
                <label htmlFor="genre">&#x1F3BC;: </label>
                        <select id="genre" name = "genre" onChange = {this.handleChange}>
                            <option value="All">All Items</option>
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
                    <div>
                    <label htmlFor="mood">&#127917;: </label>
                        <select id="mood" name = "mood" onChange = {this.handleChange}>
                            <option value="All">All Items</option>
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
                <label htmlFor ="artist-name"></label>
                <input type="text" id ="artist-name" name = "artist" placeholder = "Search By Artist Name" onChange = {this.handleChange}/>
                <br/>
                <div>
                <label htmlFor ="lyrics-entrty"></label>
                <input type="text" id ="lyrics-entry" name = "lyrics" placeholder = "Search By Lyrics Including" onChange = {this.handleChange}/>
                </div>
                <Button type = "submit" className = "NavBtn" btnName="Search" />
            </form>
            {lyrics.map(lyric=> 
                <Database key = {lyric.id} id = {lyric.id} title={lyric.title} genre={lyric.genre} mood={lyric.mood}
                artist={this.context.users[lyric.artist - 1].nickname} lyrics={lyric.lyrics} expanded = {lyric.expanded} editable = {true}
                />)}
            </div>

            )
    }
}

export default Viewlyrics;