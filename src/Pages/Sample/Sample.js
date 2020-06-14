import React, {useContext} from "react";
import './Sample.scss'
import {RateContext} from "../../context/RateContext";
import {Button} from "../../components/Button/Button";

export const Sample = () => {

    const {state, sampleDateHandler, baseHandler, base2Handler, dataWrite, sampleRemove} = useContext(RateContext)

    return(
        <div className={'sample'}>
            <div className={'sampleContainer'}>
                <div>
                    <h3>
                        Получить курс: &nbsp;
                        <select
                            value={state.sample.base}
                            onChange={baseHandler}>
                            {Object.keys(state.currency).map((item, index)=>{
                                return(
                                    <option key={item}>{item}</option>
                                )
                            })}
                        </select>
                        &nbsp; &nbsp; к &nbsp; &nbsp;
                        <select
                            value={state.sample.base2}
                            onChange={base2Handler}>
                            {Object.keys(state.currency).map((item, index)=>{
                                return(
                                    <option key={item}>{item}</option>
                                )
                            })}
                        </select>
                    </h3>
                </div>

                <div className={'sampleHead'}>
                    <span>Дата: <input onChange={sampleDateHandler} type="date"/></span>
                    <Button text={'Получить курс'} click={dataWrite} arg={state.sample}/>
                </div>

                <div className={'sampleResult'}>
                    <ul>
                        {Object.keys(state.sampleList).map((item, index)=> {
                            return(
                                <li key={item}>
                                    <span><img src={state.currency[state.sampleList[item].base].flag} alt={item}/>&nbsp;{state.sampleList[item].base}</span>
                                    <span>{state.sampleList[item].date}</span>
                                    <span>{`${state.sampleList[item].course } ${state.sampleList[item].base2}`}</span>
                                    <button onClick={()=> sampleRemove(item)}><i className={'fa fa-times'}></i></button>


                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}