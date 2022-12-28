module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.api-sports.io',
			},
		],
		minimumCacheTTL: 31536000,
	},
};
