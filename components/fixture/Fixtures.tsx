import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import football from '../../api/football';
import styles from './fixture.module.css';
import GameDetails from './GameDetails';
import { Game } from '../../types/gameInterface';
import { League } from '../../types/league';

interface FixturesProps {
	league: League;
	date: Date;
}

const Fixtures = ({ league, date }: FixturesProps) => {
	const [games, setGames] = useState<Game[]>();

	useEffect(() => {
		const td = date.toISOString().split('T')[0];
		let mounted = true;
		const req = async () => {
			const res = await football
				.get('/fixtures', {
					params: {
						date: td,
						league: league.id,
						season: league.season,
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
		return () => (mounted = false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date]);
	return (
		<ul className={styles.parentList}>
			<li key={league.id}>
				<div className={styles.title}>
					<Image src={league.logo} alt={league.name} height={35} width={35} />
					<p>{league.name}</p>
				</div>
				<div className={styles.games}>
					{games ? (
						games.map(game => <GameDetails key={game.fixture.id} game={game} />)
					) : (
						<p>No Matches Found</p>
					)}
				</div>
			</li>
		</ul>
	);
};

export default Fixtures;
