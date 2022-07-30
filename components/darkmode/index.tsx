import { Dispatch, SetStateAction } from 'react';
import styles from './darkMode.module.css';

interface DarkModeToggleProps {
	darkMode: string;
	setDarkMode: Dispatch<SetStateAction<string>>;
}

const DarkModeToggle = ({ darkMode, setDarkMode }: DarkModeToggleProps) => {
	const onBtnClick = () => {
		setDarkMode(darkMode === 'light' ? 'dark' : 'light');
	};

	return (
		<div onClick={onBtnClick} className={styles.darkMode}>
			<div className={styles.body}>
				<button
					className={styles.circle}
					style={{
						left: `${darkMode === 'light' ? '0' : '2rem'}`,
					}}></button>
			</div>
		</div>
	);
};

export default DarkModeToggle;
