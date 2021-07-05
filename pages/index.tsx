import { useEffect } from 'react';
import football from '../api/football';
import { favLeagues } from '../lib/favLeagues';
import Fixtures from '../components/Fixtures';

import React, { useState } from 'react';

export default function Home() {
	const td = new Date().toISOString().split('T')[0];
	const [today, setToday] = useState(td);
	const [favs, setFavs] = useState<{ id: string }[]>([]);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setToday(e.target.value);
	};
	useEffect(() => {
		const req = async () => {
			const res = await football
				.get('/fixtures', {
					params: {
						date: today,
					},
				})
				.then(res => {
					const respo = favLeagues(res.data.response);
					setFavs(respo);
				})
				.catch(e => console.log(e));
		};
		req();
	}, [today]);
	return (
		<div>
			<input type="date" value={today} onChange={onInputChange} />
			<div>
				{favs.map(fav => (
					<Fixtures key={fav.id} date={today} league={fav} />
				))}
			</div>
		</div>
	);
}
