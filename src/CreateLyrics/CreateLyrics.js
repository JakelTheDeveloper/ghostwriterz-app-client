import React, { Component } from 'react';
import Button from '../Button/Button';
// import './SignUp.css'

class CreateLyrics extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        return (
            <div>
            <h2 id = "signup-header">Create Lyrics</h2>
            <form>
                <label htmlFor ="title">Title:</label>
                <input type="text" id ="title" name = "title"/>
                <br/>
                <label htmlFor="genre">&#x1F3BC;: </label>
                        <select id="genre">
                            <option defaultValue="1">Hip Hop</option>
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
                    <div>
                        <label htmlFor="mood">&#127917;: </label>
                        <select id="mood">
                            <option defaultValue="1">Happy</option>
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
                <label htmlFor ="artist-name">Artist Name:</label>
                <input type="text" id ="artist-name" name = "artist-name"/>
                <br/>
                <div>
                <label htmlFor ="lyrics-entrty">Lyrics:</label>
                <textarea type="text" id ="lyrics-entry" name = "lyrics-entry"/>
                </div>
                <Button type="cancel" className = "NavBtn" btnName="Cancel"/>
                <Button type="submit" className = "NavBtn" btnName="Submit"/>
            </form>
            </div>
            )
    }
}

export default CreateLyrics;