import React, { Component } from 'react';
import AppContext from '../App/AppContext';
import Button from '../Button/Button';
import './EditLyrics.css'

class EditLyrics extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    // this.state = {
    //     title:props.location.aboutProps.title,
    //     genre:props.location.aboutProps.genre,
    //     mood:props.location.aboutProps.mood,
    //     artist:props.location.aboutProps.artist,
    //     __lyrics:props.location.aboutProps.__lyrics,

    // }
    constructor(props){
        super(props);
        this.state = {
            lyric:[],
            title: '',
            lyrics:'',
            genre:'0',
            mood:'0'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    
    static contextType = AppContext;
   
    // componentDidMount() {
    //     const lyricsId = this.props.location.aboutProps.id;
    //     fetch(`http://localhost:8000/api/lyrics/${lyricsId}`)
    //     .then(response => response.json())
    //     .then(lyric => this.setState({lyric}))
    //   }

      componentDidMount() {
           const lyricsId = this.props.match.params.articleId;
           fetch(`https://localhost:8000/api/lyrics/${lyricsId}`, {
             method: 'GET'
           })
             .then(/* some content omitted */)
             .then(responseData => {
               this.setState({
                 
               })
             })
             .catch(error => {/* some content omitted */})
         }

         handleChange(event){
             const value = event.target.value;
             this.setState({...this.state,[event.target.name]:value})
         }

          handleSubmit = e => {
               e.preventDefault()
               // validation not shown
               fetch(`https://localhost:8000/api/lyrics/${this.props.location.aboutProps.id}`, {
                 method: 'PATCH',
                 body: JSON.stringify(this.state.inputValues)
               })
                 .then(/* some content omitted */)
             }

    render() { 
        // const {lyric,title,lyrics} = this.state
        let lyrics = this.context.lyrics[this.props.location.aboutProps.id - 1];
        return(
       <div>
            <h1>Edit Lyrics</h1>
            <form className = "_lyrics">
        <div className="_lyrics_header">
         
        <div className="_lyrics_title-box">

                <input type="text" name = "title" className ="_lyrics_title_edit" onChange = {this.handleChange} defaultValue = {lyrics.title}/>
        </div>
        <div className="_lyrics_info-container">
            <div className="_lyrics_info-box">
            <label htmlFor="genre">&#x1F3BC;: </label>
                        <select id="genre" name = "genre" onChange = {this.handleChange} className ="_lyrics-genre">
                        <option defaultValue = "0">{lyrics.genre}</option>
                            <option value="1">Hip Hop</option>
                            <option value="2">Pop</option>
                            <option value="3">Rock</option>
                            <option value="4">Jazz</option>
                            <option value="5">Folk</option>
                            <option value="6">Musical</option>
                            <option value="7">Country</option>
                            <option value="8">Classical</option>
                            <option value="9">Heavy Metal</option>
                            <option value="10">Rhythm and Blues</option>
                            <option value="11">Electronic Dance</option>
                            <option value="12">Punk</option>
                            <option value="13">Soul</option>
                            <option value="14">Electronic Music</option>
                            <option value="15">Rap</option>
                            <option value="16">Reggae</option>
                            <option value="17">Funk</option>
                            <option value="18">Disco</option>
                            <option value="19">House</option>
                            <option value="20">Techno</option>
                            <option value="21">Gospel</option>
                        </select>

            </div>
            <div className="_lyrics_info-box">
            <label htmlFor="mood">&#127917;: </label>
                        <select id="mood" name = "mood" onChange = {this.handleChange} className= "_lyrics-mood" >
                            <option defaultValue = "0">{lyrics.mood}</option>
                            <option value="1">Happy</option>
                            <option value="2">Energetic</option>
                            <option value="3">Sad</option>
                            <option value="4">Calm</option>
                            <option value="5">Depression</option>
                            <option value="6">Anger</option>
                            <option value="7">Carefree</option>
                            <option value="8">Gloomy</option>
                            <option value="9">Annoyed</option>
                        </select>
            </div>
            <div className="_lyrics_info-box">
                <span className="_lyrics-creator">&#9997;: {lyrics.artist}</span>
            </div>
        </div>
    </div>
    <div className="_lyrics_body">
        <textarea className="_lyrics_entry_edit" name = "lyrics" onChange = {this.handleChange} defaultValue= {lyrics.lyrics}></textarea>
    </div>
    <div className="_lyrics_nav">
        <Button type="Save" className="NavBtn" btnName="Save" path = "viewlyrics"/>
        <Button type="Cancel" className="NavBtn" btnName="Cancel" path = "viewlyrics"/>
        </div>
        </form>
    </div>
    
)
    }
}

export default EditLyrics;