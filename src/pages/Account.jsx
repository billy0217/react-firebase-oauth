import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LogOutButton from '../components/LogOutButton/LogOutButton'
import Profile from '../components/Profile/Profile';

const Account = (props) => {

	const navigate = useNavigate()
	useEffect(()=>{
		// redirect if user is not logged in
		if(props.user.length  === 0 ){
			navigate('/')
		}
	},[]);

	return (
		<div className="container">
			<div className="c-card">
				<h1 className="c-card__title">Account</h1>
				<div className="c-card__body">
					<Profile user={props.user} />
					<div className="c-card__footer">
						<Link to="/" className="o-btn o-btn--link">Back to Homepage</Link>
						<LogOutButton />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Account