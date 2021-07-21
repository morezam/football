import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import styles from '../style/homePage.module.css';

interface CustomDatePickerProps {
	today: Date;
	setToday: Dispatch<SetStateAction<Date>>;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const CustomDatePicker = ({
	today,
	setToday,
	open,
	setOpen,
}: CustomDatePickerProps) => {
	return (
		<>
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
		</>
	);
};

export default CustomDatePicker;
