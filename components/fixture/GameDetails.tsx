/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Game } from '../../types/gameInterface';
import styles from './fixture.module.css';

const GameDetails = ({ game }: { game: Game }) => {
	const gameDate = new Date(game.fixture.date);
	const time = `${gameDate.getHours()} : ${
		gameDate.getMinutes() === 0 ? '00' : gameDate.getMinutes()
	} `;

	const timeOrGoal = (status: string) => {
		if (status === 'NS' || status === 'TBD') {
			return time;
		}
		if (status === 'PST') {
			return 'Postponed';
		}
		if (status === 'CANC') {
			return 'Match Cancelled';
		} else {
			return `${game.goals.home} - ${game.goals.away}`;
		}
	};

	return (
		<Link href={'/' + game.fixture.id}>
			<a className={styles.gameLink}>
				<div className={styles.team}>
					<img
						src={game.teams.home.logo}
						alt={game.teams.home.name}
						style={{ height: '60px', width: '60px' }}
					/>
					<p>{game.teams.home.name}</p>
				</div>
				<p className={styles.time}>{timeOrGoal(game.fixture.status.short)}</p>
				<div className={styles.team}>
					<img
						src={game.teams.away.logo}
						alt={game.teams.away.name}
						style={{ height: '60px', width: '60px' }}
					/>
					<p style={{ justifySelf: 'baseline' }}>{game.teams.away.name}</p>
				</div>
			</a>
		</Link>
	);
};

export default GameDetails;
