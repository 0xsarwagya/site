/**
 * Next.js configuration for optimized production performance.
 */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: false, // Enforces type checking during builds
	},
	// ESLint configuration to skip linting during build to speed up production builds
	eslint: {
		ignoreDuringBuilds: true, // Disable ESLint during production builds for faster builds
	},
	pageExtensions: ["mdx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{
				hostname: "github.com",
				protocol: "https",
			},
			{
				hostname: "user-images.githubusercontent.com",
				protocol: "https",
			},
			{
				hostname: "socialify.git.ci",
				protocol: "https",
			},
			{
				hostname: "encrypted-tbn0.gstatic.com",
				protocol: "https",
			},
			{
				hostname: "img.icons8.com",
				protocol: "https",
			},
			{
				hostname: "media.licdn.com",
				protocol: "https",
			},
			{
				hostname: "socialify.git.ci",
				protocol: "https",
			},
		],
	},
};

module.exports = nextConfig;
