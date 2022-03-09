import Image from 'next/image';
import { AiOutlineDown } from 'react-icons/ai';
import ethLogo from '../../public/assets/eth.png';
import bnbLogo from '../../public/assets/bnb.png';

const style = {
	wrapper: 'flex flex-col',
	inputsWrapper: 'flex bg-lightGrey w-full outline-none px-4 py-6 sm:py-4 rounded-2xl mb-3',
	currencyInput: 'bg-lightGrey w-[80%] outline-none mr-4 text-lg',
	currencyBtn: 'flex items-center bg-darkGrey rounded-2xl p-2 min-w-[100px]',
	confirmButton:
		'bg-calltoactionBlue w-full cursor-pointer rounded-2xl p-3 hover:bg-accentBlue ease-linear duration-300',
	swapCurrenciedBtn: 'absolute left-1/2 -translate-x-1/2 -mt-[16px]'
};

const Swap = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.inputsWrapper}>
				<input placeholder="0.0" className={style.currencyInput}></input>
				<div className={style.currencyBtn}>
					<Image
						src={ethLogo}
						alt="Ethereum logo"
						width={20}
						height={20}
						layout="fixed"
					/>
					<span className="mx-2">ETH</span>
					<AiOutlineDown />
				</div>
			</div>
			<div className={style.inputsWrapper}>
				<input placeholder="0x..." className={style.currencyInput}></input>
				<div className={style.currencyBtn}>
					<Image
						src={bnbLogo}
						alt="Ethereum logo"
						width={20}
						height={20}
						layout="fixed"
					/>
					<span className="mx-2">BNB</span>
					<AiOutlineDown />
				</div>
			</div>
			<button className={style.confirmButton}>Confirm</button>
		</div>
	);
};

export default Swap;
