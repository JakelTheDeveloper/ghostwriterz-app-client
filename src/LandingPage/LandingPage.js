import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../Button/Button';
import AppContext from '../App/AppContext';
import './LandingPage.css'

class LandingPage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = AppContext;

    render() {
        console.log(this.context.users)
        let computedClassName;
        let computedBtnClass;
        switch(this.props.theme) {
            case 'red':
                computedClassName = 'Art_red'
                computedBtnClass = 'NavBtn_red'
              break;
            case 'green':
                computedClassName = 'Art_green'
                computedBtnClass = 'NavBtn_green'
              break;
              case 'yellow':
                computedClassName = 'Art_yellow'
                computedBtnClass = 'NavBtn_yellow'
              break;
              case 'pink':
                computedClassName = 'Art_pink'
                computedBtnClass = 'NavBtn_pink'
              break;
              case 'orange':
                computedClassName = 'Art_orange'
                computedBtnClass = 'NavBtn_orange'
              break;
              case 'purple':
                computedClassName = 'Art_purple'
                computedBtnClass = 'NavBtn_purple'
              break;
            default:
                computedClassName = 'Art_blue'
                computedBtnClass = 'NavBtn_blue'
          }
       
        return (
            <div className="Landing-Page">
                <div>
                    <section>
                        <article className = {computedClassName}>
                            As music artists, we sometimes lose creativity dealing with our day to day lives. That inspiration we're looking for to
                            write a good song just isn't there, and GhostWriterz is here to solve that problem. No more banging the tables and wasting time
                            forcing up words when you can find lyrics from a community of helpful artists! On a roll? feeling like the next Shakespeare?
                            Share your lyrics to the community for others to use to help them out of writers block.
                    </article>
                    </section>
                </div>
                <NavLink className="lyrics_link" to="/lyrics" >
                    <Button className = {computedBtnClass} btnName="Find Lyrics" />
                </NavLink>
            </div>
        )
    }
}

export default LandingPage