import React, { ReactElement } from 'react';

const Tab = ({
	title,
	children,
}: {
	title: string;
	children: ReactElement;
}) => {
	return <div>{children}</div>;
};

export default Tab;
