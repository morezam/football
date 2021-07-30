import { useEffect, useState } from 'react';
import Image from 'next/image';
import football from '../../api/football';
import styles from './fixture.module.css';
import GameDetails from './GameDetails';
import { Game } from '../../types/gameInterface';
import { favLeagues } from '../../lib/favLeagues';
import { createDateForCalnedar } from '../../lib/createDateForCalnedar';
import NotFound from '../NotFound';
import Spinner from '../Spinner';

interface FixturesProps {
	date: Date;
}

const Fixtures = ({ date }: FixturesProps) => {
	const [games, setGames] = useState<Game[]>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
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
						setLoading(false);
					}
				})
				.catch(e => {
					setLoading(false);
					throw new Error(e);
				});
		};
		req();
		return () => {
			mounted = false;
		};
	}, [date]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			{games && favLeagues(games).length > 0 ? (
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
				))
			) : (
				<NotFound title="Matches" />
			)}
		</>
	);
};

export default Fixtures;
