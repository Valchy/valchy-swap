import { useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import ethLogo from '../../public/assets/eth.png';
import uniswapLogo from '../../public/assets/uniswap.png';
import { darkGrey, lightGrey } from '../styles/colors';
import Link from 'next/link';

const style = {
	wrapper: 'flex items-center justify-between mt-5 px-4',
	headerLogo: 'flex items-center',
	headerLogoText: 'uppercase text-xl',
	nav: '',
	navItemsContainer: `flex bg-[${darkGrey}] p-1 rounded-2xl`,
	navItem: 'capitalize block py-2 px-3 cursor-pointer',
	activeNavItem: `bg-[${lightGrey}] rounded-2xl`
};

const Header = () => {
	const [selectedNav, setSelectedNav] = useState('swap');

	return (
		<section className={style.wrapper}>
			<Link href="/" passHref>
				<div className={style.headerLogo}>
					<Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
					<span className={style.headerLogoText}>Valchy Swap</span>
				</div>
			</Link>
			<nav className={style.nav}>
				<div className={style.navItemsContainer}>
					{['swap', 'pool', 'vote', 'charts'].map((label, index) => (
						<NavItem label={label} selectedNav={selectedNav} setSelectedNav={setSelectedNav} key={`nav-item-${index}`} />
					))}
				</div>
			</nav>
			<div>Network</div>
		</section>
	);
};

const NavItem = props => (
	<span onClick={() => props.setSelectedNav(props.label)} className={`${style.navItem} ${props.selectedNav === props.label && style.activeNavItem}`}>
		{props.label}
	</span>
);

export default Header;
