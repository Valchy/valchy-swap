import { useState, useEffect, createContext } from 'react';
import { contractABI, contractAddress } from '../../lib/constants';
import { ethers } from 'ethers';
import { client } from '../../lib/sanityClient';
import { useAlert } from 'react-alert';

const alertNeedForMetamaskInstallation = () => {
	const alert = useAlert();
	alert.show('Please install the metamask browser extension');
};

export const TransactionContext = createContext();

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

	return transactionContract;
};

export const TransactionProvider = ({ children }) => {
	const [currentAccount, setCurrentAccount] = useState();
	const [accountBalance, setAccountBalance] = useState(0);
	const [isTransactionProcessing, setIsTransactionProcessing] = useState(false);
	const alert = useAlert();
	const [formData, setFormData] = useState({
		addressTo: '',
		amount: ''
	});

	// On load function
	useEffect(() => {
		// Detect Metamask account change
		if (typeof window.ethereum !== 'undefined') {
			if (window.ethereum) {
				window.ethereum.on('accountsChanged', accounts => setCurrentAccount(accounts[0]));
			}
		}

		// Try connecting to wallet
		checkIfWalletIsConnected();
	}, []);

	// Create user profile sanity
	useEffect(() => {
		if (!currentAccount) return;

		(async () => {
			const userDoc = {
				_type: 'users',
				_id: currentAccount,
				userName: 'Unnamed',
				address: currentAccount
			};

			await client.createIfNotExists(userDoc);

			if (typeof window.ethereum !== 'undefined' && currentAccount) {
				setAccountBalance(window.ethereum.getBalance(currentAccount));
			}
		})();
	}, [currentAccount]);

	// Prompts metamask wallet login
	const connectWallet = async (metamask = window.ethereum) => {
		try {
			if (!metamask) return alertNeedForMetamaskInstallation();

			// Copy address to clip board if already connected
			if (currentAccount) {
				if (!navigator.clipboard) fallbackCopyTextToClipboard(currentAccount);
				else navigator.clipboard.writeText(currentAccount);

				return alert.show('Address copied to clipboard');
			}

			const accounts = await metamask.request({ method: 'eth_requestAccounts' });

			if (accounts.length > 0) {
				setCurrentAccount(accounts[0]);
			}
		} catch (err) {
			console.error(err);
		}
	};

	// Checks if user is already logged in with metamask account
	const checkIfWalletIsConnected = async (metamask = window.ethereum) => {
		try {
			const accounts = await metamask.request({ method: 'eth_accounts' });

			if (accounts.length) {
				setCurrentAccount(accounts[0]);
			}
		} catch (ерр) {
			console.error(ерр);
		}
	};

	// Send transaction from .env wallet to given address
	const sendTransaction = async (metamask = window.ethereum) => {
		try {
			if (!metamask) return alertNeedForMetamaskInstallation();

			const { addressTo, amount } = formData;
			const transactionContract = getEthereumContract();

			// Error handling
			if (addressTo === currentAccount)
				return alert.show('Error! Cannot transfer to the same address');

			const parsedAmount = ethers.utils.parseEther(amount);

			await metamask.request({
				method: 'eth_sendTransaction',
				params: [
					{
						from: currentAccount,
						to: addressTo,
						gas: '0x7EF40', // 520 000 in HEX Gewi => $1.23 (March 10th 2022)
						value: parsedAmount._hex // turn eth value into HEX
					}
				]
			});

			const transactionHash = await transactionContract.publishTransaction(
				addressTo,
				parsedAmount,
				`Transferring ETH ${parsedAmount} to ${addressTo}`,
				'TRANSFER'
			);

			setIsTransactionProcessing(true);
			await transactionHash.wait();

			// DB save transaction as blockchain databases are super slow
			await saveTransaction(transactionHash.hash, amount, currentAccount, addressTo);
			setIsTransactionProcessing(false);
			alert.show('Successful Transaction!');
		} catch (err) {
			console.error(err);
			alert.show('Error! Transactionn not sent');
			setIsTransactionProcessing(false);
		}
	};

	// Save transaction in sanity DB
	const saveTransaction = async (transactionHash, amount, fromAddress, toAddress) => {
		const transactionDoc = {
			_type: 'transactions',
			_id: transactionHash,
			fromAddress: fromAddress,
			toAddress: toAddress,
			timestamp: new Date(Date.now()).toISOString(),
			txHash: transactionHash,
			amount: parseFloat(amount)
		};

		// Save data to sanity DB
		await client.createIfNotExists(transactionDoc);
		await client
			.patch(currentAccount)
			.setIfMissing({ transactions: [] })
			.insert('after', 'transactions[-1]', [
				{
					_key: transactionHash,
					_ref: transactionHash,
					_type: 'reference'
				}
			])
			.commit();

		return;
	};

	// Handle input chnage
	const handleChange = (e, name) => {
		setFormData(prevState => ({ ...prevState, [name]: e.target.value }));
	};

	// Handle form submit "confirm" button
	const handleSubmit = e => {
		const { addressTo, amount } = formData;
		e.preventDefault();

		// Error handling
		if (!addressTo || !amount) {
			console.log(`Address to: ${addressTo}`, `Ammount: ${amount}`);
			return alert.show('Error! Missing input fields');
		}

		sendTransaction();
	};

	// State manager
	return (
		<TransactionContext.Provider
			value={{
				formData,
				currentAccount,
				connectWallet,
				isTransactionProcessing,
				handleChange,
				handleSubmit,
				accountBalance
			}}
		>
			{children}
		</TransactionContext.Provider>
	);
};
