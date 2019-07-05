import React from 'react';
import './Header-bottom.css';


const Header =()=>{
    return(
        <div className="topnav">
            <img src={require('./logo.png')}/>
            <a >Name for Sale</a>
            <a >Our Work</a>
            <a >Contest</a>
            <a >Name Ideas</a>
        </div>
    );
}

export default Header;