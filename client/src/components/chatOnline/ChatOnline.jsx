import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
	const [friends, setFriends] = useState([]);
	const [onlineFriends, setOnlineFriends] = useState([]);
	const PF = import.meta.env.VITE_PUBLIC_PATH;

	useEffect(() => {
		const getFriends = async () => {
			try {
				const res = await axios.get("/api/users/friends/" + currentId);
				setFriends(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getFriends();
	}, [currentId]);

	useEffect(() => {
		setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
	}, [friends, onlineUsers]);

	const handleClick = async (user) => {
		try {
			const res = await axios.get(
				`/api/conversations/find/${currentId}/${user._id}`
			);
			setCurrentChat(res.data);
		} catch (err) {
			console.log(err);
		}
	}
	
	return (
		<div className="chatOnline">
			{onlineFriends.map((o, i) => (
				<div
					key={i}
					className="chatOnlineFriend flex items-center font-medium cursor-pointer"
					onClick={() => {
						handleClick(o);
					}}
				>
					<div className="chatOnlineImgContainer relative mr-2.5">
						<img
							crossOrigin="anonymous"
							src={
								o?.profilePicture
									? o.profilePicture
									: PF + "assets/person/noAvatar.png"
							}
							alt=""
							className="chatOnlineImg w-8 h-8 rounded-full object-cover"
						/>
						<div className="chatOnlineBadge absolute w-2.5 h-2.5 rounded-full bg-green-500 top-0 right-0 border-2 border-white"></div>
					</div>
					<span className="chatOnlineName">{o.username}</span>
				</div>
			))}
		</div>
	);
};

ChatOnline.propTypes = {
	onlineUsers: PropTypes.array,
	currentId: PropTypes.string,
	setCurrentChat: PropTypes.func,
};

export default ChatOnline;
