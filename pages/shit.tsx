// import Player from '../components/player/Player';
// import GameDetails from '../components/fixture/GameDetails';
// import { h2h } from '../api/h2h';
// import football from '../api/football';
// import { useEffect } from 'react';
// import { createHRDate } from '../lib/createHRDate';
// import { fixture } from '../api/fixture';
// import DatePicker from 'react-datepicker';
import Lineups from '../components/lineup/Lineups';
import { data } from '../api/data';
// import Statistics from '../components/stats/Statistics';
// import Events from '../components/events/Events';

const Shit = () => {
	return (
		<div>
			{/* <Events homeId={463} /> */}
			<Lineups lineup={data} />
			{/* <Statistics /> */}
		</div>
	);
};

export default Shit;
