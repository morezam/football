import Link from 'next/link';
import Image from 'next/future/image';
import { Player } from '@lib/createPlayersObject';
import styles from './Lineup.module.css';

interface PlayerRowProps {
	playerRow: Player[];
}

const PlayerRow = ({ playerRow }: PlayerRowProps) => {
	return (
		<>
			{playerRow.map(player => {
				const row = player.grid?.split(':');
				if (!row) return;
				return (
					<Link key={player.id} href={`/player/${player.id}`}>
						<a
							className={styles.playerContainer}
							style={{
								gridColumn: `${+row[1]}/${+row[1] + 1}`,
								gridRow: '1/2',
							}}>
							<Image
								src={`https://media.api-sports.io/football/players/${player.id}.png`}
								alt={`Image of ${player.name}`}
								title={player.name}
								className={styles.playerImg}
								placeholder="blur"
								blurDataURL="/player-placeholder.png"
								width={40}
								height={40}
							/>
							<p className={styles.playerName}>
								{player.number} {player.name}
							</p>
						</a>
					</Link>
				);
			})}
		</>
	);
};

export default PlayerRow;
