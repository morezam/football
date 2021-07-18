import { useEffect, useState } from 'react';
import { useRouter, NextRouter } from 'next/router';
import football from '../../api/football';
import FixtureDetail from '../../components/fixture/Fixture';
import { Game } from '../../types/gameInterface';
import Events from '../../components/events/Events';
import Tabs from '../../components/tab/Tabs';
import Tab from '../../components/tab/Tab';
import Lineups from '../../components/lineup/Lineups';
import Statistics from '../../components/stats/Statistics';
import Facts from '../../components/fact/Facts';
import H2H from '../../components/h2h/H2H';

const Fixture = () => {
	const router: NextRouter = useRouter();
	const id = router.query.fixtureId ? router.query.fixtureId.toString() : '';
	const [game, setGame] = useState<Game>();
	useEffect(() => {
		const req = async () => {
			const res = await football
				.get('/fixtures', {
					params: {
						id,
					},
				})
				.then(res => {
					setGame(res.data.response[0]);
				})
				.catch(e => console.log(e));
		};
		req();
	}, [id]);

	return (
		<div>
			<div
				style={{
					top: '0',
					right: '0',
					left: '0',
					zIndex: 1000,
				}}>
				<FixtureDetail game={game} />
			</div>
			<div>
				<Tabs>
					<Tab title="Match Facts">
						<Events homeId={game?.teams.home.id} events={game?.events} />
						<Facts fixture={game?.fixture} />
					</Tab>
					<Tab title="Lineups">
						<Lineups lineup={game?.lineups} />
					</Tab>
					<Tab title="Stats">
						<Statistics stats={game?.statistics} />
					</Tab>
					<Tab title="Head-to-head">
						<H2H homeId={game?.teams.home.id} awayId={game?.teams.away.id} />
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};

export default Fixture;
