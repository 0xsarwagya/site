import { BlogDisplay } from "@/components/blog/grid";
import { Header } from "@/components/shared/header";
import React from "react";

export default function BlogLandingPage() {
	return (
		<React.Fragment>
			{/* Header */}
			<Header title="Blog" header="My Thoughts On Some Things" />

			{/* Posts */}
			<BlogDisplay />
		</React.Fragment>
	);
}
