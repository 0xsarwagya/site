import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Blog",
};

export default function Blog() {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<h1 className="text-4xl font-bold text-center">Blog. Coming soon.</h1>
		</div>
	);
}
