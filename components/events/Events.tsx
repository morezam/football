import React from 'react';
import styles from './events.module.css';
import EventDetails from './Event';
import { Event } from '../../types/eventInterface';

interface EventsProps {
	homeId?: number | string;
	events?: Event[];
}

const Events = ({ homeId, events }: EventsProps) => {
	if (!events || !homeId) {
		return <p>Loading ...</p>;
	}

	if (events.length === 0) {
		return null;
	}

	return (
		<div className={styles.parent}>
			{events.map(eve => (
				<div
					key={`${eve.time.elapsed} + ${
						eve.player.id ? eve.player.id : eve.team.id
					}`}
					style={{
						alignSelf: `${eve.team.id == homeId ? 'flex-start' : 'flex-end'}`,
						display: 'flex',
						flexDirection: `${eve.team.id == homeId ? 'row' : 'row-reverse'}`,
						alignItems: 'center',
						margin: '1rem 0',
					}}>
					<p className={styles.time}>{eve.time.elapsed} </p>
					<EventDetails
						type={eve.type}
						player={eve.player.name ? eve.player.name : ''}
						assist={eve.assist.name ? eve.assist.name : ''}
						detail={eve.detail}
						home={eve.team.id == homeId ? true : false}
					/>
				</div>
			))}
		</div>
	);
};

export default Events;
