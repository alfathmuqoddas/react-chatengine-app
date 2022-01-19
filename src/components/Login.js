import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from "firebase/app";

cosnt Login = () => {
	return (
		<div id="login-page">
			<div id="login-card">
				<h2>Welcome to Unichat!</h2>
				<div className="login-button google"
				onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
					<GoogleOutlined /> Sign In with Google
				</div>
			</div>
		</div>
	)
}

export default Login;