module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.api-sports.io',
			},
		],
		minimumCacheTTL: 31536000,
	},
};
