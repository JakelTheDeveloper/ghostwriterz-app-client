import React from 'react';
import './Database.css';


function Database(props) {
    if (props.expanded) {
        return (
            <div class="lyrics_list">
                <div class="lyrics">
                    <div class="lyrics_header">
                        <div class="lyrics_title-box">
                            <span class="lyrics_title">{props.title}</span>
                        </div>
                        <div class="lyrics_info-container">
                            <div class="lyrics_info-box">

                                <span class="lyrics-rank">Rank: &#9733; &#9733; &#9733; &#9734; &#9734;</span>
                            </div>
                            <div class="lyrics_info-box">
                                <span class="lyrics-genre">&#x1F3BC;: {props.genre}</span>
                            </div>
                            <div class="lyrics_info-box">
                                <span class="lyrics-mood">&#127917;: {props.mood}</span>
                            </div>
                            <div class="lyrics_info-box">
                                <span class="lyrics-creator">&#9997;: {props.artist}</span>
                            </div>
                        </div>
                    </div>

                    <div class="lyrics_body">
                        <span class="lyrics_entry"> {props.lyrics}</span>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div class="lyrics_list">
                <div class="lyrics">
                    <div class="lyrics_header">
                        <div class="lyrics_title-box">
                            <span class="lyrics_title">{props.title}</span>
                        </div>
                        <div class="lyrics_info-container">
                            <div class="lyrics_info-box">

                                <span class="lyrics-rank">Rank: &#9733; &#9733; &#9733; &#9734; &#9734;</span>
                            </div>
                            <div class="lyrics_info-box">
                                <span class="lyrics-genre">&#x1F3BC;: {props.genre}</span>
                            </div>
                            <div class="lyrics_info-box">
                                <span class="lyrics-mood">&#127917;: {props.mood}</span>
                            </div>
                            <div class="lyrics_info-box">
                                <span class="lyrics-creator">&#9997;: {props.artist}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Database;