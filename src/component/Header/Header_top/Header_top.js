import React from 'react';
import '../header.css';
import Phone from './Phone/Phone.js';
import Signup from './signup nav/signup nav.js';

const Top =()=>{
	return(
		<div className='header-top'>
			<div className='header-top-container'>
				<Phone />
				<Signup />
			</div>
		</div>	
		);
}

export default Top;