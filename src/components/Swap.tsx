import Image from 'next/image';
import { AiOutlineDown } from 'react-icons/ai';
import ethLogo from '../../public/assets/eth.png';
import bnbLogo from '../../public/assets/bnb.png';
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { useAlert } from 'react-alert';

const style = {
	wrapper: 'flex flex-col',
	inputsWrapper: 'flex bg-lightGrey w-full outline-none px-4 py-6 sm:py-4 rounded-2xl mb-3',
	currencyInput: 'bg-lightGrey w-[80%] outline-none mr-4 text-lg',
	currencyBtn: 'flex items-center bg-darkGrey rounded-2xl p-2 min-w-[100px] cursor-pointer',
	confirmButton:
		'bg-calltoactionBlue w-full cursor-pointer rounded-2xl p-3 hover:bg-accentBlue ease-linear duration-300',
	swapCurrenciedBtn: 'absolute left-1/2 -translate-x-1/2 -mt-[16px]'
};

const Swap = () => {
	const { formData, handleChange, handleSubmit } = useContext(TransactionContext);

	return (
		<form onSubmit={handleSubmit} className={style.wrapper}>
			{[
				{ name: 'amount', logo: ethLogo, abbriviation: 'ETH', placeholder: '0.0' },
				{ name: 'addressTo', logo: bnbLogo, abbriviation: '', placeholder: '0x...' }
			].map(props => (
				<SwapInput
					{...props}
					handleChange={handleChange}
					formData={formData}
					key={`swap-input-${props.abbriviation}`}
				/>
			))}
			<button type="submit" className={style.confirmButton}>
				Confirm
			</button>
		</form>
	);
};

const SwapInput = props => {
	const alert = useAlert();

	return (
		<div className={style.inputsWrapper}>
			<input
				onChange={e => props.handleChange(e, props.name)}
				value={props.formData[props.name]}
				placeholder={props.placeholder}
				className={style.currencyInput}
			></input>
			{props.abbriviation && (
				<div
					className={style.currencyBtn}
					onClick={() => alert.show('Sorry, only ETH is available')}
				>
					<Image
						src={props.logo}
						alt="Ethereum logo"
						width={20}
						height={20}
						layout="fixed"
					/>
					<span className="mx-2">{props.abbriviation}</span>
					<AiOutlineDown title="arrow down" />
				</div>
			)}
		</div>
	);
};

export default Swap;
