import React, { FC } from 'react';
import Image from 'next/image';
interface Team {
	logo: string;
	name: string;
}

export interface Game {
	teams: {
		home: Team;
		away: Team;
	};
}

interface GameProps {
	game: Game | undefined;
}

const FixtureDetail: FC<GameProps> = ({ game }) => {
	if (!game) {
		return null;
	}
	return (
		<div>
			<div>
				<Image
					width={150}
					height={150}
					alt={game.teams.home.name}
					src={game.teams.home.logo}
				/>
				{game.teams.home.name}
			</div>
			<div>
				<Image
					width={150}
					height={150}
					alt={game.teams.away.name}
					src={game.teams.away.logo}
				/>
				{game.teams.away.name}
			</div>
		</div>
	);
};

export default FixtureDetail;
