import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import football from '../api/football';

const Fixtures = ({ league, date }) => {
	const [games, setGames] = useState([]);
	useEffect(() => {
		const req = async () => {
			const res = await football
				.get('/fixtures', {
					params: {
						date,
						league: league.id,
						season: league.season,
					},
				})
				.then(res => {
					setGames(res?.data.response);
					console.log(games.length > 0 ? games : '');
				})
				.catch(e => console.log(e));
		};
		req();
	}, [league, date]);
	return (
		<ul>
			<li key={league.id}>
				<img src={league.logo} alt={league.name} />
				<p>{league.name}</p>
				{games.map(game => (
					<Link href={'/' + game.fixture.id} key={game.fixture.id}>
						{`${game.teams.home.name} - ${game.teams.away.name}`}
					</Link>
				))}
			</li>
		</ul>
	);
};

export default Fixtures;
