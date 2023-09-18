import Post from "../post/Post";
import Share from "../share/Share";
// import {Posts} from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Feed = ({ username }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = username
					? await axios.get("api/posts/profile/"+username)
					: await axios.get(
							"api/posts/timeline/650419f271be9a6a9effd761"
					);
				setPosts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchPosts();
	}, [username]);
	console.log(posts);
	return (
		<div className="flex-1">
			<div className="p-5">
				<Share />
				{posts.map((p) => (
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
