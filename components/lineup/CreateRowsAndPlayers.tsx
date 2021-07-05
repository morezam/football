import React from 'react';
import styles from './Lineup.module.css';
import { PlayersObject } from '../../lib/createPlayersObject';
import PlayerRow from './PlayerRow';

interface RowProps {
	rows: string[];
	playersObject: PlayersObject;
	home: boolean;
}

const CreateRowsAndPlayers = ({ rows, playersObject, home }: RowProps) => {
	return (
		<>
			{rows.map((row, i) => (
				<div
					key={i}
					className={styles.row}
					id={`row-${home ? 'h' : 'a'}-${i + 1}`}
					style={{
						gridTemplateRows: `repeat(${row}, 1fr)`,
						color: '#fff',
					}}>
					<PlayerRow playerRow={playersObject[i + 1]} home={home} />
				</div>
			))}
		</>
	);
};

export default CreateRowsAndPlayers;
