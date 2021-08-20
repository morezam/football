import { useRouter, NextRouter } from 'next/router';
import { useQuery } from 'react-query';
import FixtureDetail from '../../components/fixture/Fixture';
import { Game } from '../../types/gameInterface';
import Events from '../../components/events/Events';
import Tabs from '../../components/tab/Tabs';
import Tab from '../../components/tab/Tab';
import Lineups from '../../components/lineup/Lineups';
import Statistics from '../../components/stats/Statistics';
import Facts from '../../components/fact/Facts';
import H2H from '../../components/h2h/H2H';
import Spinner from '../../components/Spinner';
import { ReturnedData } from '../../types/dataInterfac';

const Fixture = () => {
	const router: NextRouter = useRouter();
	const id = router.query.fixtureId ? router.query.fixtureId.toString() : '';

	const { data, isLoading } = useQuery<ReturnedData<Game[]>>([
		'games',
		'/fixtures',
		{ id },
	]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			<div
				style={{
					top: '0',
					right: '0',
					left: '0',
					zIndex: 1000,
				}}>
				<FixtureDetail game={data?.response[0]} />
			</div>
			<div>
				<Tabs>
					<Tab title="Match Facts">
						<Events
							homeId={data?.response[0]?.teams.home.id}
							events={data?.response[0]?.events}
						/>
						<Facts fixture={data?.response[0]?.fixture} />
					</Tab>
					<Tab title="Lineups">
						<Lineups lineup={data?.response[0]?.lineups} />
					</Tab>
					<Tab title="Stats">
						<Statistics stats={data?.response[0]?.statistics} />
					</Tab>
					<Tab title="Head-to-head">
						<H2H
							homeId={data?.response[0]?.teams.home.id}
							awayId={data?.response[0]?.teams.away.id}
						/>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};

export default Fixture;
