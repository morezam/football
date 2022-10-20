import { createStatObject } from '@lib/createStatObject';
import Statistic from './Statistic';
import styles from './stats.module.css';
import { TeamStat } from '@customTypes/teamStat';
import NotFound from '../NotFound';

const Statistics = ({ stats }: { stats?: TeamStat[] }) => {
	if (!stats) {
		return <p>Loading...</p>;
	}
	if (stats.length === 0) {
		return <NotFound title="Stats" />;
	}
	const stats1 = stats[0]?.statistics.filter(stat => stat.value !== null);
	const stats2 = stats[1]?.statistics.filter(stat => stat.value !== null);

	const titles = stats1.map(stat => stat.type);

	const statsAndTitles = titles.map(title => {
		return createStatObject(title, stats1, stats2);
	});

	return (
		<div className={styles.statBack}>
			<Statistic stats={statsAndTitles} />
		</div>
	);
};

export default Statistics;
