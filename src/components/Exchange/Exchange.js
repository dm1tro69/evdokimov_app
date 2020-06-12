import React, {useContext} from "react";
import './Exchange.scss'
import {RateContext} from "../../context/RateContext";

export const Exchange = () => {

    const {state} = useContext(RateContext)

    const currency = {...state.currency}

    return(
        <div className={'exchange'}>
            <div className={'exchangeContainer'}>
                <div className={'exchangeContent'}>
                    <div>
                        <p>Базова валюта: &nbsp;{state.base} &nbsp; Дата:{state.date} </p>
                    </div>
                    <ul>
                        {
                            Object.keys(currency).map((item, index)=>{
                                return(
                                    <li key={item}>
                                        <span><img src={currency[item].flag} alt={item} />{item}</span>
                                        <span>{`1${state.base} = ${currency[item].course}`}</span>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>


        </div>
    )
}