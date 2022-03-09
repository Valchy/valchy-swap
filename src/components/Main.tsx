import React from 'react';
import Swap from './Swap';
import Transactions from './Transactions';

const style = {
	wrapper: 'mt-14 mx-6 flex justify-center',
	main: 'bg-darkGrey rounded-2xl p-5 w-full md:w-[600px]',
	title: 'text-[17px] block mb-4 capitalize'
};

const Main = props => {
	return (
		<div className={style.wrapper}>
			<div className={style.main}>
				<h1 className={style.title}>{props.selectedNav}</h1>
				{props.selectedNav === 'swap' ? <Swap /> : <Transactions />}
			</div>
		</div>
	);
};

export default Main;
