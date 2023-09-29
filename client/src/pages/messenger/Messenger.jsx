import TopBar from "../../components/topbar/TopBar";
import Covnersation from "../../components/conversations/Coversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";

const Messenger = () => {
	return (
		<>
			<TopBar />
			<div className="messenger h-[calc(100vh-48px)] flex ">
				<div className="chatMenu basis-3/12">
					<div className="chatMenuWrapper p-2.5 h-full">
						<input
							type="text"
							placeholder="Search for friends"
							className="chatMenuInput w-90/100 py-2.5 px-0  border-b  border-gray-500 "
						/>
						<Covnersation />
						<Covnersation />
						<Covnersation />
						<Covnersation />
					</div>
				</div>
				<div className="chatBox  basis-6/12">
					<div className="chatBoxWrapper flex flex-col h-full">
						<div className="chatBoxTop overflow-y-scroll pr-2.5">
							<Message own={true}/>
							<Message />
							<Message />
							<Message />
							<Message />
						</div>
						<div className="chatBoxBottom my-2 flex items-center justify-between">
							<textarea placeholder="Write something..." className="chatMessageInput w-4/5 p-2.5 h-24 focus:outline-none"></textarea>
							<button className="chatSubmitButton w-16 h-10 border-none rounded cursor-pointer text-white bg-blue-500">Send</button>
						</div>
					</div>
				</div>
				<div className="chatOnline basis-3/12">
					<div className="chatOnlineWrapper mt-5 pl-2">
						<ChatOnline />
						<ChatOnline />
						<ChatOnline />
					</div>
				</div>
			</div>
		</>
	);
};

export default Messenger;