import React, { Component } from 'react';
import AppContext from '../App/AppContext';
// import './Demo.css'

class UserProfile extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext;

    render() {
        let userLyrics = this.props.lyrics.filter(lyric => lyric.artist === this.props.user[0].id)
        let artist;
        if(this.props.current === 0){
            artist  = 'DemoFoo';
        }else{
            artist = this.props.user[0].nickname;
        }
        let numLyricsPosted = userLyrics.length;
        let totalWords=0;
        for(let i = 0;i<userLyrics.length;i++){
            totalWords = totalWords + userLyrics[i].lyrics.split(" ").length
        }
        let numWordsPosted = totalWords;

        let userRank = " ";

        if(totalWords >= 0 && totalWords < 1500){
            userRank = "Rookie"
        }else
        if(totalWords >= 1500 && totalWords < 3000){
            userRank = "Dedicated"
        }else
        if(totalWords >= 3000 && totalWords < 4500){
            userRank = "HWPO"
        }else
        if(totalWords >= 4500 && totalWords < 6000){
            userRank = "Consistent"
        }else
        if(totalWords >= 6000 && totalWords < 7500){
            userRank = "Dope"
        }else
        if(totalWords >= 7500 && totalWords < 9000){
            userRank = "On Fire"
        }else
        if(totalWords >= 9000 && totalWords < 10500){
            userRank = "Dangerous"
        }else
        if(totalWords >= 10500 && totalWords < 12000){
            userRank = "Lyrical Genius"
        }else
        if(totalWords >= 12000 && totalWords < 13500){
            userRank = "Maestro"
        }else
        if(totalWords >= 13500){
            userRank = "Shakespeare"
        }

        return (
            <div className="demoPg">
                <div className="dashboardItem">
                    <h1>{artist}</h1>
                </div>
                <div className="dashboardItem">
                    <h4>{numWordsPosted}</h4>
                    <span className="words">Words Submitted</span>
                </div>
                <div className="dashboardItem">
                    <h4>{userRank}</h4>
                    <span className="rank">Community Rank</span>
                </div>
                <div className="dashboardItem">
                    <h4>{numLyricsPosted}</h4>
                    <span className="lyricsposted">Total Submissions</span>
                </div>
            </div>
        )
    }
}

export default UserProfile;