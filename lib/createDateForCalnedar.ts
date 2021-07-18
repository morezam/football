export const createDateForCalnedar = (date: Date) => {
	const dateArray = date.toLocaleString('en-US').split(',')[0].split('/');
	const dateStr = `${dateArray[2]}-${addZero(dateArray[0])}-${addZero(
		dateArray[1]
	)}`;
	return dateStr;
};

const addZero = (value: string) => {
	return +value < 10 ? '0' + value : value;
};
