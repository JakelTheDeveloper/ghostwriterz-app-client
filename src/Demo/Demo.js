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
        <span className = "numWordsSubmitted">Words Submitted:<br/> {numWordsPosted} lyrics!</span>
            </div>
            <div className = "dashboardItem">
        <span className = "ranking">Community Rank:<br/> {userRank}</span>
            </div>
            <div className = "dashboardItem">
        <span className = "ranking">Total Submissions:<br/> {numLyricsPosted}</span>
            </div>
            </div>
        )
    }
}

export default Demo;