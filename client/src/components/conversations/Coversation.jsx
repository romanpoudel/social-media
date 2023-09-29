import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Coversation = ({conversation,currentUser}) => {
	const [user,setUser]=useState(null)
	const PF=import.meta.env.VITE_PUBLIC_PATH;

	useEffect(() => {
		const friendId = conversation.members.find((m) => m !== currentUser._id);
		const getUser = async () => {
			try {
				const res = await axios("/api/users?userId=" + friendId);
				setUser(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getUser();
	}, [currentUser, conversation]);

	return (
		<div className="conversation flex items-center p-2.5 cursor-pointer hover:bg-gray-200 mt-1">
			<img
				crossOrigin="anonymous"
				src={user?.profilePicture?user.profilePicture:PF+"assets/person/noAvatar.png"}
				className="conversationImg w-10 h-10 rounded-full object-cover mr-5"
				alt=""
			/>
			<span className="conversationName font-medium">{user?.username}</span>
		</div>
	);
};

Coversation.propTypes = {
	conversation: PropTypes.object,
	currentUser:PropTypes.object
};

export default Coversation;
