import React from 'react';
import { useHistory } from "react-router-dom";
import './Button.css'

function Button(props) {
    let history = useHistory();

    function handleClick() {
        if (props.path) {
            history.push(`/${props.path}`)
        }
    }

    return (
        <div className="Btn">
            <button type="submit" className={props.className} onClick={handleClick}>{props.btnName}</button>
        </div>
    )
}
export default Button