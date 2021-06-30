import React from 'react';

const FixtureDetail = ({ game }) => {
	return (
		<div>
			<div>
				<img src={game.teams.home.logo} />
				{game.teams.home.name}
			</div>
			<div>
				<img src={game.teams.away.logo} />
				{game.teams.away.name}
			</div>
		</div>
	);
};

export default FixtureDetail;
