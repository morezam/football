import React from 'react';

const NotFound = ({ title }: { title: string }) => {
	return (
		<div
			style={{
				fontSize: '3rem',
				maxWidth: '70rem',
				margin: '0 auto',
				display: 'flex',
				height: '50vh',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			No {title} Found
		</div>
	);
};

export default NotFound;
