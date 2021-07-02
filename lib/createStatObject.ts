import { Stats } from './passAccuracy';

export const createStatObject = (
	title: string,
	homeStats: Stats[],
	awayStats: Stats[]
) => {
	const h = homeStats.find(stat => stat.type === title)?.value;
	const a = awayStats.find(stat => stat.type === title)?.value;

	return {
		title,
		h,
		a,
	};
};
