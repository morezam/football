import { GetServerSideProps } from 'next';
import { Suspense, useState } from 'react';
import { useQuery } from 'react-query';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import FixtureDetail from '@components/fixture/Fixture';
import { Game } from '@customTypes/gameInterface';
import Events from '@components/events';
import Tabs from '@components/tab/Tabs';
import Tab from '@components/tab/Tab';
import Facts from '@components/fact';
import Spinner from '@components/Spinner';
import { ReturnedData } from '@customTypes/dataInterface';
import ErrorBoundary from '@components/errorBoundary';

const Lineups = dynamic(() => import('@components/lineup'), {
	suspense: true,
});
const Statistics = dynamic(() => import('@components/stats'), {
	suspense: true,
});
const H2H = dynamic(() => import('@components/h2h'), {
	suspense: true,
});

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

	const gameName = `${data?.response[0]?.teams.home.name}-${data?.response[0]?.teams.away.name}`;

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<ErrorBoundary onReset={() => setIndex(0)}>
			<Head>
				<title>{gameName}</title>
				<meta
					name="description"
					content={`${gameName}'s events, lineups, statistics and head to heads.`}
				/>
			</Head>
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
							<Suspense fallback={<Spinner />}>
								<Lineups lineup={data?.response[0]?.lineups} />
							</Suspense>
						</Tab>
						<Tab title="Stats">
							<Suspense fallback={<Spinner />}>
								<Statistics stats={data?.response[0]?.statistics} />
							</Suspense>
						</Tab>
						<Tab title="Head-to-head">
							<Suspense fallback={<Spinner />}>
								<H2H homeId={homeId} awayId={awayId} />
							</Suspense>
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
