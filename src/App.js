import React from 'react';
import './App.scss';
import Layout from "./components/Layout/Layout";
import CHF from './image/CHF.png'
import CNY from './image/CNY.png'
import EUR from './image/EUR.png'
import GBP from './image/GBP.png'
import JPY from './image/JPY.png'
import RUB from './image/RUB.png'
import USD from './image/USD.png'
import {RateContext} from "./context/RateContext";
import axios from 'axios'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            base: 'USD',
            rate: '',
            date: '',
            currency: {USD: {name: 'Доллар США', flag: USD, course: ''},
                       CNY: {name: 'Китайский Юань', flag: CNY, course: ''},
                       EUR: {name: 'Евро', flag: EUR, course: ''},
                       GBP: {name: 'Фунт Стерлингов', flag: GBP, course: ''},
                       JPY: {name: 'Японская Йена', flag: JPY, course: ''},
                       RUB: {name: 'Российский Рубль', flag: RUB, course: ''},
                       CHF: {name: 'Швейцарский Франк', flag: CHF, course: ''},
            },
            //calculator
            inputValue: 100,
            currencyValue: 'USD',
            result: null,

            //sample
            sample: {base: 'USD', base2: 'RUB', date: '', course: ''},
            sampleList: ''

        }
    }

    baseHandler = (e) => {
        this.setState({sample: {...this.state.sample, base: e.target.value}})
    }

    base2Handler = (e) => {
        this.setState({sample: {...this.state.sample, base2: e.target.value}})
    }

    sampleDateHandler = (e) => {
        this.setState({sample: {...this.state.sample, date: e.target.value}})
    }


    dataWrite = async () =>{

       await fetch(`https://api.exchangeratesapi.io/${this.state.sample.date}?base=${this.state.sample.base}`)
            .then((response)=> response.json()).then((response)=> {
            this.setState({sample: {...this.state.sample, course: response.rates[this.state.sample.base2]}})
        })

        await axios.post('https://rateapp-879a9.firebaseio.com/sample.json', this.state.sample)
            .then((response)=>{
                return('')
            })

        await axios('https://rateapp-879a9.firebaseio.com/sample.json')
            .then((response)=>{
                this.setState({sampleList: response.data})
            })



    }




    inputValueHandler = (e) => {
        this.setState({inputValue: e.target.value, result: null})
    }

    currencyValueHandler = (e) =>{
        this.setState({currencyValue: e.target.value, result: null})
    }

    calculatorHandler = async (value) => {
        let result

        await fetch(`https://api.exchangeratesapi.io/latest?base=RUB`)
            .then((response)=> response.json()).then((response)=>{
                 result = response.rates[value] * this.state.inputValue
            })
        this.setState({result})

    }

    componentDidMount() {
       fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
           .then((response)=>response.json()).then((response)=> {
               // console.log(response)
           const rateArr = ['USD', 'CNY', 'EUR', 'GBP', 'JPY', 'RUB', 'CHF']
           const currency = {...this.state.currency}
           for(let i = 0; i<rateArr.length; i++){
               currency[rateArr[i]].course = response.rates[rateArr[i]]
           }
           this.setState({
               rate: response.rates,
               date: response.date,
               currency: currency
           })
       })
    }


    render() {
    return (
        <RateContext.Provider
            value={{state: this.state,
                inputValueHandler: this.inputValueHandler,
                currencyValueHandler: this.currencyValueHandler,
                calculatorHandler: this.calculatorHandler,
                baseHandler: this.baseHandler,
                base2Handler: this.base2Handler,
                sampleDateHandler: this.sampleDateHandler,
                dataWrite: this.dataWrite
            }}>

           <Layout/>

        </RateContext.Provider>
    );
  }

}

export default App;
