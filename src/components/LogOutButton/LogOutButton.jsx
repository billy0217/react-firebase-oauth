import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebase';
import { signOut  } from "firebase/auth";
import "./LogOutButton.css"

const LogOutButton = () => {
	const navigate = useNavigate();
	const logOutClickHandler = () => {

		signOut(auth).then(() => {
			// Sign-out successful.
			navigate('/');
		}).catch((error) => {
			// An error happened.
			console.log(error)
		});
	}

	return (
		<div>
			<button 
				aria-label='logout button'
				onClick={logOutClickHandler}
				className="o-btn o-btn--logout"
			>
				Log Out
			</button>
		</div>
	)
}

export default LogOutButton