const Coversation = () => {
	return (
		<div className="conversation flex items-center p-2.5 cursor-pointer hover:bg-gray-200 mt-1">
			<img
				src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
				className="conversationImg w-10 h-10 rounded-full object-cover mr-5"
				alt=""
			/>
			<span className="conversationName font-medium">John Doe</span>
		</div>
	);
};

export default Coversation;
