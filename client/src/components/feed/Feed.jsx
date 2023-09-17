import Post from "../post/Post";
import Share from "../share/Share";
import {Posts} from "../../dummyData";

const Feed = () => {
	return (
		<div className="flex-1">
			<div className="p-5">
				<Share />
				{Posts.map((p) => (
					<Post key={p.id} post={p} />
				))
				}
			</div>
		</div>
	);
};

export default Feed;
