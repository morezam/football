import React, { FC } from 'react';

import styles from './stats.module.css';

interface StatProps {
	stats: {
		title: string;
		h?: string | number | null;
		a?: string | number | null;
	}[];
}

const Statistic: FC<StatProps> = ({ stats }) => {
	return (
		<div>
			{stats.map(stat => {
				if (!stat.a || !stat.h) {
					return;
				}
				return (
					<div className={styles.stat} key={stat.title}>
						<p
							style={{ textAlign: 'center' }}
							className={
								+stat.h.toString().replace('%', '') >
								+stat.a.toString().replace('%', '')
									? styles.bigger
									: ''
							}>
							{stat.h}
						</p>
						<p style={{ justifySelf: 'center' }}>{stat.title}</p>
						<p
							style={{ textAlign: 'center' }}
							className={
								+stat.a.toString().replace('%', '') >
								+stat.h.toString().replace('%', '')
									? styles.bigger
									: ''
							}>
							{stat.a}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Statistic;
