import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
	return (
		<div className="post w-full shadow-2xl rounded-lg my-7 mx-0">
			<div className="postWrapper p-2.5">
                <div className="postTop flex items-center justify-between">
                    <div className="postTopLeft flex items-center">
                        <img src="/assets/person/1.jpeg" alt="" className='w-8 h-8 object-cover rounded-full'/>
                        <span className="postUsername text-sm font-medium my-0 mx-2.5">Roman Poudel</span>
                        <span className="postDate text-xs">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter my-5 mx-0">
                    <span className="postText">Hey! Its my first post</span>
                    <img src="assets/post/1.jpeg" alt="" className='mt-5 w-full max-h-[500px] object-contain'/>
                </div>
                <div className="postBottom flex items-center justify-between">
                    <div className='postButtomLeft flex items-center'>
                        <img src="assets/like.png" alt="" className='cursor-pointer mr-1 w-6 h-6'/>
                        <img src="assets/heart.png" alt="" className='cursor-pointer mr-1 w-6 h-6'/>
                        <span className='text-sm'>32 people like it</span>
                    </div>
                    <div className='postButtomRight'>
                        <span className='cursor-pointer text-sm border-b border-gray-200 border-dashed'>9 comments</span>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Post;
