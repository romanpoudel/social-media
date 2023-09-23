import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
	const { user } = useContext(AuthContext);
	const PF = import.meta.env.VITE_PUBLIC_PATH;
	const [file, setFile] = useState(null);
	const desc = useRef();

	const submitHandler = async (e) => {
		e.preventDefault();
		const newPost = {
			userId: user._id,
			desc: desc.current.value,
		};
		if (file) {
			const data = new FormData();
			const fileName = Date.now() + file.name;
			data.append("name", fileName);
			data.append("file", file);
			newPost.img = fileName;
			try {
				await axios.post("/api/upload", data);
			} catch (err) {
				console.log(err);
			}
		}
		try {
			await axios.post("/api/posts", newPost);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div className="share w-full h-36 rounded-xl shadow-2xl">
			<div className="shareWrapper p-2.5">
				<div className="shareTop flex items-center">
					<img
						className="shareProfileImg w-12 h-12 rounded-full object-cover mr-2.5"
						crossOrigin="anonymous"
						src={
							user.profilePicture ||
							`${PF}assets/person/noAvatar.png`
						}
						alt=""
					/>
					<input
						type="text"
						className="shareInput border-none outline-none flex-1"
						placeholder={`What's on your mind ${user.username} ?`}
						ref={desc}
					/>
				</div>
			</div>
			<hr className="shareHr mx-5 my-2" />
			<form className="shareBottom flex items-center justify-between" onSubmit={submitHandler}>
				<div className="shareOptions flex ml-5">
					<label
						htmlFor="file"
						className="shareOption flex items-center mr-3.5 cursor-pointer"
					>
						<PermMediaIcon
							htmlColor="tomato"
							className="shareIcon !text-lg mr-0.5"
						/>
						<span className="shareOptionText text-sm font-medium">
							Photo or Video
						</span>
						<input
							type="file"
							id="file"
							accept=".png,.jpg,.jpeg"
							className="hidden"
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</label>
					<div className="shareOption flex items-center mr-3.5 cursor-pointer">
						<LabelIcon
							htmlColor="blue"
							className="shareIcon !text-lg mr-0.5"
						/>
						<span className="shareOptionText text-sm font-medium">
							Tag
						</span>
					</div>
					<div className="shareOption flex items-center mr-3.5 cursor-pointer">
						<LocationOnIcon
							htmlColor="green"
							className="shareIcon !text-lg mr-0.5"
						/>
						<span className="shareOptionText text-sm font-medium">
							Location
						</span>
					</div>
					<div className="shareOption flex items-center mr-3.5 cursor-pointer">
						<EmojiEmotionsIcon
							htmlColor="goldenrod"
							className="shareIcon !text-lg mr-0.5"
						/>
						<span className="shareOptionText text-sm font-medium">
							Feelings
						</span>
					</div>
				</div>
				<button type="submit" className="border-none p-1.5 rounded bg-green-500 font-medium mr-5 cursor-pointer text-white">
					Share
				</button>
			</form>
		</div>
	);
};

export default Share;
