import { allPosts } from "@/.content-collections/generated";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const fixedRoutes = [
		{
			url: "https://www.0xsarwagya.codes",
			lastModified: new Date(),
		},
		{
			url: "https://www.0xsarwagya.codes/work",
			lastModified: new Date(),
		},
		{
			url: "https://www.0xsarwagya.codes/projects",
			lastModified: new Date(),
			changeFrequency: "always",
		},
		{
			url: "https://www.0xsarwagya.codes/blog",
			lastModified: new Date(),
		},
		{
			url: "https://www.0xsarwagya.codes/guest-book",
			lastModified: new Date(),
		},
		{
			url: "https://www.0xsarwagya.codes/resume.pdf",
			lastModified: new Date(),
		},
	];

	const blogRoutes = allPosts.map((post) => {
		return {
			url: `https://www.0xsarwagya.codes/blog/${post._meta.path}`,
			lastModified: new Date(),
		};
	});

	return [...blogRoutes, ...fixedRoutes];
}
