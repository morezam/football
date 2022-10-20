import Image from 'next/future/image';
import Link from 'next/link';
import { minutesSinceGameBegan } from '@lib/minutesSinceGameBegan';
import { Game } from '@customTypes/gameInterface';
import styles from './fixture.module.css';

const GameDetails = ({ game }: { game: Game }) => {
	const gameDate = new Date(game.fixture.date);
	const time = `${gameDate.getHours()} : ${
		gameDate.getMinutes() === 0 ? '00' : gameDate.getMinutes()
	} `;

	const minute = minutesSinceGameBegan(
		game.fixture.status.elapsed,
		game.fixture.status.short
	);
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
		<Link href={`/fixture/${game.fixture.id}`}>
			<a className={styles.gameLink}>
				<span
					className={styles.minute}
					style={{ backgroundColor: minute?.color }}>
					{minute?.text}
				</span>
				<div className={styles.team}>
					<Image
						src={game.teams.home.logo}
						alt={game.teams.home.name}
						placeholder="blur"
						blurDataURL="/team-placeholder.webp"
						className={styles.teamImg}
						width={40}
						height={40}
					/>
					<p>{game.teams.home.name}</p>
				</div>
				<p className={styles.time}>{timeOrGoal(game.fixture.status.short)}</p>
				<div className={styles.team}>
					<Image
						src={game.teams.away.logo}
						alt={game.teams.away.name}
						placeholder="blur"
						className={styles.teamImg}
						blurDataURL="/team-placeholder.webp"
						width={40}
						height={40}
					/>
					<p style={{ justifySelf: 'baseline' }}>{game.teams.away.name}</p>
				</div>
			</a>
		</Link>
	);
};

export default GameDetails;
