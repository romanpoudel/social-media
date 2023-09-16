import RssFeedIcon from "@mui/icons-material/RssFeed";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";

const Sidebar = () => {
	return (
		<div className="basis-3/12 h-[calc(100vh-48px)] overflow-y-scroll p-5">
			<div>
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
					<li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
                    <li className="flex items-center mb-4">
						<img src="/assets/person/2.jpeg" alt="" className="w-8 h-8 rounded-full object-cover mr-2.5"/>
						<span>Jane Doe</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
