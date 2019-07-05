import React from 'react';
import Log from './Login_area/Login_area.js'
import Signup from './Signup_area/signup_area.js'

function Login_area() {
    return (
        <div className="conteiner">
            <Signup />
            <Log />
        </div>
    );
}

export default Login_area;
