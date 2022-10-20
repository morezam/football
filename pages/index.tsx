import { Suspense, useEffect, useState, useTransition } from 'react';
import Image from 'next/future/image';
import dynamic from 'next/dynamic';
import styles from '@style/homePage.module.css';
import DarkModeToggle from '@components/darkmode';
import Spinner from '@components/Spinner';
import CustomErrorBoundary from '@components/errorBoundary';
import Head from 'next/head';

const Fixtures = dynamic(() => import('@components/fixture/Fixtures'), {
	suspense: true,
});
const loadDatePicker = () => import('@components/CustomDatePicker');
const CustomDatePicker = dynamic(loadDatePicker, { suspense: true });

const Home = () => {
	const [today, setToday] = useState(() => new Date());
	const [open, setOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [_, startTransition] = useTransition();

	const HRDate = new Date(today).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'short',
	});

	useEffect(() => {
		const savedTheme = localStorage.getItem('DARK_MODE');
		const savedDate = sessionStorage.getItem('DATE');
		savedDate && startTransition(() => setToday(new Date(savedDate)));
		savedTheme && setDarkMode(savedTheme === 'true' ? true : false);
	}, []);

	useEffect(() => {
		localStorage.setItem('DARK_MODE', darkMode.toString());
		darkMode
			? document.documentElement.setAttribute('data-theme', 'dark')
			: document.documentElement.setAttribute('data-theme', 'light');
	}, [darkMode]);

	return (
		<div>
			<Head>
				<title>{HRDate} Footballs</title>
			</Head>
			<div className={styles.picker}>
				<Image
					src="/calendar.svg"
					alt="date picker"
					priority={true}
					width={60}
					height={60}
					id="notclick"
					onMouseEnter={loadDatePicker}
					onFocus={loadDatePicker}
					onClick={() => setOpen(!open)}
					className={styles.img}
				/>
				<Suspense fallback={<Spinner />}>
					<CustomDatePicker
						today={today}
						setToday={setToday}
						open={open}
						setOpen={setOpen}
					/>
				</Suspense>

				<DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
			</div>
			<div className={styles.favs}>
				<CustomErrorBoundary onReset={() => setToday(new Date())}>
					<Suspense fallback={<Spinner />}>
						<Fixtures date={today} />
					</Suspense>
				</CustomErrorBoundary>
			</div>
		</div>
	);
};

export default Home;
