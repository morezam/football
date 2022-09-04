import Image from 'next/image';
import { useQuery } from 'react-query';
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

interface Returned {
	response: Game[];
}

const Fixtures = ({ date }: FixturesProps) => {
	const td = createDateForCalnedar(date);
	const { data, isLoading } = useQuery(
		['fixtures', '/fixtures', { date: td }],
		{
			select: (data: Returned) => favLeagues(data.response),
			staleTime: 10 * 60 * 1000,
		}
	);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			{data && data.length > 0 ? (
				data.map(game => (
					<ul
						className={styles.parentList}
						key={game.league.id}
						data-testid="games">
						<li>
							<div className={styles.title}>
								<Image
									src={game.league.logo}
									alt={game.league.name}
									height={35}
									width={35}
								/>
								<p>
									{game.league.name}- {game.league.round}
								</p>
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
