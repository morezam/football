import React from 'react';
import { TeamDetails } from '../../types/lineupInterface';
import CreateRowsAndPlayers from './CreateRowsAndPlayers';
import styles from './Lineup.module.css';
import Substitutes from './Substitutes';
import { createPlayersObject } from '../../lib/createPlayersObject';

const Lineup = ({ home, datas }: { home: boolean; datas: TeamDetails }) => {
	const rows = datas.formation.split('-');
	// add 1 beacuse goalkeaper's position is not in formation
	rows.unshift('1');

	const playersDetail = datas.startXI.map(n => n.player);
	const playersObject = createPlayersObject(playersDetail);
	return (
		<div className={styles.parent}>
			<div
				className={styles.grid}
				style={{
					gridTemplateColumns: `repeat(${rows.length}, 1fr)`,
					transform: `${home ? '' : 'rotate(180deg)'}`,
				}}>
				<CreateRowsAndPlayers
					rows={rows}
					playersObject={playersObject}
					home={home ? true : false}
				/>
			</div>
			<Substitutes subs={datas.substitutes} />
		</div>
	);
};

export default Lineup;
