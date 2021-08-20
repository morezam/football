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
					className={`${styles.row} ${home && styles.rowHome}`}
					id={`row-${home ? 'h' : 'a'}-${i + 1}`}
					style={{
						gridTemplateColumns: `repeat(${row}, 1fr)`,
						gridColumnGap: 5 - +row + 'rem',
						color: '#fff',
						gridRow: `${rows.length - i}/${rows.length - i + 1}`,
					}}>
					<PlayerRow playerRow={playersObject[i + 1]} />
				</div>
			))}
		</>
	);
};

export default CreateRowsAndPlayers;
