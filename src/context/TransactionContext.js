import { useState, useEffect, createContext } from 'react';
import { contractABI, contractAddress } from '../../lib/constants';
import { ethers } from 'ethers';

const alertNeedForMetamaskInstallation = () =>
	window.alert('Please install the metamask browser extension');

export const TransactionContext = createContext();

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

	return transactionContract;
};

export const TransactionProvider = ({ children }) => {
	const [currentAccount, setCurrentAccount] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		addressTo: '',
		amount: ''
	});

	// On load function
	useEffect(() => {
		// Detect Metamask account change
		if (typeof window !== 'undefined') {
			if (window.ethereum) {
				window.ethereum.on('accountsChanged', accounts => setCurrentAccount(accounts[0]));
			}
		}

		// Try connecting to wallet
		checkIfWalletIsConnected();
	}, []);

	// Prompts metamask wallet login
	const connectWallet = async (metamask = window.ethereum) => {
		try {
			if (!metamask) return alertNeedForMetamaskInstallation();

			// Copy address to clip board if already connected
			if (currentAccount) {
				if (!navigator.clipboard) fallbackCopyTextToClipboard(currentAccount);
				else navigator.clipboard.writeText(currentAccount);

				return window.alert('Address copied to clipboard');
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
				return window.alert('Error! Cannot transfer to the same address');

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

			setIsLoading(true);
			await transactionHash.wait();

			// DB
			// await saveTransaction(transactionHash.hash, amount, currentAccount, addressTo);
			setIsLoading(false);
		} catch (err) {
			console.error(err);
			window.alert('Error! Transactionn not sent');
		}
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
			return window.alert('Error! Missing input fields');
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
				isLoading,
				handleChange,
				handleSubmit
			}}
		>
			{children}
		</TransactionContext.Provider>
	);
};
