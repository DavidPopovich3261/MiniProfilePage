import React from 'react'
import "../css/Button.css"

function Button(props) {    
    return (
        <button className={props.button}>{props.button}</button>
    )
}

export default Button