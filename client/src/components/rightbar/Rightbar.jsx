const Rightbar = () => {
	return (
		<div className="basis-3/12  h-[calc(100vh-48px)] rightbar">
			<div className="birthdatWrapper pt-5 pr-5 pb-0 pl-0">
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
					<li className="rightbarFriend flex items-center mb-3.5">
						<div className="rightbarProfileImgContainer mr-2.5 relative">
							<img
								src="assets/person/3.jpeg"
								className="rightbarProfileImg w-10 h-10 rounded-full object-cover"
								alt=""
							/>
							<span className="rightbarOnline w-3.5 h-3.5 rounded-full bg-green-500 absolute -top-0.5 right-0 border-2 border-solid border-white"></span>
						</div>
						<span className="rightbarUsername font-medium ">John Carter</span>
					</li>
					<li className="rightbarFriend flex items-center mb-3.5">
						<div className="rightbarProfileImgContainer mr-2.5 relative">
							<img
								src="assets/person/3.jpeg"
								className="rightbarProfileImg w-10 h-10 rounded-full object-cover"
								alt=""
							/>
							<span className="rightbarOnline w-3.5 h-3.5 rounded-full bg-green-500 absolute -top-0.5 right-0 border-2 border-solid border-white"></span>
						</div>
						<span className="rightbarUsername font-medium ">John Carter</span>
					</li>
					<li className="rightbarFriend flex items-center mb-3.5">
						<div className="rightbarProfileImgContainer mr-2.5 relative">
							<img
								src="assets/person/3.jpeg"
								className="rightbarProfileImg w-10 h-10 rounded-full object-cover"
								alt=""
							/>
							<span className="rightbarOnline w-3.5 h-3.5 rounded-full bg-green-500 absolute -top-0.5 right-0 border-2 border-solid border-white"></span>
						</div>
						<span className="rightbarUsername font-medium ">John Carter</span>
					</li>
					<li className="rightbarFriend flex items-center mb-3.5">
						<div className="rightbarProfileImgContainer mr-2.5 relative">
							<img
								src="assets/person/3.jpeg"
								className="rightbarProfileImg w-10 h-10 rounded-full object-cover"
								alt=""
							/>
							<span className="rightbarOnline w-3.5 h-3.5 rounded-full bg-green-500 absolute -top-0.5 right-0 border-2 border-solid border-white"></span>
						</div>
						<span className="rightbarUsername font-medium ">John Carter</span>
					</li>
					<li className="rightbarFriend flex items-center mb-3.5">
						<div className="rightbarProfileImgContainer mr-2.5 relative">
							<img
								src="assets/person/3.jpeg"
								className="rightbarProfileImg w-10 h-10 rounded-full object-cover"
								alt=""
							/>
							<span className="rightbarOnline w-3.5 h-3.5 rounded-full bg-green-500 absolute -top-0.5 right-0 border-2 border-solid border-white"></span>
						</div>
						<span className="rightbarUsername font-medium ">John Carter</span>
					</li>
					<li className="rightbarFriend flex items-center mb-3.5">
						<div className="rightbarProfileImgContainer mr-2.5 relative">
							<img
								src="assets/person/3.jpeg"
								className="rightbarProfileImg w-10 h-10 rounded-full object-cover"
								alt=""
							/>
							<span className="rightbarOnline w-3.5 h-3.5 rounded-full bg-green-500 absolute -top-0.5 right-0 border-2 border-solid border-white"></span>
						</div>
						<span className="rightbarUsername font-medium ">John Carter</span>
					</li>
					<li className="rightbarFriend flex items-center mb-3.5">
						<div className="rightbarProfileImgContainer mr-2.5 relative">
							<img
								src="assets/person/3.jpeg"
								className="rightbarProfileImg w-10 h-10 rounded-full object-cover"
								alt=""
							/>
							<span className="rightbarOnline w-3.5 h-3.5 rounded-full bg-green-500 absolute -top-0.5 right-0 border-2 border-solid border-white"></span>
						</div>
						<span className="rightbarUsername font-medium ">John Carter</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Rightbar;
