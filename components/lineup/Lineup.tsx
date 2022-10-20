import { TeamDetails } from '@customTypes/lineupInterface';
import CreateRowsAndPlayers from './CreateRowsAndPlayers';
import styles from './Lineup.module.css';
import { createPlayersObject } from '@lib/createPlayersObject';
import { useMemo } from 'react';

const Lineup = ({ home, lineup }: { home: boolean; lineup: TeamDetails }) => {
	const rows = lineup.formation.split('-');
	// add 1 because goalkeeper's position is not in formation
	rows.unshift('1');

	const playersDetail = lineup.startXI.map(n => n.player);
	const playersObject = useMemo(
		() => createPlayersObject(playersDetail),
		[playersDetail]
	);
	return (
		<div className={styles.parent}>
			<div
				className={`${styles.grid} ${home && styles.home}`}
				style={{
					gridTemplateRows: `repeat(${rows.length}, 1fr)`,
				}}>
				<CreateRowsAndPlayers
					rows={rows}
					playersObject={playersObject}
					home={home ? true : false}
				/>
				{!home && <div className={styles.centerCircle}></div>}
			</div>
		</div>
	);
};

export default Lineup;
