export interface Stats {
	type: string;
	value: number | string;
}
export const passAccuracy = (stats: Stats[]) => {
	let tp = stats.find(stat => stat.type === 'Total passes')?.value;
	let pa = stats.find(stat => stat.type === 'Passes accurate')?.value;
	if (!tp || !pa) {
		return [];
	}
	const pp = (+pa / +tp) * 100;
	stats.push({
		type: 'Passes %',
		value: pp.toFixed(),
	});
	return stats;
};
