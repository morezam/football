import { Fixture } from '@customTypes/gameInterface';
import NotFound from '../NotFound';
import styles from './facts.module.css';
import Fact from './Fact';
import { createHRDate } from '@lib/createHRDate';

const Facts = ({ fixture }: { fixture?: Fixture }) => {
	if (!fixture) {
		return <NotFound title="Facts" />;
	}
	const matchDate = createHRDate(fixture.date);

	return (
		<div className={styles.parent}>
			{fixture.date && <Fact label="Match date" value={matchDate} />}
			{fixture.venue && (
				<Fact
					label="Stadium"
					value={`${fixture.venue.name}, ${fixture.venue.city}`}
				/>
			)}
			{fixture.referee && <Fact label="Referee" value={fixture.referee} />}
		</div>
	);
};

export default Facts;
