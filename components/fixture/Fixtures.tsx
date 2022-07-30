import Image from 'next/image';
import { useQuery } from 'react-query';
import styles from './fixture.module.css';
import GameDetails from './GameDetails';
import { Game } from '../../types/gameInterface';
import { favLeagues } from '../../lib/favLeagues';
import { createDateForCalnedar } from '../../lib/createDateForCalnedar';
import NotFound from '../NotFound';
import Spinner from '../Spinner';
import { ReturnedData } from '../../types/dataInterfac';

interface FixturesProps {
	date: Date;
}

const Fixtures = ({ date }: FixturesProps) => {
	const td = createDateForCalnedar(date);
	let favLeaguesArray;
	const { data, isLoading } = useQuery<ReturnedData<Game[]>>([
		'fixtures',
		'/fixtures',
		{ date: td },
	]);

	if (isLoading) {
		return <Spinner />;
	}

	if (data) {
		favLeaguesArray = favLeagues(data.response);
	}

	return (
		<>
			{favLeaguesArray && favLeaguesArray.length > 0 ? (
				favLeaguesArray.map(game => (
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
