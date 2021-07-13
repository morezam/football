import { Team } from './team';
import { Event } from './eventInterface';
import { League } from './league';
import { TeamStat } from './teamStat';
import { TeamDetails } from './lineupInterface';
export interface Game {
	fixture: Fixture;
	league: League;
	teams: Teams;
	goals: Goals;
	events?: Event[];
	statistics: TeamStat[];
	lineups: TeamDetails[];
}

export interface Fixture {
	id: number;
	referee: string;
	timezone: string;
	date: string;
	timestamp: number;
	venue: Venue;
	status: Status;
	periods: {
		first: number;
		second: number;
	};
}

interface Venue {
	id: number;
	name: string;
	city: string;
}

interface Status {
	long: string;
	short: string;
	elapsed: number;
}

interface Goals {
	home: number;
	away: number;
}

interface Teams {
	home: Team;
	away: Team;
}
