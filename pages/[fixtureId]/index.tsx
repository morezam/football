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
import ErrorBoundary from '../../components/ErrorBoundary';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

const Fixture = (props: { id: string }) => {
	const [index, setIndex] = useState(0);
	const id = props.id;
	const { data, isLoading } = useQuery<ReturnedData<Game[]>>(
		['games', '/fixtures', { id }],
		{
			staleTime: 10 * 60 * 1000,
		}
	);

	const homeId = data?.response[0]?.teams.home.id;
	const awayId = data?.response[0]?.teams.away.id;

	useEffect(() => {
		const tabIndex = localStorage.getItem('tabIndex');
		tabIndex && setIndex(+tabIndex);
	}, []);

	useEffect(() => {
		localStorage.setItem('tabIndex', index.toString());
	}, [index]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<ErrorBoundary>
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
					<Tabs index={index} setIndex={setIndex}>
						<Tab title="Match Facts">
							<Events homeId={homeId} events={data?.response[0]?.events} />
							<Facts fixture={data?.response[0]?.fixture} />
						</Tab>
						<Tab title="Lineups">
							<Lineups lineup={data?.response[0]?.lineups} />
						</Tab>
						<Tab title="Stats">
							<Statistics stats={data?.response[0]?.statistics} />
						</Tab>
						<Tab title="Head-to-head">
							<H2H homeId={homeId} awayId={awayId} />
						</Tab>
					</Tabs>
				</div>
			</div>
		</ErrorBoundary>
	);
};

export const getServerSideProps: GetServerSideProps = async context => {
	const id = context.params?.fixtureId;

	return {
		props: { id },
	};
};

export default Fixture;
