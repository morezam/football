import Image from 'next/image';
import styles from './fixture.module.css';
import { Game } from '../../types/gameInterface';
import Back from '../Back';
import Link from 'next/link';

interface GameProps {
	game?: Game;
}

const FixtureDetail = ({ game }: GameProps) => {
	if (!game) {
		return null;
	}
	const gameDate = new Date(game.fixture.date);
	const time = `${gameDate.getHours()} : ${
		gameDate.getMinutes() === 0 ? '00' : gameDate.getMinutes()
	} `;
	return (
		<div className={styles.fixture}>
			<Back>
				<Link href="/">
					<a className={styles.back}>Back</a>
				</Link>
			</Back>
			<div className={styles.teamDet}>
				<Image
					alt={game.teams.home.name}
					src={game.teams.home.logo}
					width={60}
					height={60}
				/>
				<p>{game.teams.home.name}</p>
			</div>
			<div className={styles.result}>
				{game.fixture.status.short === 'NS'
					? time
					: `${game.goals.home} - ${game.goals.away}`}
			</div>
			<div className={styles.teamDet}>
				<Image
					alt={game.teams.away.name}
					src={game.teams.away.logo}
					width={60}
					height={60}
				/>
				<p>{game.teams.away.name}</p>
			</div>
		</div>
	);
};

export default FixtureDetail;
