import styles from './player.module.css';

const PlayerStat = ({
	label,
	stat,
}: {
	label: string;
	stat: number | string | null;
}) => {
	if (stat === null) {
		return null;
	}
	return (
		<div className={styles.stat}>
			<div>{label}</div>
			<div>{stat}</div>
		</div>
	);
};

export default PlayerStat;
