import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import football from '../api/football';
import FixtureDetail from '../components/Fixture';

const Fixture = () => {
	const router = useRouter();
	const [game, setGame] = useState({});
	useEffect(() => {
		const req = async () => {
			const res = await football
				.get('/fixtures', {
					params: {
						id: router?.query.fixtureId.toString(),
					},
				})
				.then(res => {
					console.log(res.data.response);
					setGame(res?.data.response[0]);
				})
				.catch(e => console.log(e));
		};
		req();
	}, [router.query.fixtureId]);
	return (
		<div>
			{/* <FixtureDetail game={game} /> */}
			hello
		</div>
	);
};

export default Fixture;
