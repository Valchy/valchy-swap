import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/chat-engine.css';
import '../styles/transaction-spinner.css';
import type { AppProps } from 'next/app';
import { TransactionProvider } from '../context/TransactionContext';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function MyApp({ Component, pageProps }: AppProps) {
	const alertOptions = {
		position: positions.BOTTOM_RIGHT,
		timeout: 3000,
		offset: '30px',
		transition: transitions.SCALE
	};

	return (
		<AlertProvider template={AlertTemplate} {...alertOptions}>
			<TransactionProvider>
				<Component {...pageProps} />
			</TransactionProvider>
		</AlertProvider>
	);
}

export default MyApp;
