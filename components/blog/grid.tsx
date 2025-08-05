"use client";

import { allPosts } from "content-collections";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const POSTS_PER_PAGE = 9; // Number of posts per page

interface BlogDisplayProps {
	currentPage: number;
}

export const BlogDisplay = ({ currentPage }: BlogDisplayProps) => {
	const router = useRouter();
	const pathname = usePathname();

	// Sort posts by date
	const sortedPosts = [...allPosts].sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});

	// Calculate pagination
	const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const paginatedPosts = sortedPosts.slice(
		startIndex,
		startIndex + POSTS_PER_PAGE,
	);

	// Handle page change
	const handlePageChange = (newPage: number) => {
		if (newPage < 1 || newPage > Math.ceil(allPosts.length / POSTS_PER_PAGE)) {
			return; // Don't navigate if page is out of bounds
		}
		const params = new URLSearchParams();
		params.set("page", newPage.toString());
		router.push(`${pathname}?${params.toString()}`);
		// Scroll to top of the page
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<section id="content" className="relative border p-4 md:p-8 lg:p-12">
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
				{paginatedPosts.map((post) => (
					<Link
						className="px-6 py-4"
						key={post.title}
						href={`/blog/${post._meta.path}`}
						prefetch
					>
						<div className="max-w-6xl mx-auto">
							<time
								className="text-muted-foreground text-sm"
								dateTime={post.date}
								aria-label={post.title}
							>
								{post.date}
							</time>
							<p className="text-sm md:text-base lg:text-lg font-light mt-2 hover:underline hover:underline-offset-2">
								{post.title}
							</p>
							<p className="text-muted-foreground text-sm">
								{post.description}
							</p>
						</div>
					</Link>
				))}
			</div>

			{/* Pagination Controls */}
			{totalPages > 1 && (
				<div className="flex justify-center mt-8 space-x-2">
					<button
						type="button"
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-800 disabled:opacity-50"
						aria-label="Previous page"
					>
						Previous
					</button>

					<div className="flex items-center space-x-1">
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<button
								type="button"
								key={page}
								onClick={() => handlePageChange(page)}
								className={`px-3 py-1 rounded-md ${
									currentPage === page
										? "bg-black text-white dark:bg-white dark:text-black"
										: "hover:bg-gray-100 dark:hover:bg-gray-800"
								}`}
								aria-current={currentPage === page ? "page" : undefined}
							>
								{page}
							</button>
						))}
					</div>

					<button
						type="button"
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-800 disabled:opacity-50"
						aria-label="Next page"
					>
						Next
					</button>
				</div>
			)}
		</section>
	);
};
