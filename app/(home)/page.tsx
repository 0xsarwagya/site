import { CurrentProject } from "@/components/landing/current";
import { FeaturedTweet } from "@/components/landing/featured-tweet";
import { GithubContributions } from "@/components/landing/github-activity";
import { Hero } from "@/components/landing/hero";
import React from "react";

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
