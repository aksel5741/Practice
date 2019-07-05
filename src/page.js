import React from 'react';
import Main from './component/MainPage/main.js'
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./component/Login_signup/Login/Login.js";
import Signup from "./component/Login_signup/Sign_up/Signup.js";

function Page() {
    return (
        <BrowserRouter>
            <Route exact path='/'component={Main} />
            <Route path='/Login' component={Login} />
            <Route path='/Signup' component={Signup} />
        </BrowserRouter>
    );
}
export default Page;
