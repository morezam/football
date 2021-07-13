import React from 'react';
import styles from './player.module.css';
interface PlayerProfileProps {
	label: string;
	value: string | number;
}

const PlayerProfile = ({ label, value }: PlayerProfileProps) => {
	return (
		<div className={styles.profile}>
			<p className={styles.value}>{value}</p>
			<p className={styles.profileLabel}>{label}</p>
		</div>
	);
};

export default PlayerProfile;
