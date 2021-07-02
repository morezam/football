import React, { useEffect, useState } from 'react';
import { useRouter, NextRouter } from 'next/router';
import Lineups from '../../components/lineup/Lineups';
import football from '../../api/football';

const LineupPage = () => {
	const router: NextRouter = useRouter();
	const id = router.query.fixtureId ? router.query.fixtureId.toString() : '';
	const [line, setLine] = useState([]);
	useEffect(() => {
		const req = async () => {
			const res = await football
				.get('/fixtures/lineups', {
					params: {
						fixture: id,
					},
				})
				.then(res => {
					console.log(res.data.response);
					setLine(res.data.response);
				})
				.catch(e => console.log(e));
		};
		req();
	}, [id]);
	return (
		<div>
			<Lineups lineup={line ? line : []} />
		</div>
	);
};

export default LineupPage;
