import Lineup from './Lineup';
import { TeamDetails } from '@customTypes/lineupInterface';
import NotFound from '../NotFound';
import Substitutes from './Substitutes';
import styles from './Lineup.module.css';

const Lineups = ({ lineup }: { lineup?: TeamDetails[] }) => {
	if (!lineup || lineup.length === 0) {
		return <NotFound title="Lineup" />;
	}

	if (!lineup[0] || !lineup[1]) {
		return <NotFound title="Lineup" />;
	}

	return (
		<>
			<div className={styles.lineups}>
				<Lineup home={true} lineup={lineup[0]} />
				<Lineup home={false} lineup={lineup[1]} />
			</div>
			<div className={styles.subs}>
				<Substitutes home={true} subs={lineup[0].substitutes} />
				<Substitutes home={false} subs={lineup[1].substitutes} />
			</div>
		</>
	);
};

export default Lineups;
