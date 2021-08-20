import React, { ErrorInfo } from 'react';

interface ErrorState {
	error: Error | null;
	errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component {
	state: ErrorState = { error: null, errorInfo: null };

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
	}

	render() {
		if (this.state.errorInfo) {
			return (
				<div
					style={{
						height: '100vh',
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<h2
						style={{
							maxWidth: '80rem',
							margin: '0 auto',
							textAlign: 'center',
							fontSize: '3rem',
							color: '#FF5555',
						}}>
						Something Went Wrong
						<p>Error : {this.state.error?.message}</p>
					</h2>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
