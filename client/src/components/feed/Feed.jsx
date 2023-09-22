import Post from "../post/Post";
import Share from "../share/Share";
// import {Posts} from "../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { AuthContext } from "../../context/AuthContext";

const Feed = ({ username }) => {
	const [posts, setPosts] = useState([]);
	const {user}=useContext(AuthContext)

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = username
					? await axios.get("/api/posts/profile/"+username)
					: await axios.get(
							"/api/posts/timeline/"+user._id
					);
				setPosts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchPosts();
	}, [username,user._id]);
	console.log(posts);
	return (
		<div className="flex-1">
			<div className="p-5">
				<Share />
				{posts.length===0?<h3 className="mt-6 text-center">No posts to show</h3>:posts.map((p) => (
					<Post key={p._id} post={p} />
				))}
			</div>
		</div>
	);
};

Feed.propTypes = {
	username: PropTypes.string,
};

export default Feed;
