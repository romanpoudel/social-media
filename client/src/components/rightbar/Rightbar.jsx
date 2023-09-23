import { useEffect, useState } from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

const Rightbar = ({ user }) => {
	const PF = import.meta.env.VITE_PUBLIC_PATH;
	const [friends, setFriends] = useState([]);
	useEffect(() => {
		const getFriends = async () => {
			try {
				if (user?._id) {
					const friendList = await axios.get(
						`/api/users/friends/${user?._id}`
					);
					setFriends(friendList.data);
				}
			} catch (err) {
				console.log(err);
			}
		};
		getFriends();
	}, [user?._id]);
	console.log("user:", user?._id);
	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdatContainer flex items-center">
					<img
						src={`${PF}assets/gift.png`}
						className="birthdayImg w-10 h-10 mr-2.5"
						alt=""
					/>
					<span className="birthdayText font-light text-sm">
						<b>Pola Foster</b> and <b>3 other friends</b> have a
						birthday today.
					</span>
				</div>
				<img
					src={`${PF}assets/ad.png`}
					className="rightbarAd w-full rounded-lg my-7 mx-0"
					alt=""
				/>
				<h4 className="rightbarTitle mb-5">Online Friends</h4>
				<ul className="rightbarFriendList p-0 m-0 list-none">
					{Users.map((u) => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</>
		);
	};

	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle mb-5 font-semibold text-lg">
					User information
				</h4>
				<div className="rightbarInfo mb-7">
					<div className="rightbarInfoItem mb-1.5">
						<span className="rightbarInfoKey mr-3.5 font-medium text-gray-500">
							City:
						</span>
						<span className="rightbarInfoValue font-light">
							{user.city}
						</span>
					</div>
					<div className="rightbarInfoItem mb-1.5">
						<span className="rightbarInfoKey mr-3.5 font-medium text-gray-500">
							From:
						</span>
						<span className="rightbarInfoValue font-light">
							{user.from}
						</span>
					</div>
					<div className="rightbarInfoItem mb-1.5">
						<span className="rightbarInfoKey mr-3.5 font-medium text-gray-500">
							Relationship:
						</span>
						<span className="rightbarInfoValue font-light">
							{user.relationship === 1
								? "Single"
								: user.relationship === 2
								? "Married"
								: "-"}
						</span>
					</div>
				</div>
				<h4 className="rightbarTitle mb-5 font-semibold text-lg">
					User friends
				</h4>
				<div className="rightbarFollowings flex flex-wrap justify-between">
					{friends.map((friend) => (
						<Link key={friend._id} to={"/profile/"+friend.username}>
							<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
								<img
									crossOrigin="anonymous"
									src={
										friend.profilePicture
											? PF +"assets/" +friend.profilePicture
											: `${PF}assets/person/noAvatar.png`
									}
									alt=""
									className="rightbarFollowingImg object-cover w-24 h-24 rounded-md"
								/>
								<span className="rightbarFollowingName text-center">
									{friend.username}
								</span>
							</div>
						</Link>
					))}
				</div>
			</>
		);
	};
	return (
		<div className="rightbar basis-3/12 h-[calc(100vh-48px)] [&::-webkit-scrollbar]:hidden overflow-y-scroll sticky top-12">
			<div className="rightbarWrapper p-5">
				{user ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	);
};

Rightbar.propTypes = {
	user: PropTypes.object,
};

export default Rightbar;
