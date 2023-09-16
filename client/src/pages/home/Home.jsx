import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";

const Home = () => {
	return (
		<div className="w-full">
			<TopBar />
			<div className="flex w-full">
				<Sidebar />
				<Feed />
				<Rightbar />
			</div>
		</div>
	);
};

export default Home;
