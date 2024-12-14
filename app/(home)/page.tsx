import { CurrentProject } from "@/components/landing/current";
import { FeaturedTweet } from "@/components/landing/featured-tweet";
import { GithubContributions } from "@/components/landing/github-activity";
import { Hero } from "@/components/landing/hero";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Home",
};

export default function HomePage() {
	return (
		<React.Fragment>
			<Hero />
			<CurrentProject />
			<GithubContributions />
			<FeaturedTweet />
		</React.Fragment>
	);
}
