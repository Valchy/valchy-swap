import { useState, useEffect, useContext } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ChatContext } from '../context/ChatContext.js';

const ChatEngine = dynamic(() => import('react-chat-engine').then(module => module.ChatEngine));
const MessageFormSocial = dynamic(() =>
	import('react-chat-engine').then(module => module.MessageFormSocial)
);

const style = {
	wrapper: 'mt-14 mx-6 flex justify-center',
	main: 'bg-darkGrey rounded-2xl p-5 w-full md:w-[600px] h-[400px]',
	mainHeader: 'flex justify-between items-center mb-4',
	title: 'text-[17px] block capitalize'
};

const Chat = () => {
	const { username, password } = useContext(ChatContext);
	const [showChat, setShowChat] = useState(false);

	useEffect(() => {
		if (typeof document !== undefined) setShowChat(true);
	}, []);

	return (
		<div className={style.wrapper}>
			<div className={style.main}>
				{/* <div className={style.mainHeader}>
					<h1 className={style.title}>Real-time Chat</h1>
				</div> */}
				{/* {showChat && username.length && password.length && ( */}
				<ChatEngine
					height="100%"
					projectID="77379345-2810-4e0f-abc1-1d2902da253d"
					userName={username}
					userSecret={password}
					renderNewMessageForm={() => <MessageFormSocial />}
					renderChatList={() => {}}
					renderChatSettings={() => {}}
				/>
				{/* )} */}
			</div>
		</div>
	);
};

export default Chat;
