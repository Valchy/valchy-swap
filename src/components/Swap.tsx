import Image from 'next/image';
import { AiOutlineDown } from 'react-icons/ai';
import ethLogo from '../../public/assets/eth.png';
import bnbLogo from '../../public/assets/bnb.png';
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { useAlert } from 'react-alert';

const style = {
	wrapper: 'flex flex-col',
	inputsWrapper:
		'flex justify-between bg-lightGrey w-full outline-none px-4 py-6 sm:py-4 rounded-2xl mb-3',
	currencyInput: 'bg-lightGrey w-[80%] outline-none mr-4 text-lg',
	currencyBtn: 'flex items-center bg-darkGrey rounded-2xl p-2 min-w-[100px] cursor-pointer',
	confirmButton:
		'bg-calltoactionBlue w-full cursor-pointer rounded-2xl p-3 hover:bg-accentBlue ease-linear duration-300'
};

const Swap = () => {
	const { formData, handleChange, handleSubmit, accountBalance } = useContext(TransactionContext);

	return (
		<form onSubmit={handleSubmit} className={style.wrapper}>
			{[
				{ name: 'amount', logo: ethLogo, abbreviation: 'ETH', placeholder: '0.0' },
				{ name: 'addressTo', logo: bnbLogo, abbreviation: '', placeholder: '0x...' }
			].map(props => (
				<SwapInput
					{...props}
					handleChange={handleChange}
					formData={formData}
					accountBalance={accountBalance}
					key={`swap-input-${props.abbreviation}`}
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
			<div className="flex flex-col">
				<input
					onChange={e => props.handleChange(e, props.name)}
					value={props.formData[props.name]}
					placeholder={props.placeholder}
					className={style.currencyInput}
					style={!props.abbreviation ? { width: '100%' } : {}}
				></input>
				{props.abbreviation && (
					<span>
						Balance: <span className="text-slate-400">{props.accountBalance}</span>
					</span>
				)}
			</div>
			{props.abbreviation && (
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
					<span className="mx-2">{props.abbreviation}</span>
					<AiOutlineDown title="arrow down" />
				</div>
			)}
		</div>
	);
};

export default Swap;
