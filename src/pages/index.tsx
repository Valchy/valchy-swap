import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import Chat from '../components/Chat';
import PageHead from '../components/Head';
import Header from '../components/Header';
import Main from '../components/Main';
import { TransactionContext } from '../context/TransactionContext';
import { ChatProvider } from '../context/ChatContext.js';

const style = {
	wrapper: `h-screen max-h-screen h-min-screen w-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col`
};

const Home: NextPage = () => {
	const [selectedNav, setSelectedNav] = useState<string>('');
	const { currentAccount } = useContext(TransactionContext);

	useEffect(() => {
		const urlParams = new URL(window.location.href).searchParams;
		const nav = urlParams.get('nav');

		setSelectedNav(nav ? nav : 'swap');
	}, []);

	return (
		<>
			{/* Page head with all the meta tags */}
			<PageHead />

			{/* Body of the application */}
			<div className={style.wrapper}>
				{/* Navigation bar of page */}
				<Header selectedNav={selectedNav} setSelectedNav={setSelectedNav} />

				{/* Main section of app => "sawp" or "Transactions" */}
				{selectedNav && <Main selectedNav={selectedNav} />}

				{/* Real-time chat with logged in meta mask users */}
				{/* {currentAccount && (
					<ChatProvider>
						<Chat />
					</ChatProvider>
				)} */}
			</div>
		</>
	);
};

export default Home;
