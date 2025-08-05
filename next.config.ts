import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next"

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: "img.logo.dev",
				protocol: "https"
			}
		]
	}
};

export default withContentCollections(nextConfig);