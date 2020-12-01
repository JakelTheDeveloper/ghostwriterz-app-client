import React, { Component } from 'react';
import Button from '../Button/Button';
import AppContext from '../App/AppContext';
import Database from '../LyricDatabase/Database';
import lyricsStore from '../STORE';

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

    goBack=()=>{
        this.props.history.push('/signin')
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({...this.state,[event.target.name]:value})
    }
    getArtistName(artist){
        if(this.props.user.length > 0){
        let index = this.props.users.findIndex(user => user.id === artist);
        return this.props.users[index].nickname
        }else{
            return "DemoFoo"
        }
    }
    render() {
        let sorted ;
        let userLyrics;
        if(this.props.user.length < 1){
           sorted = lyricsStore.sort((a, b) => (a.id > b.id) ? 1 : -1)
           userLyrics = sorted
        }else{
            sorted = this.context.lyrics.sort((a, b) => (a.id > b.id) ? 1 : -1)
            userLyrics = sorted.filter(lyric => lyric.artist === this.props.user[0].id)
        }
        let lyrics = userLyrics
        if(this.state.title !== null){
            lyrics = userLyrics.filter(lyric => lyric.title.toLowerCase().includes(this.state.title.toLowerCase()))
        }else
        if(this.state.lyrics !== null){
            lyrics = userLyrics.filter(lyric=> lyric.lyrics.toLowerCase().includes(this.state.lyrics.toLowerCase()))
        }else{
            lyrics = userLyrics
        }
 
        return (
            <div>
            <h2 id = "signup-header">View Lyrics</h2>
            <form>
                <label htmlFor ="title"></label>
                <input type="text" id ="title" name = "title" placeholder = "Filter By Title" onChange = {this.handleChange}/>
                <br/>
                {/* <label htmlFor="genre">&#x1F3BC;: </label>
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
                    </div> */}
                <label htmlFor ="artist-name"></label>
                <input type="text" id ="artist-name" name = "artist" placeholder = "Search By Artist Name" onChange = {this.handleChange}/>
                <br/>
                <div>
                <label htmlFor ="lyrics-entrty"></label>
                <input type="text" id ="lyrics-entry" name = "lyrics" placeholder = "Search By Lyrics Including" onChange = {this.handleChange}/>
                </div>
            </form>
            {lyrics.map(lyric=> 
                <Database key = {lyric.id} id = {lyric.id} title={lyric.title} genre={lyric.genre} mood={lyric.mood} current = {this.props.current}
                artist={this.getArtistName(lyric.artist)} lyrics={lyric.lyrics} expanded = {lyric.expanded} editable = {true} handleGoBack = {()=>this.goBack()}
                />)}
            </div>

            )
    }
}

export default Viewlyrics;