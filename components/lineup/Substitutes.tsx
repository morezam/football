import React, { FC } from 'react';
import { Player } from '../../lib/dataInterface';

interface SubProps {
	subs: {
		player: Player;
	}[];
}

const Substitutes: FC<SubProps> = ({ subs }) => {
	return (
		<div>
			{subs.map(sub => (
				<li key={sub.player.id}>
					{sub.player.number} {sub.player.name}
				</li>
			))}
		</div>
	);
};

export default Substitutes;
