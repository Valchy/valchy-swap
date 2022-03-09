import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Chat from '../components/Chat';
import PageHead from '../components/Head';
import Header from '../components/Header';
import Main from '../components/Main';

const style = {
	wrapper: `h-screen max-h-screen h-min-screen w-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white select-none flex flex-col`
};

const Home: NextPage = () => {
	const router = useRouter();
	const [selectedNav, setSelectedNav] = useState<string>('swap');

	useEffect(() => {
		console.log(router.query);
		if (router.query.nav) setSelectedNav(router.query.nav);
	}, [router.query.counter]);

	return (
		<>
			{/* Page head with all the meta tags */}
			<PageHead />

			{/* Body of the application */}
			<div className={style.wrapper}>
				{/* Navigation bar of page */}
				<Header selectedNav={selectedNav} setSelectedNav={setSelectedNav} />

				{/* Main section of app => "sawp" or "Transactions" */}
				<Main selectedNav={selectedNav} />

				{/* Real-time chat with logged in meta mask users */}
				<Chat />
			</div>
		</>
	);
};

export default Home;
