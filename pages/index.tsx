import { useEffect, useState } from 'react';
import Image from 'next/image';
import Fixtures from '../components/fixture/Fixtures';
import styles from '../style/homePage.module.css';
import CustomDatePicker from '../components/CustomDatePicker';
import DarkModeToggle from '../components/darkmode';

export default function Home() {
	const [today, setToday] = useState(new Date());
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

	return (
		<div>
			<div className={styles.picker}>
				<CustomDatePicker
					today={today}
					setToday={setToday}
					open={open}
					setOpen={setOpen}
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
				<DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
			</div>
			<div className={styles.favs}>
				<Fixtures date={today} />
			</div>
		</div>
	);
}
