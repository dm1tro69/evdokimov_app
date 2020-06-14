import React, {Fragment, useState, useContext} from "react";
import './Modal.scss'
import {Login} from "../Login/Login";
import {Register} from "../Register/Register";
import {RateContext} from "../../context/RateContext";

export const Modal = () => {

    const {state, modalHideHandler} = useContext(RateContext)

    const [value, setValue] = useState('login')

    const links = [{name: 'Вход', id: 'login'}, {name: 'Регистрация', id: 'register'}]

    const cls = ['modal']

    const windowHandler = (id) => {
        setValue(id)
    }

    if(state.showModal){
        cls.push('modalShow')
    }

    return(
        <div className={cls.join(' ')}>
            <Fragment>
            <div className={'modalHead'}>
                <ul>

                    {links.map((item, index)=>{
                        return(
                            <li
                                style={{fontWeight: item.id === value ? 'bold': 'normal', cursor: 'pointer'}}
                                onClick={()=>windowHandler(item.id)}
                                key={item.name}>{item.name}</li>
                        )
                    })}

                </ul>
                <i className={'fa fa-times'} aria-hidden={'true'} onClick={modalHideHandler}></i>
            </div>
                <hr/>
            </Fragment>
            {value === 'register' ? <Register/> : <Login/>}


        </div>
    )
}