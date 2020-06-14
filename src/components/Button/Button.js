import React from "react";
import './Button.scss'

export const Button = (props) => {
    return(
        <button
            disabled={props.disabled}
            onClick={()=> props.click ? props.click(props.arg || '') : undefined}
            className={'btn'}>
            {props.text}
        </button>
    )
}