import { useState, useEffect, useContext, createContext } from 'react';
import { TransactionContext } from './TransactionContext';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const { currentAccount } = useContext(TransactionContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	// useEffect(() => {
	// 	setPassword(currentAccount);
	// }, [currentAccount]);

	return (
		<ChatContext.Provider
			value={{
				username,
				setUsername,
				password,
				setPassword
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};
