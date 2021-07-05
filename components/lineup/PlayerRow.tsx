import React from 'react';
import Link from 'next/link';
import { Player } from '../../lib/createPlayersObject';
import styles from './Lineup.module.css';

const PlayerRow = ({
	playerRow,
	home,
}: {
	playerRow: Player[];
	home: boolean;
}) => {
	return (
		<>
			{playerRow.map(player => {
				const row = player.grid?.split(':');
				if (!row) return;
				return (
					<Link key={player.id} href={`/player/${player.id}`}>
						<a
							className={styles.playerContainer}
							style={{
								gridRow: `${+row[1]}/${+row[1] + 1}`,
								transform: `${home ? '' : 'rotate(180deg)'}`,
							}}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={`https://media.api-sports.io/football/players/${player.id}.png`}
								alt={player.name}
								className={styles.playerImg}
							/>
							<p className={styles.playerName}>
								{player.number} {player.name}
							</p>
						</a>
					</Link>
				);
			})}
		</>
	);
};

export default PlayerRow;
