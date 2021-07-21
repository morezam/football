import { useEffect, useState } from 'react';
import Image from 'next/image';
import football from '../../api/football';
import styles from './fixture.module.css';
import GameDetails from './GameDetails';
import { Game } from '../../types/gameInterface';
import { favLeagues } from '../../lib/favLeagues';
import { createDateForCalnedar } from '../../lib/createDateForCalnedar';

interface FixturesProps {
	date: Date;
}

const Fixtures = ({ date }: FixturesProps) => {
	const [games, setGames] = useState<Game[]>();

	useEffect(() => {
		const td = createDateForCalnedar(date);
		let mounted = true;
		const req = async () => {
			const res = await football
				.get('/fixtures', {
					params: {
						date: td,
					},
				})
				.then(res => {
					if (mounted) {
						setGames(res.data.response);
					}
				})
				.catch(e => console.log(e));
		};
		req();
		return () => {
			mounted = false;
		};
	}, [date]);
	return (
		<>
			{games &&
				favLeagues(games).map(game => (
					<ul className={styles.parentList} key={game.league.id}>
						<li>
							<div className={styles.title}>
								<Image
									src={game.league.logo}
									alt={game.league.name}
									height={35}
									width={35}
								/>
								<p>{game.league.name}</p>
							</div>
							<div className={styles.games}>
								{game.games.map(match => (
									<GameDetails key={match.fixture.id} game={match} />
								))}
							</div>
						</li>
					</ul>
				))}
		</>
	);
};

export default Fixtures;
