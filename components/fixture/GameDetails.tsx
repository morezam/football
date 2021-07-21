import Image from 'next/image';
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
					<Image
						src={game.teams.home.logo}
						alt={game.teams.home.name}
						width={60}
						height={60}
					/>
					<p>{game.teams.home.name}</p>
				</div>
				<p className={styles.time}>{timeOrGoal(game.fixture.status.short)}</p>
				<div className={styles.team}>
					<Image
						src={game.teams.away.logo}
						alt={game.teams.away.name}
						width={60}
						height={60}
					/>
					<p style={{ justifySelf: 'baseline' }}>{game.teams.away.name}</p>
				</div>
			</a>
		</Link>
	);
};

export default GameDetails;
