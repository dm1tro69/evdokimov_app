import React from "react";
import './Layout.scss'
import {AddClass} from "../../hoc/AddClass";
import {Header} from "../Header/Header";
import {Home} from "../../Pages/Home/Home";
import {Sidebar} from "../Sidebar/Sidebar";

const Layout = () => {
    return(
        <React.Fragment>
       <Header/>
         <div className={'content'}>
             <div className={'routes'}>
                 <Home/>
             </div>

             <Sidebar/>


        </div>
        </React.Fragment>

    )
}
export default AddClass(Layout, 'layout')