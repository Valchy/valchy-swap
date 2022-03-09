import React from 'react';

const style = {
	wrapper: 'mt-14 mx-6 flex justify-center',
	main: 'bg-darkGrey rounded-2xl p-5 w-full md:w-[600px]'
};

const Chat = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.main}>Real-time Chat</div>
		</div>
	);
};

export default Chat;
