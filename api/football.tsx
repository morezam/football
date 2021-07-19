import axios from 'axios';

export default axios.create({
	baseURL: 'https://v3.football.api-sports.io',
	headers: {
		'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
		'x-rapidapi-host': 'v3.football.api-sports.io',
	},
});
