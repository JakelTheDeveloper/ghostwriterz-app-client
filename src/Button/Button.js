import React from 'react';
import './Button.css'

function Button (props){

    return(
        <div className="Btn">
        <button type ="submit" className = "NavBtn">{props.btnName}</button>
        </div>
    )
}
export default Button