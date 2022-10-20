import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useQuery } from 'react-query';
import NotFound from '@components/NotFound';
import Player from '@components/player/Player';
import Spinner from '@components/Spinner';
import { ReturnedData } from '@customTypes/dataInterface';
import { PlayerStats } from '@customTypes/playerStat';

const PlayerPage = (props: { id: string }) => {
	const playerId = props.id;

	const { data, isLoading } = useQuery<ReturnedData<PlayerStats[]>>(
		['players', '/players', { id: playerId, season: new Date().getFullYear() }],
		{
			staleTime: 1000 * 10 * 60,
		}
	);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			{data ? (
				<Player playerDetail={data.response[0]} />
			) : (
				<>
					<Head>
						<title>Player Not Found!</title>
					</Head>
					<NotFound title="Player" />
				</>
			)}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async context => {
	const id = context.params?.playerId;

	return {
		props: { id },
	};
};

export default PlayerPage;
