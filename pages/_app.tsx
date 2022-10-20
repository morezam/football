import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import CustomErrorBoundary from '@components/errorBoundary';
import { queryClient } from '@lib/queryClient';
import '@style/global.css';
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
				<meta
					name="description"
					content="A football result app for seeing live result of football with lineups, events, statistics, head to heads and others."
				/>
			</Head>
			<QueryClientProvider client={queryClient}>
				<CustomErrorBoundary onReset={() => {}}>
					<Component {...pageProps} />
				</CustomErrorBoundary>
			</QueryClientProvider>
		</>
	);
}
export default MyApp;
