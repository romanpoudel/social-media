import PropTypes from "prop-types";
import {format} from "timeago.js" 

const Message = ({ message,own }) => {
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
					{message.text}
				</p>
			</div>
			<div className="messageBottom text-xs mt-2.5">{format(message.createdAt)}</div>
		</div>
	);
};

Message.propTypes = {
	message: PropTypes.string,
	own: PropTypes.bool,
};

export default Message;
