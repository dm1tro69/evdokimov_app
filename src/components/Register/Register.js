import React, {Fragment, useContext} from "react";
import './Register.scss'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {RateContext} from "../../context/RateContext";

export const Register = () => {
    const {renderInputs} = useContext(RateContext)

    return(
        <Fragment>
            <div className={'modalForm'}>
                {renderInputs()}
                {/*<Input type={'email'} label={'Email'}/>*/}
                {/*<Input type={'password'} label={'Пароль'}/>*/}

            </div>

            <div className={'modalBtn'}>
                <Button text={'Регистрация'}/>

            </div>
        </Fragment>

    )
}