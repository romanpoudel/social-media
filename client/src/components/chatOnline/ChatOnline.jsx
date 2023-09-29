const ChatOnline = () => {
	return (
		<div className="chatOnline">
			<div className="chatOnlineFriend flex items-center font-medium cursor-pointer">
				<div className="chatOnlineImgContainer relative mr-2.5">
					<img
						src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
						alt=""
                        className="chatOnlineImg w-8 h-8 rounded-full object-cover"
					/>
					<div className="chatOnlineBadge absolute w-2.5 h-2.5 rounded-full bg-green-500 top-0 right-0 border-2 border-white"></div>
				</div>
                <span className="chatOnlineName">John Doe</span>
			</div>
		</div>
	);
};

export default ChatOnline;
