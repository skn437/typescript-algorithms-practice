/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"YOUR_EXTERNAL_IMAGE_DOMAIN_HERE_1",
			"YOUR_EXTERNAL_IMAGE_DOMAIN_HERE_SO_ON",
			"firebasestorage.googleapis.com",
		],
	},
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
};

export default nextConfig;
