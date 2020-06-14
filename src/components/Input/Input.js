import React from "react";
import './Input.scss'

function isInValid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate

}

export const Input = (props) =>{

    const cls = ['modalInput']
    const inputType = props.type || 'text'
    const htmlFor = `${props.type}-${Math.random()}`

    return(
        <div className={cls.join('')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                onChange={props.onChange}
                value={props.value}
                id={htmlFor}
                type={inputType}/>
            {isInValid(props) ? <span>{props.errorMessage || 'Введите верное значение'}</span> : null }

        </div>
    )
}