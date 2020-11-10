import React, { Component } from 'react';
import Button from '../Button/Button';
import Lyrics from '../STORE'
import Database from '../LyricDatabase/Database'
import './LyricDatabase.css'

class LyricDatabase extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    render() {
        return (
            <div>
                <form className="genre-form">
                    <div>
                        <label for="genre">&#x1F3BC;: </label>
                        <select id="genre">
                            <option value="" selected>All Items</option>
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
                    <div>
                        <label for="mood">&#127917;: </label>
                        <select id="mood">
                            <option value="" selected>All Items</option>
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
                    <div>
                        <label for="rank">View by Rank: </label>
                        <select id="rank">
                            <option value="" selected>All</option>
                            <option value="1">1 Star</option>
                            <option value="2">2 Star</option>
                            <option value="3">3 Star</option>
                            <option value="4">4 Star</option>
                            <option value="5">5 Star</option>
                        </select>
                    </div>
                    <div>
                        <label for="artist">View By Artist: </label>
                        <input type="text" id="artist" />
                    </div>
                </form>
                <Button type = "submit" btnName="Find Lyrics" />
                {Lyrics.map(lyric=> 
                <Database key = {lyric.id} id = {lyric.id} title={lyric.title} genre={lyric.genre} mood={lyric.mood}
                artist={lyric.artist} lyrics={lyric.lyrics}
                />)}
               
            </div>
        )
    }
}

export default LyricDatabase;