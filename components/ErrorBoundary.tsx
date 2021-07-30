import React, { ErrorInfo } from 'react';

class ErrorBoundary extends React.Component {
	state = { error: null, errorInfo: null };

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
	}

	render() {
		if (this.state.errorInfo) {
			return <h2>Something went wrong.</h2>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
