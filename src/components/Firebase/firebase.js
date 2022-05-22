import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDhORUQLnsuCDbPB0gNIpaNr_CuBW5DacU",
	authDomain: "react-login-b6b37.firebaseapp.com",
	projectId: "react-login-b6b37",
	storageBucket: "react-login-b6b37.appspot.com",
	messagingSenderId: "1036487266468",
	appId: "1:1036487266468:web:c21817e24a133b04399631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();