import { useRouter, NextRouter } from 'next/router';
import { useEffect, useState } from 'react';
import football from '../../api/football';
import Player from '../../components/player/Player';
import { PlayerStats } from '../../types/playerStat';

const PlayerPage = () => {
	const [playerDetail, setPlayerDetail] = useState<PlayerStats>();
	const router: NextRouter = useRouter();
	const playerId = router.query?.playerId?.toString();
	useEffect(() => {
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
				})
				.catch(e => console.log(e));
		};
		req();
	}, [playerId]);
	if (!playerId) {
		return <p>Player not found</p>;
	}

	return <Player playerDetail={playerDetail} />;
};

export default PlayerPage;
