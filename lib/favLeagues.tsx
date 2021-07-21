import { Game } from '../types/gameInterface';

export const favLeagues = (arr: Game[]) => {
	// Ids of some of the leagues that I care about.
	// like world cup, UCL, PL and ...
	const favs = [1, 2, 3, 4, 9, 17, 39, 61, 78, 135, 140, 290, 495];
	const allGames = mapAllGamesToFavs(arr, favs);

	return allGames
		.filter(game => game.length > 0)
		.map(game => ({ league: game[0].league, games: game }));
};

const mapAllGamesToFavs = (arr: Game[], favs: number[]) => {
	const res = favs.map(fav => arr.filter(game => game.league.id === fav));
	return res;
};
