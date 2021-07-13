import React from 'react';
import { TeamDetails } from '../../types/lineupInterface';
import CreateRowsAndPlayers from './CreateRowsAndPlayers';
import styles from './Lineup.module.css';
import Substitutes from './Substitutes';
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
		<div className={styles.parent} style={{ width: `${rows.length * 14}rem` }}>
			<div
				className={`${styles.grid} ${home ? styles.home : styles.away}`}
				style={{
					gridTemplateColumns: `repeat(${rows.length}, max-content)`,
				}}>
				<CreateRowsAndPlayers
					rows={rows}
					playersObject={playersObject}
					home={home ? true : false}
				/>
				<div
					className={styles.kir}
					style={{ right: `${rows.length * 12.2}rem` }}></div>
			</div>
		</div>
	);
};

export default Lineup;
