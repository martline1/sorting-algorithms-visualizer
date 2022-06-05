/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode : true,
	redirects : async () => [
		{
			source      : "/",
			destination : "/algorithms/quick_sort",
			permanent   : false,
		},
	],
};

module.exports = nextConfig;
