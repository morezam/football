import React, { FC } from 'react';
import { Stats } from '../../lib/passAccuracy';

interface StatProps {
	stats: {
		title: string;
		h: string | number | undefined;
		a: string | number | undefined;
	}[];
}

const Statistic: FC<StatProps> = ({ stats }) => {
	return (
		<div>
			{stats.map(stat => (
				<div
					key={stat.title}
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3,1fr)',
						width: '390px',
					}}>
					<p style={{ justifySelf: 'flex-start' }}>{stat.h}</p>
					<p style={{ justifySelf: 'center' }}>{stat.title}</p>
					<p style={{ justifySelf: 'flex-end' }}>{stat.a}</p>
				</div>
			))}
		</div>
	);
};

export default Statistic;
