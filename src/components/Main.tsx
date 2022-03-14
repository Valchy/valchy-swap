import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import Swap from './Swap';
import TransactionHistory from './TransactionHistory';

const style = {
	wrapper: 'mt-14 mx-6 flex justify-center',
	main: 'bg-darkGrey rounded-2xl p-5 w-full md:w-[600px]',
	mainHeader: 'flex justify-between items-center mb-4',
	title: 'text-[17px] block capitalize'
};

const Main = props => {
	return (
		<div className={style.wrapper}>
			<div className={style.main}>
				<div className={style.mainHeader}>
					<h1 className={style.title}>{props.selectedNav}</h1>
					{/* <IoMdSettings size={22} style={{ cursor: 'pointer' }} title="settings icon" /> */}
				</div>
				{props.selectedNav === 'transactions' ? (
					<TransactionHistory selectedNav={props.selectedNav} />
				) : (
					<Swap />
				)}
			</div>
		</div>
	);
};

export default Main;
