import { useEffect, useState } from 'react';
import football from '../api/football';
import { favLeagues } from '../lib/favLeagues';
import Fixtures from '../components/fixture/Fixtures';
import DatePicker from 'react-datepicker';
import { League } from '../types/league';

export default function Home() {
	const [today, setToday] = useState(new Date());
	const [favs, setFavs] = useState<League[]>();

	useEffect(() => {
		const td = today.toISOString().split('T')[0];
		let mounted = true;
		const req = async () => {
			const res = await football
				.get('/fixtures', {
					params: {
						date: td,
					},
				})
				.then(res => {
					if (mounted) {
						const respo = favLeagues(res.data.response);
						setFavs(respo);
					}
				})
				.catch(e => console.log(e));
		};
		req();
		return () => (mounted = false);
	}, [today]);
	return (
		<div>
			<DatePicker
				selected={today}
				onChange={(date: Date) => {
					setToday(date);
				}}
				showMonthDropdown
				dropdownMode="select"
				dateFormat="yyyy-MM-dd"
				calendarClassName="datePicker"
			/>
			<button onClick={() => setToday(new Date())}>Today</button>
			<div style={{ paddingBottom: '7rem' }}>
				{favs &&
					favs.map(fav => <Fixtures key={fav.id} date={today} league={fav} />)}
			</div>
		</div>
	);
}
