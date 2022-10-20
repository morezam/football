import { Dispatch, memo, SetStateAction } from 'react';
import styles from './darkMode.module.css';

interface DarkModeToggleProps {
	darkMode: boolean;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const DarkModeToggle = memo(
	({ darkMode, setDarkMode }: DarkModeToggleProps) => {
		const onBtnClick = () => {
			setDarkMode(!darkMode);
		};

		return (
			<div onClick={onBtnClick} className={styles.darkMode}>
				<div className={styles.body}>
					<button
						aria-label="dark mode toggler"
						className={styles.circle}
						style={{
							left: `${darkMode ? '2rem' : '0'}`,
						}}></button>
				</div>
			</div>
		);
	}
);

DarkModeToggle.displayName = 'DarkModeToggle';

export default DarkModeToggle;
