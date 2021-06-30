import axios from 'axios';

export default axios.create({
	baseURL: 'https://v3.football.api-sports.io',
	headers: {
		'x-rapidapi-key': 'a2a48fe3dec3937fd991c765d9570b58',
		'x-rapidapi-host': 'v3.football.api-sports.io',
	},
});

// main = f2f535dfdd59b81be6f378a7c6685ec8
// second = a2a48fe3dec3937fd991c765d9570b58
