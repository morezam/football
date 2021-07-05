export interface Player {
	id: number;
	name: string;
	number: number;
	pos: string;
	grid: string | null;
}

export interface PlayersObject {
	[key: string]: Player[];
}

export const createPlayersObject = (players: Player[]) => {
	const obj: PlayersObject = {};
	players.map(player => {
		let grid = player.grid?.split(':')[0];
		if (!grid) {
			return obj;
		}
		if (!obj[grid]) {
			obj[grid] = [];
			obj[grid].push(player);
		} else {
			obj[grid].push(player);
		}
	});
	return obj;
};
