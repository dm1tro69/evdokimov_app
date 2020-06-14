import React, {useContext} from "react";
import './Layout.scss'
import {AddClass} from "../../hoc/AddClass";
import {Header} from "../Header/Header";
import {Home} from "../../Pages/Home/Home";
import {Sidebar} from "../Sidebar/Sidebar";
import {Route, Switch} from 'react-router-dom'
import {Calc} from "../../Pages/Calc/Calc";
import {Sample} from "../../Pages/Sample/Sample";
import {Info} from "../../Pages/Info/Info";
import {RateContext} from "../../context/RateContext";

const Layout = () => {

    const {state} = useContext(RateContext)

    return(
        <React.Fragment>
       <Header/>
         <div className={'content'}>
             <div className={'routes'}>

                 {state.auth ?  <Switch>
                     <Route path='/' exact component={Home}/>
                     <Route path='/calc' render = {()=><Calc/>}/>
                     <Route path='/sample' render = {()=><Sample/>}/>
                     <Route path='/info' render = {()=><Info/>}/>

                 </Switch> :
                     <Route path='/'  component={Home}/>
                 }



             </div>

             <Sidebar/>


        </div>
        </React.Fragment>

    )
}
export default AddClass(Layout, 'layout')