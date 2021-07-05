import React, { FC } from 'react';

interface CardProps {
	type: string;
	name: string;
}

const CradType: FC<CardProps> = ({ type, name }) => {
	return <div>{name}</div>;
};

export default CradType;
