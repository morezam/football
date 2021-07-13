import styles from './player.module.css';

interface PlayerStatProps {
	label: string;
	stat: number | string | null;
}

const PlayerStat = ({ label, stat }: PlayerStatProps) => {
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
