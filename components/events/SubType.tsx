import React, { FC } from 'react';
interface SubProps {
	playerIn: string;
	playerOut: string;
}

const SubType: FC<SubProps> = ({ playerIn, playerOut }) => {
	return (
		<div>
			<p style={{ color: 'green' }}>{playerIn}</p>
			<p style={{ color: 'red' }}>{playerOut}</p>
		</div>
	);
};

export default SubType;
