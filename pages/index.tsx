import { useEffect, useState } from 'react';
import Image from 'next/image';
import football from '../api/football';
import { favLeagues } from '../lib/favLeagues';
import Fixtures from '../components/fixture/Fixtures';
import DatePicker from 'react-datepicker';
import { League } from '../types/league';
import { createDateForCalnedar } from '../lib/createDateForCalnedar';
import styles from '../style/homePage.module.css';
import NotFound from '../components/NotFound';

export default function Home() {
	const [today, setToday] = useState(new Date());
	const [favs, setFavs] = useState<League[]>();
	const [open, setOpen] = useState(false);
	const [darkMode, setDarkMode] = useState('light');

	useEffect(() => {
		const savedTheme = localStorage.getItem('DARK_MODE');
		const savedDate = sessionStorage.getItem('DATE');
		savedTheme && setDarkMode(savedTheme);
		savedDate && setToday(new Date(savedDate));
	}, []);

	useEffect(() => {
		localStorage.setItem('DARK_MODE', darkMode);
		darkMode === 'dark'
			? document.documentElement.setAttribute('data-theme', 'dark')
			: document.documentElement.setAttribute('data-theme', 'light');
	}, [darkMode]);

	const onBtnClick = () => {
		setDarkMode(darkMode === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		const td = createDateForCalnedar(today);
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
		return () => {
			mounted = false;
		};
	}, [today]);

	return (
		<div>
			<div className={styles.picker}>
				<DatePicker
					selected={today}
					onChange={(date: Date) => {
						setToday(date);
						sessionStorage.setItem('DATE', date.toString());
					}}
					open={open}
					onSelect={() => setOpen(false)}
					onClickOutside={e => {
						if ((e.target as Element).id !== 'notclick') {
							setOpen(false);
						}
					}}
					showMonthDropdown
					dropdownMode="select"
					dateFormat="yyyy-MM-dd"
					calendarClassName="datePicker"
					className={styles.datePicker}
				/>
				<Image
					src="/calendar.svg"
					alt="calendar"
					width={60}
					height={60}
					id="notclick"
					onClick={() => setOpen(!open)}
					className={styles.img}
				/>
				<div onClick={onBtnClick} className={styles.darkMode}>
					<div className={styles.body}>
						<div
							className={styles.circle}
							style={{
								left: `${darkMode === 'light' ? '0' : '2rem'}`,
							}}></div>
					</div>
				</div>
			</div>
			<div className={styles.favs}>
				{favs &&
					favs.map(fav => <Fixtures key={fav.id} date={today} league={fav} />)}
				{!favs || (favs.length === 0 && <NotFound title="Matches" />)}
			</div>
		</div>
	);
}
