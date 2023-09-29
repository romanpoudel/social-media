import PropTypes from "prop-types";

const Message = ({ own }) => {
	return (
		<div
			className={
				own ? "flex flex-col items-end mt-5" : "message flex flex-col mt-5"
			}
		>
			<div className="messageTop flex items-center">
				<img
					src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
					alt=""
					className={own?"hidden":"messageImg w-8 h-8 rounded-full object-cover mr-2"}
				/>
				<p
					className={
						own
							? "messageText p-2.5 rounded-3xl bg-blue-500 text-white max-w-xs"
							: "bg-gray-100 text-black max-w-xs p-2.5 rounded-3xl"
					}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Reiciendis inventore veniam ratione officiis nesciunt ad
					voluptates rem nam reprehenderit facilis pariatur
					perferendis, eveniet voluptas, ut eaque illo earum hic
					voluptatibus?
				</p>
			</div>
			<div className="messageBottom text-xs mt-2.5">1 hour ago</div>
		</div>
	);
};

Message.propTypes = {
	own: PropTypes.bool,
};

export default Message;
