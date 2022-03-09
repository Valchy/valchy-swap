const style = {
	wrapper: 'flex flex-col',
	currencyInput: 'bg-lightGrey w-full outline-none p-4 rounded-2xl mb-3',
	confirmButton:
		'bg-calltoactionBlue w-full cursor-pointer rounded-2xl p-3 hover:bg-accentBlue ease-linear duration-300'
};

const Swap = () => {
	return (
		<div className={style.wrapper}>
			<input placeholder="0.0" className={style.currencyInput}></input>
			<input placeholder="0x..." className={style.currencyInput}></input>
			<button className={style.confirmButton}>Confirm</button>
		</div>
	);
};

export default Swap;
