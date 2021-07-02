import React from 'react';
import { createStatObject } from '../../lib/createStatObject';
import Statistic from './Statistic';

const Statistics = ({ stats }) => {
	if (stats.length === 0) {
		return <p>Loading...</p>;
	}
	const stats1 = stats[0]?.statistics.filter(stat => stat.value !== null);
	const stats2 = stats[1]?.statistics.filter(stat => stat.value !== null);

	const titles = stats1.map(stat => stat.type);

	const statsAndTitles = titles.map(title => {
		return createStatObject(title, stats1, stats2);
	});

	return (
		<div>
			<Statistic stats={statsAndTitles} />
		</div>
	);
};

export default Statistics;
