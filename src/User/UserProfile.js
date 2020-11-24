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
        let artist = this.props.user[0].nickname;
        let numLyricsPosted = 12;
        let numWordsPosted = '3,562';
        let userRank = "Dedicated"
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