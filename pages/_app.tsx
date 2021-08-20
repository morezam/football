import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import ErrorBoundary from '../components/ErrorBoundary';
import { queryClient } from '../lib/queryClient';
import '../style/global.css';
import '../node_modules/react-datepicker/dist/react-datepicker.css';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const theme = localStorage.getItem('DARK_MODE');
		const docEl = document.documentElement;
		theme === 'dark'
			? docEl.setAttribute('data-theme', 'dark')
			: docEl.setAttribute('data-theme', 'light');
	}, []);
	return (
		<>
			<Head>
				<title>Football Results</title>
				<link rel="icon" href="./ball.svg" type="image/svg" />
			</Head>
			<QueryClientProvider client={queryClient}>
				<ErrorBoundary>
					<Component {...pageProps} />
				</ErrorBoundary>
			</QueryClientProvider>
		</>
	);
}
export default MyApp;
