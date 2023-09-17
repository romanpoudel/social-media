import RssFeedIcon from "@mui/icons-material/RssFeed";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import CloseFriend from "../../closeFriend/CloseFriend";
import { Users } from "../../dummyData";

const Sidebar = () => {
	return (
		<div className="basis-3/12 h-[calc(100vh-48px)] overflow-y-scroll sticky top-12">
			<div className="p-5">
				<ul className="p-0 m-0 list-none">
					<li className="flex items-center mb-5">
						<RssFeedIcon />
						<span className="ml-4">Feed</span>
					</li>
					<li className="flex items-center mb-5">
						<ChatIcon />
						<span className="ml-4">Chats</span>
					</li>
					<li className="flex items-center mb-5">
						<PlayCircleIcon />
						<span className="ml-4">Videos</span>
					</li>
					<li className="flex items-center mb-5">
						<GroupIcon />
						<span className="ml-4">Groups</span>
					</li>
					<li className="flex items-center mb-5">
						<BookmarkIcon />
						<span className="ml-4">Bookmarks</span>
					</li>
					<li className="flex items-center mb-5">
						<HelpOutlineIcon />
						<span className="ml-4">Questions</span>
					</li>
					<li className="flex items-center mb-5">
						<WorkOutlineIcon />
						<span className="ml-4">Jobs</span>
					</li>
					<li className="flex items-center mb-5">
						<EventIcon />
						<span className="ml-4">Events</span>
					</li>
					<li className="flex items-center mb-5">
						<SchoolIcon />
						<span className="ml-4">Courses</span>
					</li>
				</ul>
				<button className="border-none w-36 p-2.5 rounded-md font-medium bg-gray-200">Show More</button>
				<hr className="my-5 mx-0"/>
				<ul className="m-0 p-0 list-none">
					{Users.map((u) => (
						<CloseFriend key={u.id} user={u} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
