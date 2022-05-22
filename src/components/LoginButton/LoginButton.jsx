
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, provider} from '../Firebase/firebase';
import { signInWithPopup  } from "firebase/auth";
import "./LoginButton.css"

const LoginButton = () => {

	const navigate = useNavigate();
	const loginClickHandler =  () => {

		signInWithPopup(auth, provider)
			.then((res) => {
				// redirect to account page
				navigate('/account');
			})
			.catch((e) => {
				// catch error if use is not signIn
				console.log(e)
			})
	}

	return (
		<div>
			<button 
				aria-label='login button'
				onClick={loginClickHandler}
				className="o-btn o-btn--login"
			>
				Login with Google
			</button>
		</div>
	)
}

export default LoginButton;