import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
// import { bgColors } from '../styles/colors'; // why does it not work?

const style = {
	wrapper: `h-screen max-h-screen h-min-screen w-screen font-sansation bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white select-none flex flex-col`
};

const Home: NextPage = () => {
	return (
		<>
			<Head>
				{/* Title and Icon */}
				<title>Valchy Swap</title>
				<link rel="icon" type="image/x-icon" href="/assets/uniswap.png" />

				{/* Default Meta Tags */}
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="HandheldFriendly" content="True" />
				<meta name="MobileOptimized" content="380" />
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
				<meta name="author" content="Valeri Sabev" />
				<meta name="description" content="Valchy Swap, my first web 3.0 application" />

				{/* Social media integration when sharing */}
				<meta property="og:title" content="Valchy Swap, my first web 3.0 application" />
				<meta property="og:image" content="/assets/uniswap.png" />
				<meta property="og:description" content="Valchy Swap, my first web 3.0 application" />
				<meta name="twitter:title" content="Valeri Sabev | Full Stack Web Developer" />
				<meta name="twitter:image" content="/assets/uniswap.png" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@ValchyGaming" />
				<meta name="twitter:description" content="Valchy Swap, my first web 3.0 application" />
			</Head>

			<div className={style.wrapper}>
				<Header />
			</div>
		</>
	);
};

export default Home;
