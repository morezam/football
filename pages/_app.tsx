import type { AppProps } from 'next/app';
import '../style/global.css';
import '../node_modules/react-datepicker/dist/react-datepicker.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
export default MyApp;
