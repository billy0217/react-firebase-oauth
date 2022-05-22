import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import LoginButton from '../components/LoginButton/LoginButton';
import LogOutButton from '../components/LogOutButton/LogOutButton';

const Home = (props) => {
	
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');

	useEffect(()=>{
		// check user data from oAuth
		if(props.user.length !== 0){
			setIsLoggedIn(true)
			setUserName(props.user.displayName)
		}else{
			setIsLoggedIn(false)
		}
	},[props]);

	return (
		<div className="container">
			<div className="c-card">
				<h1 className="c-card__title">Single Login Page</h1>
				{isLoggedIn 
					? <div className="c-card__body">{userName &&  <h3 className="c-card__body-heading">Hi, {userName} !</h3> }<div className="c-card__footer"><Link to="/account" className="o-btn o-btn--link">View Profile</Link><LogOutButton /></div></div>
					:	<div className="c-card__body"><div className="c-card__footer"><LoginButton /></div></div>}
			</div>
		</div>
	)
}

export default Home;
