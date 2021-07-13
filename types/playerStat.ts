import { League } from './league';
import { Team } from './team';
export interface PlayerStats {
	player: Player;
	statistics: Statistic[];
}

interface Player {
	id: number;
	name: string;
	firstname: string;
	lastname: string;
	age: number;
	birth: {
		date: string;
		place: string;
		country: string;
	};
	nationality: string;
	height: string;
	weight: string;
	injured: boolean;
	photo: string;
}

interface Statistic {
	team: Team;
	league: League;
	games: Games;
	shots: Shots;
	goals: Goals;
	passes: Passes;
	cards: Cards;
	tackles: Tackles;
	duels: Duels;
	dribbles: Dribbles;
}

interface Games {
	appearences: number;
	lineups: number;
	minutes: number;
	number: number | null;
	position: string;
	rating: string | null;
	captain: boolean;
}

interface Shots {
	total: number | null;
	on: number | null;
}

interface Goals {
	total: number;
	conceded: number | null;
	assists: number | null;
	saves: number | null;
}

interface Passes {
	total: number | null;
	key: number | null;
	accuracy: number | null;
}

interface Tackles {
	total: number | null;
	blocks: number | null;
	interceptions: number | null;
}

interface Duels {
	total: number | null;
	won: number | null;
}
interface Dribbles {
	attempts: number | null;
	success: number | null;
	past?: number | null;
}
interface Cards {
	yellow: number;
	yellowred: number;
	red: number;
}
