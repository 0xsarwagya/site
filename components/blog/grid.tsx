import { allPosts } from "content-collections";
import Link from "next/link";

export const BlogDisplay = () => {
	const arrangedPosts = allPosts.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});

	return (
		<section className="relative border p-4 md:p-8 lg:p-12">
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
				{arrangedPosts.map((post) => (
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
		</section>
	);
};
