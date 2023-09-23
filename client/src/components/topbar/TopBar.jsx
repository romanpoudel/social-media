import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const TopBar = () => {
	const PF = import.meta.env.VITE_PUBLIC_PATH;
	const { user } = useContext(AuthContext);
	return (
		<div className="topbarContainer h-12 w-full bg-blue-500 flex items-center sticky top-0 z-50">
			<div className="topbarLeft basis-3/12 text-2xl ml-5 font-bold text-white">
				<Link to="/">
					<span className="cursor-pointer">Social</span>
				</Link>
			</div>
			<div className="topbarCenter basis-5/12">
				<div className="w-full h-8 bg-white rounded-full flex items-center">
					<SearchIcon className="!text-xl ml-2.5" />
					<input
						type="text"
						placeholder="Search for friends, post or video"
						className="outline-none w-9/12"
					/>
				</div>
			</div>
			<div className="topbarRight flex basis-4/12 items-center justify-around text-white">
				<div>
					<span className="text-sm cursor-pointer mr-2.5">
						Homepage
					</span>
					<span className="text-sm cursor-pointer mr-2.5">
						Timeline
					</span>
				</div>
				<div className="flex">
					<div className="flex items-center">
						<div className="mr-3.5 cursor-pointer relative">
							<PersonIcon />
							<span className="w-3.5 h-3.5 bg-red-500 rounded-full text-white absolute -top-1 -right-1 flex items-center justify-center text-xs">
								1
							</span>
						</div>
					</div>
					<div className="flex items-center">
						<div className="mr-3.5 cursor-pointer relative">
							<ChatIcon />
							<span className="w-3.5 h-3.5 bg-red-500 rounded-full text-white absolute -top-1 -right-1 flex items-center justify-center text-xs">
								1
							</span>
						</div>
					</div>
					<div className="flex items-center">
						<div className="mr-3.5 cursor-pointer relative">
							<NotificationsIcon />
							<span className="w-3.5 h-3.5 bg-red-500 rounded-full text-white absolute -top-1 -right-1 flex items-center justify-center text-xs">
								1
							</span>
						</div>
					</div>
				</div>
				<div className="w-8 h-8">
					<Link to={`/profile/${user.username}`}>
						<img
							crossOrigin="anonymous"
							src={
								user.profilePicture ||
								`${PF}assets/person/noAvatar.png`
							}
							alt=""
							className="w-full h-full rounded-full object-cover cursor-pointer"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
