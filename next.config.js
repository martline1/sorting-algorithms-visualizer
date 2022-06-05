/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode : true,
	redirects : async () => [
		{
			source      : "/",
			destination : "/algorithms/quick",
			permanent   : false,
		},
		{
			source      : "/algorithms",
			destination : "/algorithms/quick",
			permanent   : false,
		},
	],
};

module.exports = nextConfig;
