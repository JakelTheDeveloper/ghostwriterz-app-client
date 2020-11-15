import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './Demo.css'

class Demo extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    render() { 
        let numLyricsPosted = 12;
        let numWordsPosted = '3,562';
        let userRank = "Dedicated"
        return (
            <div className = "demoPg">
            <div className = "dashboardItem">
        <h4>{numWordsPosted}</h4>
        <span className = "words">Words Submitted</span>
            </div>
            <div className = "dashboardItem">
            <h4>{userRank}</h4>
        <span className = "rank">Community Rank</span>
            </div>
            <div className = "dashboardItem">
            <h4>{numLyricsPosted}</h4>
        <span className = "lyricsposted">Total Submissions</span>
            </div>
            </div>
        )
    }
}

export default Demo;