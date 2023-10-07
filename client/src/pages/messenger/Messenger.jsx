import TopBar from "../../components/topbar/TopBar";
import Covnersation from "../../components/conversations/Coversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

const Messenger = () => {
	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");
	const { user } = useContext(AuthContext);
	const scrollRef = useRef();

	useEffect(() => {
		const getConversations = async () => {
			try {
				const res = await axios.get("/api/conversations/" + user._id);
				setConversations(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getConversations();
	}, [user._id]);

	useEffect(() => {
		const getMessages = async () => {
			try {
				const res = await axios.get(
					"/api/messages/" + currentChat?._id
				);
				setMessages(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getMessages();
	}, [currentChat]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const message = {
			sender: user._id,
			text: newMessage,
			conversationId: currentChat._id,
		};

		try {
			const res = await axios.post("/api/messages", message);
			setMessages([...messages, res.data]);
			setNewMessage("");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(()=>{
		scrollRef.current?.scrollIntoView({behavior:"smooth"})
	},[messages])
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
						{conversations.map((c) => (
							<div key={c._id} onClick={() => setCurrentChat(c)}>
								<Covnersation
									conversation={c}
									currentUser={user}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="chatBox  basis-6/12">
					<div className="chatBoxWrapper flex flex-col h-full relative">
						{currentChat ? (
							<>
								<div className="chatBoxTop overflow-y-scroll pr-2.5">
									{messages.map((m) => (
										<div key={m._id} ref={scrollRef}>
											<Message
												message={m}
												own={m.sender === user._id}
											/>
										</div>
									))}
								</div>
								<div className="chatBoxBottom my-2 flex items-center justify-between">
									<textarea
										placeholder="Write something..."
										className="chatMessageInput w-4/5 p-2.5 h-24 focus:outline-none"
										onChange={(e) =>
											setNewMessage(e.target.value)
										}
										value={newMessage}
									></textarea>
									<button
										className="chatSubmitButton w-16 h-10 border-none rounded cursor-pointer text-white bg-blue-500"
										onClick={handleSubmit}
									>
										Send
									</button>
								</div>
							</>
						) : (
							<span className="noConversationText absolute top-20 text-4xl cursor-default text-gray-400">
								Open a conversation to start a chat.
							</span>
						)}
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
