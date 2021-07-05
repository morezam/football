import { useRouter, NextRouter } from 'next/router';
import { useEffect, useState } from 'react';
import football from '../../api/football';
import Player from '../../components/player/Player';

const PlayerPage = () => {
	const [playerDetail, setPlayerDetail] = useState();
	const router: NextRouter = useRouter();
	const playerId = router.query?.playerId?.toString();
	useEffect(() => {
		const req = async () => {
			const res = await football
				.get('/players', {
					params: {
						id: playerId,
						season: 2020,
					},
				})
				.then(res => {
					console.log(res.data.response[0]);
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
