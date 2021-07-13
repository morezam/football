import { Team } from './team';
export interface Event {
	time: Time;
	team: Team;
	player: Player;
	assist: Player;
	type: Type;
	detail: string;
	comments?: string;
}
interface Time {
	elapsed: number;
	extra: number | null;
}

interface Player {
	id?: number;
	name?: string;
}

enum Type {
	subst = 'subst',
	card = 'Card',
	goal = 'Goal',
}
