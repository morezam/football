import React from 'react';
import Lineup from './Lineup';
// import styles from './Lineup.module.css';
import { data } from '../../api/data';

const Lineups = ({ lineup }) => {
	if (lineup.length === 0) {
		return <p>Loading...</p>;
	}
	return (
		<div style={{ display: 'flex' }}>
			<Lineup home={true} datas={lineup[0]} />
			<Lineup home={false} datas={lineup[1]} />
		</div>
	);
};

export default Lineups;