import React from 'react';
import styles from './player.module.css';

const PlayerProfile = ({
	label,
	value,
}: {
	label: string;
	value: string | number;
}) => {
	return (
		<div className={styles.profile}>
			<p className={styles.value}>{value}</p>
			<p className={styles.profileLabel}>{label}</p>
		</div>
	);
};

export default PlayerProfile;
