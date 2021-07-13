import React, { useEffect, useState } from 'react';
import GameDetails from '../fixture/GameDetails';
import styles from './h2h.module.css';
import { Game } from '../../types/gameInterface';
import football from '../../api/football';
import { createHRDate } from '../../lib/createHRDate';
import NotFound from '../NotFound';

interface H2HProps {
	homeId?: number | string;
	awayId?: number | string;
}

const H2H = ({ homeId, awayId }: H2HProps) => {
	const [h2h, setH2h] = useState<Game[]>();

	useEffect(() => {
		const req = async () => {
			const res = await football
				.get('/fixtures/headtohead', {
					params: {
						h2h: `${homeId}-${awayId}`,
					},
				})
				.then(res => {
					console.log(res.data.response);
					setH2h(res.data.response);
				})
				.catch(e => console.log(e));
		};
		req();
	}, [homeId, awayId]);
	// if (!homeId || awayId) {
	// 	return <NotFound title="Head-to-head" />;
	// }
	return (
		<div>
			{h2h &&
				h2h
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
									<p>
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
