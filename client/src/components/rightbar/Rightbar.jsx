import { Users } from "../../dummyData";
import Online from "../online/Online";
import PropTypes from "prop-types";

const Rightbar = ({ profile }) => {
	const PF=import.meta.env.VITE_PUBLIC_PATH;
	// console.log(PF)
	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdatContainer flex items-center">
					<img
						src="assets/gift.png"
						className="birthdayImg w-10 h-10 mr-2.5"
						alt=""
					/>
					<span className="birthdayText font-light text-sm">
						<b>Pola Foster</b> and <b>3 other friends</b> have a
						birthday today.
					</span>
				</div>
				<img
					src="assets/ad.png"
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
				<h4 className="rightbarTitle mb-5 font-semibold text-lg">User information</h4>
				<div className="rightbarInfo mb-7">
					<div className="rightbarInfoItem mb-1.5">
						<span className="rightbarInfoKey mr-3.5 font-medium text-gray-500">City:</span>
						<span className="rightbarInfoValue font-light">New York</span>
					</div>
					<div className="rightbarInfoItem mb-1.5">
						<span className="rightbarInfoKey mr-3.5 font-medium text-gray-500">From:</span>
						<span className="rightbarInfoValue font-light">Madrid</span>
					</div>
					<div className="rightbarInfoItem mb-1.5">
						<span className="rightbarInfoKey mr-3.5 font-medium text-gray-500">Relationship:</span>
						<span className="rightbarInfoValue font-light">Single</span>
					</div>
				</div>
				<h4 className="rightbarTitle mb-5 font-semibold text-lg">User friends</h4>
				<div className="rightbarFollowings flex flex-wrap justify-between">
					<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
						<img
							src={`${PF}assets/person/1.jpeg`}
							alt=""
							className="rightbarFollowingImg object-cover w-24 h-24 rounded-md"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
						<img
							src={`${PF}assets/person/2.jpeg`}
							alt=""
							className="rightbarFollowingImg object-cover w-24 h-24 rounded-md"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
						<img
							src={`${PF}assets/person/3.jpeg`}
							alt=""
							className="rightbarFollowingImg object-cover w-24 h-24 rounded-md"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
						<img
							src={`${PF}assets/person/4.jpeg`}
							alt=""
							className="rightbarFollowingImg object-cover w-24 h-24 rounded-md"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
						<img
							src={`${PF}assets/person/5.jpeg`}
							alt=""
							className="rightbarFollowingImg object-cover w-24 h-24 rounded-md"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
						<img
							src={`${PF}assets/person/6.jpeg`}
							alt=""
							className="rightbarFollowingImg object-cover w-24 h-24 rounded-md"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
				</div>
			</>
		);
	};
	return (
		<div className="rightbar basis-3/12 h-[calc(100vh-48px)] [&::-webkit-scrollbar]:hidden overflow-y-scroll sticky top-12">
			<div className="rightbarWrapper p-5">
				{profile ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	);
};

Rightbar.propTypes = {
	profile: PropTypes.bool,
};

export default Rightbar;
