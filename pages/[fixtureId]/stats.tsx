import React, { useEffect, useState } from 'react';
import { useRouter, NextRouter } from 'next/router';
import Statistics from '../../components/stats/Statistics';
import football from '../../api/football';

const LineupPage = () => {
	const router: NextRouter = useRouter();
	const id = router.query.fixtureId ? router.query.fixtureId.toString() : '';
	const [stats, setStats] = useState([]);
	useEffect(() => {
		const req = async () => {
			const res = await football
				.get('/fixtures//statistics', {
					params: {
						fixture: id,
					},
				})
				.then(res => {
					console.log(res.data.response);
					setStats(res.data.response);
				})
				.catch(e => console.log(e));
		};
		req();
	}, [id]);
	return (
		<div>
			<Statistics stats={stats} />
		</div>
	);
};

export default LineupPage;
