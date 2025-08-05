import { BlogDisplay } from "@/components/blog/grid";
import { Header } from "@/components/shared/header";
import type { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
	title: "Blog",
};

type SearchParams = {
	page?: string;
	[key: string]: string | string[] | undefined;
};

// Component that handles the async part
async function BlogContent({ searchParams }: { searchParams: SearchParams }) {
	// Get the current page from search params, default to 1
	const page = searchParams.page;
	const currentPage = typeof page === "string" ? Number(page) : 1;

	return <BlogDisplay currentPage={currentPage} />;
}

export default function BlogLandingPage({
	searchParams,
}: {
	searchParams: Promise<SearchParams> | SearchParams;
}) {
	// If searchParams is a Promise, we'll handle it in the BlogContent component
	const resolvedSearchParams =
		searchParams instanceof Promise ? null : searchParams;

	return (
		<React.Fragment>
			{/* Header - Can be shown immediately */}
			<Header title="Blog" header="My Thoughts On Some Things" />

			{/* Posts - Wrapped in Suspense for async loading */}
			<Suspense
				fallback={<div className="text-center py-8">Loading posts...</div>}
			>
				{resolvedSearchParams ? (
					<BlogContent searchParams={resolvedSearchParams} />
				) : (
					<AsyncBlogContent
						searchParams={searchParams as Promise<SearchParams>}
					/>
				)}
			</Suspense>
		</React.Fragment>
	);
}

// Helper component to handle the async case
async function AsyncBlogContent({
	searchParams,
}: { searchParams: Promise<SearchParams> }) {
	const resolvedParams = await searchParams;
	const page = resolvedParams.page;
	const currentPage = typeof page === "string" ? Number(page) : 1;

	return <BlogDisplay currentPage={currentPage} />;
}
