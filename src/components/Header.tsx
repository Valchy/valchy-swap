import { useContext, useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';
import ethLogo from '../../public/assets/eth.png';
import uniswapLogo from '../../public/assets/uniswap.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TransactionContext } from '../context/TransactionContext';
import { useAlert } from 'react-alert';

const style = {
	wrapper: 'select-none flex items-center justify-between mt-6 px-4 md:px-6 lg:px-10',
	headerLogo: 'flex lg:flex-1 items-center group',
	headerLogoText: 'uppercase text-xl hidden sm:block',
	nav: 'flex justify-center flex-1 lg:relative absolute bottom-10 lg:bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0',
	navItemsContainer: 'flex bg-darkGrey p-1 rounded-2xl',
	navItem:
		'capitalize block py-2 px-3 cursor-pointer flex hover:text-slate-300 ease-linear duration-200',
	activeNavItem: `bg-lightGrey rounded-2xl !text-white`,
	headerMenu: 'flex flex-1 justify-end items-center',
	headerMenuItemNetwork:
		'flex items-center bg-darkGrey py-2 px-3 rounded-2xl ml-2 cursor-pointer',
	headerMenuItemWallet: 'whitespace-nowrap flex bg-darkGrey p-1 rounded-2xl ml-4 cursor-pointer',
	headerMenuItemBurger:
		'flex items-center justify-center bg-darkGrey py-2 px-3 rounded-full ml-4 cursor-pointer w-[40px] h-[40px]'
};

const Header = props => {
	const { connectWallet, currentAccount } = useContext(TransactionContext);
	const alert = useAlert();

	return (
		<section className={style.wrapper}>
			<Link href="/">
				<a className={style.headerLogo} onClick={() => props.setSelectedNav('swap')}>
					<Image
						src={uniswapLogo}
						alt="uniswap"
						height={40}
						width={40}
						className="duration-[400ms] ease-linear group-hover:-rotate-[8deg]"
					/>
					<span className={style.headerLogoText}>Valchy Swap</span>
				</a>
			</Link>
			<nav className={style.nav}>
				<div className={style.navItemsContainer}>
					{['swap', 'transactions'].map((label, index) => (
						<NavItem
							label={label}
							selectedNav={props.selectedNav}
							setSelectedNav={props.setSelectedNav}
							key={`nav-item-${index}`}
						/>
					))}
					<Link href="https://valerisabev.com">
						<a id="test-id-about-me" target="_blank" className={style.navItem}>
							About me <FiArrowUpRight title="link arrow" />
						</a>
					</Link>
				</div>
			</nav>
			<div className={style.headerMenu}>
				<div
					className={style.headerMenuItemNetwork}
					onClick={() => alert.show('Sorry, only Ethereum is available')}
				>
					<Image
						src={ethLogo}
						alt="Ethereum logo"
						width={20}
						height={20}
						layout="fixed"
					/>
					<span className="ml-2 hidden sm:block">Ethereum</span>
					<AiOutlineDown className="ml-2" title="arrow down" />
				</div>
				<div className={style.headerMenuItemWallet} onClick={() => connectWallet()}>
					<span className="rounded-2xl px-2 py-1 duration-200 ease-linear hover:bg-lightGrey">
						{currentAccount
							? `${currentAccount.substr(0, 6)}...${currentAccount.substr(
									currentAccount.length - 5,
									currentAccount.length
							  )}`
							: 'Connect Wallet'}
					</span>
				</div>
				{/* <div className={style.headerMenuItemBurger}>
					<TiThMenu title="burger menu icon" />
				</div> */}
			</div>
		</section>
	);
};

const NavItem = props => {
	const router = useRouter();
	const navClickHandler = () => {
		props.setSelectedNav(props.label);
		router.push(`/?nav=${props.label}`, undefined, { shallow: true });
	};

	return (
		<span
			id={`nav-test-id-${props.label}`}
			onClick={navClickHandler}
			className={`${style.navItem} ${
				props.selectedNav === props.label ? style.activeNavItem : ''
			}`}
		>
			{props.label}
		</span>
	);
};

export default Header;
