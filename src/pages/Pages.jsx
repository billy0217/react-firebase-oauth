import React, { useEffect, useState } from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Account from './Account';
import Home from './Home';
import { auth } from '../components/Firebase/firebase'
import { onAuthStateChanged } from "firebase/auth";

const Pages = () => {
	const location = useLocation();
	const [isUserSignedIn, setIsUserSignedIn] = useState([]);
	
	useEffect(()=>{
		//check auth state
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// set user state
				setIsUserSignedIn(user)
			} else {
				// remove user state
				setIsUserSignedIn([])
			}
		});
	},[isUserSignedIn])

	return (
		<Routes location={location} key={location.pathname}>
			<Route path="/" element={<Home user={isUserSignedIn} />} />
			<Route path="/account" element={<Account user={isUserSignedIn} />}/>
		</Routes>
	)
}

export default Pages;
