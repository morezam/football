import React, { FC } from 'react';
import Link from 'next/link';
import { Player } from '../../types/lineupInterface';
import styles from './Lineup.module.css';

interface SubProps {
	subs: {
		player: Player;
	}[];
	home: boolean;
}

const Substitutes: FC<SubProps> = ({ subs, home }) => {
	const positionPrint = (pos: string) => {
		if (pos === 'G') {
			return `Goalkeeper`;
		}
		if (pos === 'D') {
			return `Defender`;
		}
		if (pos === 'M') {
			return `Midfielder`;
		}
		if (pos === 'F') {
			return `Forward`;
		} else {
			return '';
		}
	};
	return (
		<div
			className={styles.sub}
			style={{ gridRow: '2/3', gridColumn: `${home ? '1/2' : '2/3'}` }}>
			{subs.map(sub => (
				<Link href={`/player/${sub.player.id}`} key={sub.player.id}>
					<a className={styles.subLink}>
						{`${sub.player.number} ${sub.player.name}`}
						<span className={styles.position}>
							{positionPrint(sub.player.pos)}
						</span>
					</a>
				</Link>
			))}
		</div>
	);
};

export default Substitutes;
