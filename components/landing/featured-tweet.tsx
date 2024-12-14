import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Tweet } from "react-tweet";

export const FeaturedTweet = () => {
	return (
		<section className="relative border px-4 md:px-8 lg:px-12 border-t-0">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<Card className="bg-dashed col-span-1 md:col-span-1 lg:col-span-2 rounded-none shadow-none border-none justify-center flex items-center">
					<Tweet id="1867346389728100660" />
				</Card>
				<Card className="col-span-1 rounded-none shadow-none border-none p-6 flex h-full flex-col items-start justify-between gap-4">
					<CardContent className="space-y-4">
						<CardTitle className="text-sm lg:text-xs text-muted-foreground">
							Featured tweet
						</CardTitle>
						<CardDescription className="text-primary text-sm md:text-base">
							I wrote a thread about a new hip-hop e-cypher platform I am
							building. It&apos;s a free, open space for Indian hip-hop artists
							to join online e-cyphers, share their work, and connect.
						</CardDescription>
					</CardContent>
					<div>
						<Link
							className={buttonVariants({
								variant: "outline",
								className: "gap-2",
							})}
							href={"https://x.com/0xsarwagya/status/1867346389728100660"}
							target="_blank"
						>
							Read On X
							<ArrowTopRightIcon />
						</Link>
						<Link
							className={buttonVariants({
								variant: "link",
								className: "gap-2",
							})}
							href={"https://x.com/0xsarwagya"}
							target="_blank"
						>
							View all tweets
							<ArrowTopRightIcon />
						</Link>
					</div>
				</Card>
			</div>
		</section>
	);
};
