import { useRouter, NextRouter } from 'next/router';
import { useEffect, useState } from 'react';
import football from '../../api/football';
import ErrorBoundary from '../../components/ErrorBoundary';
import NotFound from '../../components/NotFound';
import Player from '../../components/player/Player';
import Spinner from '../../components/Spinner';
import { PlayerStats } from '../../types/playerStat';

const PlayerPage = () => {
	const [playerDetail, setPlayerDetail] = useState<PlayerStats>();
	const [loading, setLoading] = useState(false);

	const router: NextRouter = useRouter();
	const playerId = router.query?.playerId?.toString();
	useEffect(() => {
		setLoading(true);
		const req = async () => {
			const res = await football
				.get('/players', {
					params: {
						id: playerId,
						season: new Date().getFullYear(),
					},
				})
				.then(res => {
					setPlayerDetail(res.data.response[0]);
					setLoading(false);
				})
				.catch(e => {
					setLoading(false);
					throw new Error(e);
				});
		};
		req();
	}, [playerId]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<ErrorBoundary>
			{playerDetail ? (
				<Player playerDetail={playerDetail} />
			) : (
				<NotFound title="Player" />
			)}
		</ErrorBoundary>
	);
};

export default PlayerPage;
