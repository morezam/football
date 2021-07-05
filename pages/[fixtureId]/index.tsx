import React, { useEffect, useState } from 'react';
import { useRouter, NextRouter } from 'next/router';
import Link from 'next/link';
import football from '../../api/football';
import FixtureDetail, { Game } from '../../components/Fixture';

const Fixture = () => {
	const router: NextRouter = useRouter();
	const id = router.query.fixtureId ? router.query.fixtureId.toString() : '';
	const [game, setGame] = useState<Game>();
	useEffect(() => {
		const req = async () => {
			const res = await football
				.get('/fixtures', {
					params: {
						id,
					},
				})
				.then(res => {
					setGame(res.data.response[0]);
				})
				.catch(e => console.log(e));
		};
		req();
	}, [id]);
	return (
		<div>
			<FixtureDetail game={game} />
			<Link href={`/${id}/lineup`}>Lineup</Link>
			<Link href={`/${id}/stats`}>Stats</Link>
		</div>
	);
};

export default Fixture;
