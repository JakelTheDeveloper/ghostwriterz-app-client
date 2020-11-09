import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';
import Button from '../Button/Button';
import './LandingPage.css'

class LandingPage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        return (
            <div className="Landing-Page">
                <div>
                    <section>
                        <article>
                            As music artists, we sometimes lose creativity dealing with our day to day lives. That inspiration we're looking for to
                            write a good song just isn't there, and GhostWriterz is here to solve that problem. No more banging the tables and wasting time
                            forcing up words when you can find lyrics from a community of helpful artists! On a roll? feeling like the next Shakespeare?
                            Share your lyrics to the community for others to use to help them out of writers block.
                    </article>
                    </section>
                </div>
                <NavLink className="lyrics_link" to="/lyrics" >
                    <Button btnName="Find Lyrics" />
                </NavLink>
            </div>


        )
    }
}

export default LandingPage