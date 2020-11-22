import React, { Component } from 'react';
import Button from '../Button/Button';
import Database from '../LyricDatabase/Database'

import './LyricDatabase.css'
import AppContext from '../App/AppContext';

class LyricDatabase extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = AppContext;

    getArtistName(artist){
        let index = this.props.users.findIndex(user => user.id === artist);

        return this.props.users[index].nickname
    }
    render() {

        const sorted = this.context.lyrics.sort((a, b) => (a.id > b.id) ? 1 : -1)
        let lyrics = sorted;
        
        return (
            <div>
                <form className="genre-form">
                    <div>
                        <label htmlFor="genre">&#x1F3BC;: </label>
                        <select id="genre">
                            <option defaultValue="">All Items</option>
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
                    <div>
                        <label htmlFor="mood">&#127917;: </label>
                        <select id="mood">
                            <option defaultValue="">All Items</option>
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
                    <div>
                        <label htmlFor="artist">View By Artist: </label>
                        <input type="text" id="artist" />
                    </div>
                </form>
                <Button type="submit" className="NavBtn" btnName="Search" />

                <div className="lyrics_list">
                    {lyrics.map(lyric =>
                        <Database key={lyric.id} id={lyric.id} title={lyric.title} genre={lyric.genre} mood={lyric.mood} theme = {this.props.theme}
                            artist={this.getArtistName(lyric.artist)} lyrics={lyric.lyrics} expanded={false} editable={false}
                        />)}
                </div>
            </div>
        )
    }
}

export default LyricDatabase;