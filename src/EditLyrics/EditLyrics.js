import React, { Component } from 'react';

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
       
        console.log(this.props)
    }
    
    render() { 
        return(
       <div>
            <h1>Edit Lyrics</h1>
            <form className = "_lyrics">
        <div className="_lyrics_header">
         
        <div className="_lyrics_title-box">

                <input type="text" className ="_lyrics_title_edit" defaultValue = {this.props.location.aboutProps.title}/>
        </div>
        <div className="_lyrics_info-container">
            <div className="_lyrics_info-box">
            <label htmlFor="genre">&#x1F3BC;: </label>
                        <select id="genre" className ="_lyrics-genre">
                        <option defaultValue = "0">{this.props.location.aboutProps.genre}</option>
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
                        <select id="mood" className= "_lyrics-mood">
                            <option defaultValue = "0">{this.props.location.aboutProps.mood}</option>
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
                <span className="_lyrics-creator">&#9997;: {this.props.location.aboutProps.artist}</span>
            </div>
        </div>
    </div>
    <div className="_lyrics_body">
        <textarea className="_lyrics_entry_edit" defaultValue= {this.props.location.aboutProps.lyrics}></textarea>
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