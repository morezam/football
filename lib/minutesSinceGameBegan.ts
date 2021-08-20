export const minutesSinceGameBegan = (elapsed: number, status: string) => {
	if (status === 'NS') {
		return null;
	}

	if (status === 'FT') {
		return {
			color: 'var(--gray-2)',
			text: 'FT',
		};
	}
	if (status === 'HT') {
		return {
			color: 'rgb(41, 155, 41)',
			text: 'HT',
		};
	}

	return {
		color: 'rgb(41, 155, 41)',
		text: elapsed,
	};
};
