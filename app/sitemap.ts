import { allPosts } from "@/.content-collections/generated";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const fixedRoutes = [
		{
			url: "https://sarwagya.is-a.dev",
			lastModified: new Date(),
		},
		{
			url: "https://sarwagya.is-a.dev/work",
			lastModified: new Date(),
		},
		{
			url: "https://sarwagya.is-a.dev/projects",
			lastModified: new Date(),
			changeFrequency: "always",
		},
		{
			url: "https://sarwagya.is-a.dev/blog",
			lastModified: new Date(),
		},
		{
			url: "https://sarwagya.is-a.dev/guest-book",
			lastModified: new Date(),
		},
		{
			url: "https://sarwagya.is-a.dev/resume.pdf",
			lastModified: new Date(),
		},
	];

	const blogRoutes = allPosts.map((post) => {
		return {
			url: `https://sarwagya.is-a.dev/blog/${post._meta.path}`,
			lastModified: new Date(),
		};
	});

	return [...blogRoutes, ...fixedRoutes];
}
