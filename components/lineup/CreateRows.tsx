import styles from './Lineup.module.css';
interface PlayerColor {
	primary: string;
	number: string;
	border: string;
}
interface Colors {
	player: PlayerColor;
	goalkeeper: PlayerColor;
}

const CreateRows = (rows: string[], colors: Colors, home: boolean) => {
	return rows.map((row, i) => (
		<div
			key={i}
			className={`${styles.row}`}
			id={`row-${home ? 'h' : 'a'}-${i + 1}`}
			style={{
				gridTemplateRows: `repeat(${row}, 1fr)`,
				color: `${
					i === 0
						? '#' + colors.goalkeeper.primary
						: '#' + colors.player.primary
				}`,
			}}></div>
	));
};

export default CreateRows;
