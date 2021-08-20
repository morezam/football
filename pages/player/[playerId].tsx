import { useRouter, NextRouter } from 'next/router';
import { useQuery } from 'react-query';
import NotFound from '../../components/NotFound';
import Player from '../../components/player/Player';
import Spinner from '../../components/Spinner';
import { ReturnedData } from '../../types/dataInterfac';
import { PlayerStats } from '../../types/playerStat';

const PlayerPage = () => {
	const router: NextRouter = useRouter();
	const playerId = router.query?.playerId?.toString();

	const { data, isLoading } = useQuery<ReturnedData<PlayerStats[]>>([
		'players',
		'/players',
		{ id: playerId, season: new Date().getFullYear() },
	]);

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

export default PlayerPage;
