import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import AppContext from '../App/AppContext'
import './LandingPage.css'

class LandingPage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext

    render() {
        return (
            <div className="Landing-Page">
                <div>
                    <section>
                        <article>
                            As music artists,<br /> we sometimes lose creativity dealing with our day to day lives. <br />That inspiration we're looking for to
                            write a good song just isn't there, <br />and GhostWriterz is here to solve that problem.<br /> No more banging the tables<br /> and wasting time
                            forcing up words when you can find<br /> lyrics from a community of helpful artists!<br /> On a roll? Feeling like the next Shakespeare?<br />
                            Share your lyrics to the community for others to use <br /> to help them out of writers block.
                    </article>
                    </section>
                </div>
                <NavLink className="lyrics_link" to="/lyrics" >
                    <button className="NavBtn" btnName="Find Lyrics">Find Lyrics</button>
                </NavLink>
            </div>
        )
    }
}

export default LandingPage