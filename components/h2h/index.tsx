import { useQuery } from 'react-query';
import GameDetails from '../fixture/GameDetails';
import styles from './h2h.module.css';
import { Game } from '@customTypes/gameInterface';
import { createHRDate } from '@lib/createHRDate';
import { ReturnedData } from '@customTypes/dataInterface';

interface H2HProps {
	homeId?: number | string;
	awayId?: number | string;
}

const H2H = ({ homeId, awayId }: H2HProps) => {
	const { data: h2h } = useQuery<ReturnedData<Game[]>>(
		['head-to-head', '/fixtures/headtohead', { h2h: `${homeId}-${awayId}` }],
		{
			staleTime: 10 * 60 * 1000,
		}
	);

	return (
		<div>
			{h2h &&
				h2h.response
					.sort(
						(a, b) =>
							new Date(b.fixture.date).getTime() -
							new Date(a.fixture.date).getTime()
					)
					.map(game => {
						const matchDate = createHRDate(game.fixture.date, false);
						return (
							<div key={game.fixture.id} className={styles.parent}>
								<div className={styles.header}>
									<p className={styles.title}>
										{game.league.name} -{' '}
										{game.league.round ? game.league.round : ''}
									</p>
									<p className={styles.date}>{matchDate}</p>
								</div>
								<GameDetails game={game} />
							</div>
						);
					})}
		</div>
	);
};

export default H2H;
