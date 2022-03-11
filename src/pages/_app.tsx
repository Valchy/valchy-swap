import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/chat-engine.css';
import '../styles/transaction-spinner.css';
import type { AppProps } from 'next/app';
import { TransactionProvider } from '../context/TransactionContext';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function MyApp({ Component, pageProps }: AppProps) {
	// optional configuration
	const alertOptions = {
		// you can also just use 'bottom center'
		position: positions.BOTTOM_RIGHT,
		timeout: 5000,
		offset: '30px',
		// you can also just use 'scale'
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
