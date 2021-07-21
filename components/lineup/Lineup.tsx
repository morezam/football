import { TeamDetails } from '../../types/lineupInterface';
import CreateRowsAndPlayers from './CreateRowsAndPlayers';
import styles from './Lineup.module.css';
import { createPlayersObject } from '../../lib/createPlayersObject';

const Lineup = ({ home, datas }: { home: boolean; datas?: TeamDetails }) => {
	if (!datas) {
		return null;
	}
	const rows = datas.formation.split('-');
	// add 1 beacuse goalkeaper's position is not in formation
	rows.unshift('1');

	const playersDetail = datas.startXI.map(n => n.player);
	const playersObject = createPlayersObject(playersDetail);
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
				<div
					className={styles.penaltyArea}
					style={{ top: `${rows.length * 10}rem` }}></div>
				{!home && <div className={styles.centerCircle}></div>}
			</div>
		</div>
	);
};

export default Lineup;
