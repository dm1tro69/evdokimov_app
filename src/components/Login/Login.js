import React, {Fragment, useContext} from "react";
import './Login.scss'
import {Button} from "../Button/Button";
// import {Input} from "../Input/Input";
import {RateContext} from "../../context/RateContext";

export const Login = () => {

    const {renderInputs} = useContext(RateContext)

    return(

        <Fragment>
            <div className={'modalForm'}>
                {renderInputs()}


            </div>

            <div className={'modalBtn'}>
                <Button text={'Войти'}/>

            </div>
        </Fragment>

    )
}