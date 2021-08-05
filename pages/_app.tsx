import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../style/global.css';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const theme = localStorage.getItem('DARK_MODE');
		theme === 'dark'
			? document.documentElement.setAttribute('data-theme', 'dark')
			: document.documentElement.setAttribute('data-theme', 'light');
	}, []);
	return (
		<>
			<Head>
				<title>Football Results</title>
				<link rel="icon" href="./ball.svg" type="image/svg" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
