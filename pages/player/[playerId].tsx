import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import football from '../../api/football';
import NotFound from '../../components/NotFound';
import Player from '../../components/player/Player';
import Spinner from '../../components/Spinner';
import { ReturnedData } from '../../types/dataInterfac';
import { PlayerStats } from '../../types/playerStat';

const PlayerPage = (props: {
	id: string;
	data: ReturnedData<PlayerStats[]>;
}) => {
	const playerId = props.id;

	const { data, isLoading } = useQuery<ReturnedData<PlayerStats[]>>(
		['players', '/players', { id: playerId, season: new Date().getFullYear() }],
		{
			initialData: props.data,
			staleTime: 1000 * 5 * 60,
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
				<NotFound title="Player" />
			)}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async context => {
	const id = context.params?.playerId;
	const { data } = await football.get('/players', {
		params: {
			id,
			season: new Date().getFullYear(),
		},
	});
	if (!data || !id) {
		return {
			notFound: true,
		};
	}
	return {
		props: { id, data },
	};
};

export default PlayerPage;
