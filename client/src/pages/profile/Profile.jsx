import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import axios from "axios";
import { useParams } from "react-router";

const Profile = () => {
	const PF=import.meta.env.VITE_PUBLIC_PATH;
	const [user,setUser]=useState({});
	const username=useParams().username;

	useEffect(()=>{
		const fetchUser=async()=>{
			const res=await axios.get(`/api/users?username=${username}`);
			setUser(res.data);
		}
		fetchUser();
	},[username]);
	return (
		<div>
			<TopBar />
			<div className="profile flex">
				<Sidebar />
				<div className="profileRight basis-9/12">
					<div className="profileRightTop">
						<div className="profileCover h-80 relative">
							<img
								src={`${PF}assets/post/3.jpeg`}
								alt=""
								className="profileCoverImg w-full h-64 object-cover"
							/>
							<img
								src={`${PF}assets/person/7.jpeg`}
								alt=""
								className="profileUserImg w-36 h-36 object-cover absolute right-0 left-0 top-40 mx-auto rounded-full border-solid border-4 border-white"
							/>
						</div>
						<div className="profileInfo flex flex-col items-center justify-center">
							<h4 className="profileInfoName text-2xl font-bold">{user.username}</h4>
							<h4 className="profileInfoDesc font-light">
								{user.desc}
							</h4>
						</div>
					</div>
					<div className="profileRightBottom  flex">
						<Feed username={username}/>
						<Rightbar profile/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
