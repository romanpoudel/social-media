import PropTypes from "prop-types";

const Online = ({user}) => {
	const PF=import.meta.env.VITE_PUBLIC_PATH;
	return (
		<li className="rightbarFriend flex items-center mb-3.5">
			<div className="rightbarProfileImgContainer mr-2.5 relative">
				<img
					src={PF+user.profilePicture}
					className="rightbarProfileImg w-10 h-10 rounded-full object-cover"
					alt=""
				/>
				<span className="rightbarOnline w-3.5 h-3.5 rounded-full bg-green-500 absolute -top-0.5 right-0 border-2 border-solid border-white"></span>
			</div>
			<span className="rightbarUsername font-medium ">{user.username}</span>
		</li>
	);
};

Online.propTypes = {
    user: PropTypes.object
};
export default Online;
