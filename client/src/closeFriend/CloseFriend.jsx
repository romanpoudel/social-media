import PropTypes from "prop-types";

const CloseFriend = ({user}) => {
	return (
		<li className="flex items-center mb-4">
			<img
				src={user.profilePicture}
				alt=""
				className="w-8 h-8 rounded-full object-cover mr-2.5"
			/>
			<span>{user.username}</span>
		</li>
	);
};

CloseFriend.propTypes = {
    user: PropTypes.object,
};

export default CloseFriend;
