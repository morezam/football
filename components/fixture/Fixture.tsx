/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import styles from './fixture.module.css';
import { Game } from '../../types/gameInterface';

interface GameProps {
	game?: Game;
}

const FixtureDetail: FC<GameProps> = ({ game }) => {
	if (!game) {
		return null;
	}
	const gameDate = new Date(game.fixture.date);
	const time = `${gameDate.getHours()} : ${
		gameDate.getMinutes() === 0 ? '00' : gameDate.getMinutes()
	} `;
	return (
		<div className={styles.fixture}>
			<div className={styles.teamDet}>
				<img
					alt={game.teams.home.name}
					src={game.teams.home.logo}
					className={styles.teamImg}
				/>
				{game.teams.home.name}
			</div>
			<div className={styles.result}>
				{game.fixture.status.short === 'NS'
					? time
					: `${game.goals.home} - ${game.goals.away}`}
			</div>
			<div className={styles.teamDet}>
				<img
					alt={game.teams.away.name}
					src={game.teams.away.logo}
					className={styles.teamImg}
				/>

				{game.teams.away.name}
			</div>
		</div>
	);
};

export default FixtureDetail;
