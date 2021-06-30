export const favLeagues = arr => {
	const newArr = [];
	const WC = arr.find(el => el.league.id === 1);
	const UCL = arr.find(el => el.league.id === 2);
	const Euro = arr.find(el => el.league.id === 4);
	const PL = arr.find(el => el.league.id === 39);
	const LL = arr.find(el => el.league.id === 140);
	const SA = arr.find(el => el.league.id === 135);
	const IL = arr.find(el => el.league.id === 290);
	newArr.push(WC, UCL, Euro, PL, LL, SA, IL);
	return newArr
		.filter(league => league !== undefined)
		.map(league => league.league);
};
