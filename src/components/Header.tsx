import { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { TiThMenu } from 'react-icons/ti';
import ethLogo from '../../public/assets/eth.png';
import uniswapLogo from '../../public/assets/uniswap.png';
import Link from 'next/link';

const style = {
	wrapper: 'flex items-center justify-between mt-6 px-4 md:px-10 lg:px-20',
	headerLogo: 'flex lg:flex-1 items-center',
	headerLogoText: 'uppercase text-xl hidden md:block',
	nav: 'flex justify-center flex-1 lg:relative absolute bottom-10 lg:bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0',
	navItemsContainer: 'flex bg-darkGrey p-1 rounded-2xl',
	navItem: 'capitalize block py-2 px-3 cursor-pointer flex',
	activeNavItem: `bg-lightGrey rounded-2xl`,
	headerMenu: 'flex flex-1 justify-end items-center',
	headerMenuItemNetwork: 'flex items-center bg-darkGrey py-2 px-3 rounded-2xl ml-2 cursor-pointer',
	headerMenuItemWallet: 'whitespace-nowrap flex bg-darkGrey p-1 rounded-2xl ml-4 cursor-pointer',
	headerMenuItemBurger: 'flex items-center justify-center bg-darkGrey py-2 px-3 rounded-full ml-4 cursor-pointer w-[40px] h-[40px]'
};

const Header = () => {
	const [selectedNav, setSelectedNav] = useState('swap');
	const [userWallet, setUserWallet] = useState('Connect Wallet');

	return (
		<section className={style.wrapper}>
			<Link href="/">
				<a className={style.headerLogo}>
					<Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
					<span className={style.headerLogoText}>Valchy Swap</span>
				</a>
			</Link>
			<nav className={style.nav}>
				<div className={style.navItemsContainer}>
					{['swap', 'chat', 'charts'].map((label, index) => (
						<NavItem label={label} selectedNav={selectedNav} setSelectedNav={setSelectedNav} key={`nav-item-${index}`} />
					))}
				</div>
			</nav>
			<div className={style.headerMenu}>
				<div className={style.headerMenuItemNetwork}>
					<Image src={ethLogo} alt="Ethereum logo" width={20} height={20} layout="fixed" />
					<span className="mx-2">Ethereum</span>
					<AiOutlineDown />
				</div>
				<div className={style.headerMenuItemWallet}>
					<span className="rounded-2xl bg-lightGrey px-2 py-1">{userWallet}</span>
				</div>
				<div className={style.headerMenuItemBurger}>
					<TiThMenu />
				</div>
			</div>
		</section>
	);
};

const NavItem = props => (
	<span onClick={() => props.setSelectedNav(props.label)} className={`${style.navItem} ${props.selectedNav === props.label ? style.activeNavItem : ''}`}>
		{props.label}
		{props.label === 'charts' && <FiArrowUpRight />}
	</span>
);

export default Header;
