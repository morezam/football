import React, { useEffect } from 'react';
import { TeamDetails } from '../../lib/dataInterface';
import { createPlayer } from '../../lib/createPlayer';
import CreateRows from './CreateRows';
import styles from './Lineup.module.css';
import Substitutes from './Substitutes';

const Lineup = ({ home, datas }: { home: boolean; datas: TeamDetails }) => {
	const rows = datas.formation.split('-');
	// add 1 beacuse goalkeaper's position is not in formation
	rows.unshift('1');
	const colors = datas.team.colors;

	useEffect(() => {
		const playersDetail = datas.startXI.map(n => n.player);
		createPlayer(playersDetail, home);
	}, [datas.startXI, home]);

	return (
		<div className={styles.parent}>
			<div
				className={styles.grid}
				style={{
					gridTemplateColumns: `repeat(${rows.length}, 1fr)`,
					transform: `${home ? '' : 'rotate(180deg)'}`,
				}}>
				{CreateRows(rows, colors, home)}
			</div>
			<Substitutes subs={datas.substitutes} />
		</div>
	);
};

export default Lineup;
