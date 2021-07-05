interface Coach {
	id: number;
	name: string;
	photo: string;
}
export interface Player {
	id: number;
	name: string;
	number: number;
	pos: string;
	grid: string | null;
}
export interface TeamDetails {
	team: {
		id: number;
		name: string;
		logo: string;
		colors: {
			player: {
				primary: string;
				number: string;
				border: string;
			};
			goalkeeper: {
				primary: string;
				number: string;
				border: string;
			};
		};
	};
	formation: string;
	startXI: {
		player: Player;
	}[];
	substitutes: {
		player: Player;
	}[];
	coach: Coach;
}
