import { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { TiThMenu } from 'react-icons/ti';
import ethLogo from '../../public/assets/eth.png';
import uniswapLogo from '../../public/assets/uniswap.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style = {
	wrapper: 'flex items-center justify-between mt-6 px-4 md:px-6 lg:px-10',
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

const connectWallte = () => {};

const Header = props => {
	const [userWallet, setUserWallet] = useState<string>('Connect Wallet');

	return (
		<section className={style.wrapper}>
			<Link href="/">
				<a className={style.headerLogo}>
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
						<a target="_blank" className={style.navItem}>
							Charts <FiArrowUpRight />
						</a>
					</Link>
				</div>
			</nav>
			<div className={style.headerMenu}>
				<div className={style.headerMenuItemNetwork}>
					<Image
						src={ethLogo}
						alt="Ethereum logo"
						width={20}
						height={20}
						layout="fixed"
					/>
					<span className="ml-2 hidden sm:block">Ethereum</span>
					<AiOutlineDown className="ml-2" />
				</div>
				<div className={style.headerMenuItemWallet} onClick={connectWallte}>
					<span className="rounded-2xl px-2 py-1 duration-200 ease-linear hover:bg-lightGrey">
						{userWallet}
					</span>
				</div>
				<div className={style.headerMenuItemBurger}>
					<TiThMenu />
				</div>
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
