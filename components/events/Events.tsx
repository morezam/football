import React from 'react';
import { events } from '../../api/events';
import CradType from './CradType';
import SubType from './SubType';
import GoalType from './GoalType';
const Events = ({ homeId }: { homeId: string }) => {
	const typeChange = eve => {
		if (eve.type === 'Goal') {
			return (
				<GoalType
					type={eve.detail}
					name={eve.player.name}
					assist={eve.assist.name}
				/>
			);
		}
		if (eve.type === 'Card') {
			return <CradType type={eve.detail} name={eve.player.name} />;
		}
		if (eve.type === 'subst') {
			return <SubType playerIn={eve.player.name} playerOut={eve.assist.name} />;
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '500px',
			}}>
			{events.map(eve => (
				<div
					key={eve.time.elapsed + eve.player.id}
					style={{
						alignSelf: `${eve.team.id == homeId ? 'flex-start' : 'flex-end'}`,
						display: 'flex',
						flexDirection: `${eve.team.id == homeId ? 'row' : 'row-reverse'}`,
						alignItems: 'center',
					}}>
					<p style={{ padding: '0 10px' }}>{eve.time.elapsed} </p>
					{typeChange(eve)}
				</div>
			))}
		</div>
	);
};

export default Events;
