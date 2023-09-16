import Post from "../post/Post";
import Share from "../share/Share";

const Feed = () => {
	return (
		<div className="basis-6/12  h-[calc(100vh-48px)]">
			<div className="p-5">
				<Share />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
};

export default Feed;
