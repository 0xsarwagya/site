import { Header } from "@/components/shared/header";
import { MDX } from "@/components/ui/mdx";
import { ReaderIcon } from "@radix-ui/react-icons";
import { allPosts } from "content-collections";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React, { use } from "react";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(
	{ params }: { params: Params },
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// read route params
	const slug = (await params).slug;

	const blog = allPosts.find((blog) => blog._meta.path === slug[0]);

	return {
		title: blog?.title,
		description: blog?.description,
	};
}

export default function Page(props: {
	params: Params;
}) {
	const params = use(props.params);
	const slug = params.slug;
	const blog = allPosts.find((blog) => blog._meta.path === slug[0]);

	if (!blog) {
		return notFound();
	}

	return (
		<React.Fragment>
			<Header
				title={blog.readingTime}
				header={blog.title}
				cta={{
					text: `Published on ${blog.date}`,
					link: "#content",
					icon: ReaderIcon,
				}}
			/>
			<section className="relative border p-4 md:p-8 lg:p-12" id="content">
				<MDX code={blog.content} />
			</section>
		</React.Fragment>
	);
}
