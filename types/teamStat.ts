import { Team } from './team';

export interface TeamStat {
	team: Team;
	statistics: Statistic[];
}

export interface Statistic {
	type: string;
	value: string | number | null;
}
