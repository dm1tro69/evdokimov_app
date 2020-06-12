import React, {useContext} from "react";
import './Counter.scss'
import {RateContext} from "../../context/RateContext";

export const Counter = () => {

    const {state, inputValueHandler,
        currencyValueHandler,
        calculatorHandler} = useContext(RateContext)

    return(
        <div className={'calcHead'}>
            <div>
                <h4>Я хочу обменять:</h4>
            </div>
            <div className={'operation'}>
                <span><input
                    type="number"
                    value={state.inputValue}
                    onChange={inputValueHandler}
                />&nbsp; RUB</span>
                <select onChange={currencyValueHandler}>
                    {Object.keys(state.currency).map((item, index)=>{
                        return(
                            <option key={item}>{item}</option>
                        )
                    })}
                </select>
                <button onClick={()=>calculatorHandler(state.currencyValue)}>Посчитать</button>
            </div>

        </div>
    )
}