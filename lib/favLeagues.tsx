import { Game } from '../types/gameInterface';
import { League } from '../types/league';

export const favLeagues = (arr: Game[]): League[] => {
	const newArr = [];
	const worldCup = arr.filter(el => el.league.id === 1)[0];
	const UCL = arr.filter(el => el.league.id === 2)[0];
	const UL = arr.filter(el => el.league.id === 3)[0];
	const Euro = arr.filter(el => el.league.id === 4)[0];
	const Copa = arr.filter(el => el.league.id === 9)[0];
	const ACL = arr.filter(el => el.league.id === 17)[0];
	const premierLeague = arr.filter(el => el.league.id === 39)[0];
	const leagueOne = arr.filter(el => el.league.id === 61)[0];
	const bundesLiga = arr.filter(el => el.league.id === 78)[0];
	const SerieA = arr.filter(el => el.league.id === 135)[0];
	const laLiga = arr.filter(el => el.league.id === 140)[0];
	const IranLeague = arr.filter(el => el.league.id === 290)[0];
	const IranHazfi = arr.filter(el => el.league.id === 495)[0];

	newArr.push(
		worldCup,
		UCL,
		UL,
		Euro,
		Copa,
		ACL,
		premierLeague,
		leagueOne,
		bundesLiga,
		SerieA,
		laLiga,
		IranLeague,
		IranHazfi
	);

	return newArr
		.filter(league => league !== undefined)
		.map(league => league.league);
};
