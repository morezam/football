import { Game } from '../types/gameInterface';
import { League } from '../types/league';

export const favLeagues = (arr: Game[]): League[] => {
	const newArr = [];
	const worldCup = arr.find(el => el.league.id === 1);
	const UCL = arr.find(el => el.league.id === 2);
	const UL = arr.find(el => el.league.id === 3);
	const Euro = arr.find(el => el.league.id === 4);
	const Copa = arr.find(el => el.league.id === 9);
	const ACL = arr.find(el => el.league.id === 17);
	const premierLeague = arr.find(el => el.league.id === 39);
	const leagueOne = arr.find(el => el.league.id === 61);
	const bundesLiga = arr.find(el => el.league.id === 78);
	const SerieA = arr.find(el => el.league.id === 135);
	const laLiga = arr.find(el => el.league.id === 140);
	const IranLeague = arr.find(el => el.league.id === 290);
	const IranHazfi = arr.find(el => el.league.id === 495);

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
