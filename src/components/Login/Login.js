import React, {Fragment, useContext} from "react";
import './Login.scss'
import {Button} from "../Button/Button";
import {RateContext} from "../../context/RateContext";

export const Login = () => {

    const {renderInputs, state, loginHandler} = useContext(RateContext)

    return(

        <Fragment>
            <div className={'modalForm'}>
                {renderInputs()}


            </div>

            <div className={'modalBtn'}>
                <Button
                    click={loginHandler}
                    disabled={!state.isFormValid}
                    text={'Войти'}/>

            </div>
        </Fragment>

    )
}