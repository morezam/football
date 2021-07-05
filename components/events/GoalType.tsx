import React, { FC } from 'react';

interface GoalProps {
	type: string;
	name: string;
	assist: string;
}

const GoalType: FC<GoalProps> = ({ type, name, assist }) => {
	return (
		<div>
			GOAL
			<p>{name}</p>
			<span>{assist ? assist : ''}</span>
		</div>
	);
};

export default GoalType;
