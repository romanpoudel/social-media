import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import {Users} from '../../dummyData';
import { useState } from 'react';

const Post = ({post}) => {
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked?like-1:like+1);
        setIsLiked(!isLiked);
    }
	return (
		<div className="post w-full shadow-2xl rounded-lg my-7 mx-0">
			<div className="postWrapper p-2.5">
                <div className="postTop flex items-center justify-between">
                    <div className="postTopLeft flex items-center">
                        <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className='w-8 h-8 object-cover rounded-full'/>
                        <span className="postUsername text-sm font-medium my-0 mx-2.5">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                        <span className="postDate text-xs">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter my-5 mx-0">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className='mt-5 w-full max-h-[500px] object-contain'/>
                </div>
                <div className="postBottom flex items-center justify-between">
                    <div className='postButtomLeft flex items-center'>
                        <img src="assets/like.png" alt="" onClick={likeHandler} className='cursor-pointer mr-1 w-6 h-6'/>
                        <img src="assets/heart.png" alt="" onClick={likeHandler} className='cursor-pointer mr-1 w-6 h-6'/>
                        <span className='text-sm'>{like} people like it</span>
                    </div>
                    <div className='postButtomRight'>
                        <span className='cursor-pointer text-sm border-b border-gray-200 border-dashed'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
		</div>
	);
};


Post.propTypes = {
    post:PropTypes.object
}

export default Post;
