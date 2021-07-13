import React from 'react';
import Image from 'next/image';
import PlayerProfile from './PlayerProfile';
import PlayerStat from './PlayerStat';
import styles from './player.module.css';
import { PlayerStats } from '../../types/playerStat';

const Player = ({ playerDetail }: { playerDetail?: PlayerStats }) => {
	console.log(playerDetail);
	if (!playerDetail) {
		return <p>Loading...</p>;
	}
	return (
		<div className={styles.parent}>
			<div className={styles.detail}>
				<h2 className={styles.name}>
					{playerDetail.player.firstname} {playerDetail.player.lastname}
				</h2>
				<Image
					src={playerDetail.player.photo}
					alt={playerDetail.player.name}
					height={150}
					width={150}
					className={styles.img}
				/>
			</div>
			<div className={styles.grid}>
				<PlayerProfile
					label="Team"
					value={playerDetail.statistics[0].team.name}
				/>
				<PlayerProfile
					label="Country"
					value={playerDetail.player.nationality}
				/>
				<PlayerProfile label="Height" value={playerDetail.player.height} />
				<PlayerProfile label="Weight" value={playerDetail.player.weight} />
				<PlayerProfile label="Age" value={playerDetail.player.age} />
				<PlayerProfile
					label="Birth Date"
					value={playerDetail.player.birth.date}
				/>
			</div>
			<div>
				{playerDetail.statistics.map(stat => (
					<details key={+stat.team.id + stat.games.minutes}>
						<summary className={styles.summary}>
							{stat.team.name}: {stat.league.name} - {stat.league.season}/
							{+stat.league.season + 1}
						</summary>
						<div className={styles.profile}>
							<PlayerStat label="Appearences" stat={stat.games.appearences} />
							<PlayerStat label="Fixed" stat={stat.games.lineups} />
							<PlayerStat label="Goals" stat={stat.goals.total} />
							<PlayerStat label="Assists" stat={stat.goals.assists} />
							<PlayerStat label="Yellow Cards" stat={stat.cards.yellow} />
							<PlayerStat label="Red Cards" stat={stat.cards.red} />
							<PlayerStat label="Minutes Played" stat={stat.games.minutes} />
							<PlayerStat label="Total Shots" stat={stat.shots.total} />
							<PlayerStat label="Shots On Target" stat={stat.shots.on} />
							<PlayerStat label="Total Passes" stat={stat.passes.total} />
							<PlayerStat label="Key Passes" stat={stat.passes.key} />
							<PlayerStat label="Tackles" stat={stat.tackles.total} />
							<PlayerStat
								label="Interceptions"
								stat={stat.tackles.interceptions}
							/>
							<PlayerStat label="Total Duels" stat={stat.duels.total} />
							<PlayerStat label="Duels Won" stat={stat.duels.won} />
							<PlayerStat
								label="Dribbles Attempted"
								stat={stat.dribbles.attempts}
							/>
							<PlayerStat
								label="Dribbles Succeeded"
								stat={stat.dribbles.success}
							/>
						</div>
					</details>
				))}
			</div>
		</div>
	);
};

export default Player;
