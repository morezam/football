import { ErrorBoundary } from 'react-error-boundary';
import Styles from './style.module.css';

// interface ErrorFallbackArgs {
// 	error: Error;
// 	resetErrorBoundary: () => {};
// }

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div role="alert" className={Styles.error}>
			<h2>Something Went Wrong</h2>
			<p>Error : {error.message}</p>
			<button aria-label="Try Again" onClick={resetErrorBoundary}>
				Try again
			</button>
		</div>
	);
}

// interface CustomErrorBoundaryProps {
// 	onReset: () => {};
// 	children: React.ReactNode[];
// }

const CustomErrorBoundary = ({ onReset, children }) => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
			{children}
		</ErrorBoundary>
	);
};

export default CustomErrorBoundary;
