import { Statistic } from '@customTypes/teamStat';

export const createStatObject = (
	title: string,
	homeStats: Statistic[],
	awayStats: Statistic[]
) => {
	const h = homeStats?.find(stat => stat.type === title)?.value;
	const a = awayStats?.find(stat => stat.type === title)?.value;

	return {
		title,
		h,
		a,
	};
};
