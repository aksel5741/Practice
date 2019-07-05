import React from 'react';
import './header.css';
import Headertop from './Header_top/Header_top.js';
import Headerbottom from './Header-bottom/Header-bottom.js';



const Header =()=>{
	return(
		<div className='header'>
			<Headertop/>
			<Headerbottom/>
		</div>	
		);
}

export default Header;