export const createHRDate = (date: string, short: boolean = true) => {
	const HRDate = new Date(date).toLocaleDateString('en-US', {
		hour12: false,
		weekday: `${short ? 'long' : 'short'}`,
		day: 'numeric',
		month: `${short ? 'long' : 'short'}`,
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});

	return HRDate;
};
