import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { readingTime } from "reading-time-estimator";

const posts = defineCollection({
	name: "posts",
	directory: "blog",
	include: "**/*.mdx",
	schema: (z) => ({
		title: z.string(),
		description: z.string().max(200),
		date: z.string(),
	}),
	transform: async (document, context) => {
		const body = await compileMDX(context, document);
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "short",
			day: "numeric",
		};
		const formattedDate = new Date(document.date).toLocaleDateString(
			"en-US",
			options,
		);

		return {
			...document,
			readingTime: readingTime(document.content).text,
			content: body,
			date: formattedDate,
		};
	},
});

export default defineConfig({
	collections: [posts],
});
