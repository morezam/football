import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
							className={`${styles.playerContainer} `}
							style={{
								gridColumn: `${+row[1]}/${+row[1] + 1}`,
								gridRow: '1/2',
							}}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<Image
								src={`https://media.api-sports.io/football/players/${player.id}.png`}
								alt={player.name}
								className={styles.playerImg}
								width={40}
								height={40}
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
