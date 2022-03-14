import { useEffect, useState } from 'react';
import { client } from '../../lib/sanityClient';
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import Image from 'next/image';
import ethLogo from '../../public/assets/ethCurrency.png';
import { FiArrowUpRight } from 'react-icons/fi';

const style = {
	wrapper: `h-full text-white select-none h-full flex-1 flex flex-col items-end`,
	txHistoryItem: `bg-[#191a1e] rounded-lg px-4 py-2 my-2 flex items-center justify-end`,
	txDetails: `flex items-center`,
	toAddress: `text-[#f48706] mx-2`,
	txTimestamp: `mx-2`,
	etherscanLink: `flex items-center text-[#2172e5]`
};

const TransactionHistory = () => {
	const { isLoading, currentAccount } = useContext(TransactionContext);
	const [transactionHistory, setTransactionHistory] = useState<any[]>([]);

	useEffect(() => {
		(async () => {
			if (!isLoading && currentAccount) {
				const query = `
					*[_type=="users"] {
						"transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)
					}
				`;

				// Get all transactions
				const transactionListsData = await client.fetch(query);
				const txList = [];

				// Massage data into on array with all the transactions
				transactionListsData.forEach(({ transactionList }) => {
					if (transactionList) {
						transactionList.forEach(tx => txList.push(tx));
					}
				});

				setTransactionHistory(txList);
			}
		})();
	}, [isLoading, currentAccount]);

	return (
		<div className={style.wrapper}>
			<div>
				{transactionHistory ? (
					transactionHistory?.map((transaction, index) => (
						<div className={style.txHistoryItem} key={`transaction-item-${index}`}>
							<div className={style.txDetails}>
								<Image src={ethLogo} height={20} width={15} alt="eth" />
								{transaction.amount} Ξ sent to{' '}
								<span className={style.toAddress}>
									{transaction.toAddress.substring(0, 6)}...
								</span>
							</div>{' '}
							on{' '}
							<div className={style.txTimestamp}>
								{new Date(transaction.timestamp).toLocaleString('en-US', {
									timeZone: 'PST',
									hour12: true,
									timeStyle: 'short',
									dateStyle: 'long'
								})}
							</div>
							<div className={style.etherscanLink}>
								<a
									href={`https://rinkeby.etherscan.io/tx/${transaction.txHash}`}
									target="_blank"
									rel="noreferrer"
									className={style.etherscanLink}
								>
									View on Etherscan
									<FiArrowUpRight />
								</a>
							</div>
						</div>
					))
				) : (
					<div className="text-center">No transactions...</div>
				)}
			</div>
		</div>
	);
};

export default TransactionHistory;
