import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
	return (
		<div className="share w-full h-36 rounded-xl shadow-2xl">
			<div className="shareWrapper p-2.5">
				<div className="shareTop flex items-center">
					<img
						className="shareProfileImg w-12 h-12 rounded-full object-cover mr-2.5"
						src="/assets/person/1.jpeg"
						alt=""
					/>
					<input
						type="text"
						className="shareInput border-none outline-none flex-1"
						placeholder="What's on your mind Roman?"
					/>
				</div>
			</div>
			<hr className="shareHr mx-5 my-2"/>
			<div className="shareBottom flex items-center justify-between">
				<div className="shareOptions flex ml-5">
					<div className="shareOption flex items-center mr-3.5 cursor-pointer">
						<PermMediaIcon htmlColor="tomato" className="shareIcon !text-lg mr-0.5"/>
						<span className="shareOptionText text-sm font-medium">Photo or Video</span>
					</div>
                    <div className="shareOption flex items-center mr-3.5 cursor-pointer">
						<LabelIcon htmlColor="blue" className="shareIcon !text-lg mr-0.5"/>
						<span className="shareOptionText text-sm font-medium">Tag</span>
					</div>
                    <div className="shareOption flex items-center mr-3.5 cursor-pointer">
						<LocationOnIcon htmlColor="green" className="shareIcon !text-lg mr-0.5"/>
						<span className="shareOptionText text-sm font-medium">Location</span>
					</div>
                    <div className="shareOption flex items-center mr-3.5 cursor-pointer">
						<EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon !text-lg mr-0.5"/>
						<span className="shareOptionText text-sm font-medium">Feelings</span>
					</div>
				</div>
                <button className="border-none p-1.5 rounded bg-green-500 font-medium mr-5 cursor-pointer text-white">Share</button>
			</div>
		</div>
	);
};

export default Share;
