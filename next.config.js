/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'platform-lookaside.fbsbx.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com',
			},
		],
	},
};

module.exports = nextConfig;
