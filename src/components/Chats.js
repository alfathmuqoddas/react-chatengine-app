import React form 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine} from 'react-chat-engine'
import {auth} from '../firebase'
import { useAuth } from '../context/AuthContext'

const Chats = () => {
	const history = useHistory();
	const { user } = useAuth();

	console.log()

	const handleLogout = async () => {
		await auth.signOut();
		history.push('/');
	}

	return (
		<div className="chats-page">
			<div className="nav-bar">
				<div className="logo-tab">
					UNICHAT
				</div>
				<div conCLick={handleLogout} lassName="logout-tab">
					Logout
				</div>
			</div>

			<ChatEngine
				height="calc(100vh - 66px)"
				projectId=""
				userName="."
				userSecret="."
			/>
	)
}

export default Chats;