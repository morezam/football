import Image from 'next/future/image';
import { useQuery } from 'react-query';
import styles from './fixture.module.css';
import { Game } from '@customTypes/gameInterface';
import { favLeagues } from '@lib/favLeagues';
import { createDateForCalendar } from '@lib/createDateForCalendar';
import NotFound from '../NotFound';
import Spinner from '../Spinner';
import dynamic from 'next/dynamic';
import { memo, Suspense } from 'react';
import { ReturnedData } from '@customTypes/dataInterface';

const GameDetails = dynamic(() => import('./GameDetails'));

interface FixturesProps {
	date: Date;
}

const Fixtures = memo(({ date }: FixturesProps) => {
	const td = createDateForCalendar(date);

	const { data, isLoading } = useQuery(
		['fixtures', '/fixtures', { date: td }],
		{
			select: (data: ReturnedData<Game[]>) => favLeagues(data.response),
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
									className={styles.leagueLogo}
									height={35}
									width={35}
								/>
								<p>
									{game.league.name} - {game.league.round}
								</p>
							</div>
							<div className={styles.games}>
								<Suspense fallback={<p>...</p>}>
									{game.games.map(match => (
										<GameDetails key={match.fixture.id} game={match} />
									))}
								</Suspense>
							</div>
						</li>
					</ul>
				))
			) : (
				<NotFound title="Matches" />
			)}
		</>
	);
});

Fixtures.displayName = 'Fixtures';

export default Fixtures;
