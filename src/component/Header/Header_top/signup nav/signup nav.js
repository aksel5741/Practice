import React from 'react';
import "./signupnav.css";
import {NavLink} from "react-router-dom";

const Signup =()=>{
	return(
		<div className='login_signup'>
			<ul className="login-signup-nav">
				<li>
					<NavLink to='/Login'>Login</NavLink>
				</li>
				<li>
					<NavLink to='/Signup'>Sign up</NavLink>
				</li>
			</ul>
		</div>	
		);
}

export default Signup;