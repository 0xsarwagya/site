import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export const CurrentProject = () => {
	return (
		<section className="relative border px-4 md:px-8 lg:px-12 border-t-0">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<Card className="col-span-1 rounded-none shadow-none border-none p-6 flex h-full flex-col items-start justify-between gap-4">
					<CardContent className="space-y-4">
						<CardTitle className="text-sm lg:text-xs text-muted-foreground">
							Now
						</CardTitle>
						<CardDescription className="text-primary text-sm md:text-base">
							I&apos;m currently focused on building Arunya, a work-in-progress,
							privacy-first, open-source analytics tool designed to provide
							insights without compromising user privacy.
						</CardDescription>
					</CardContent>
					<Link
						className={buttonVariants({
							variant: "outline",
							className: "gap-2",
						})}
						href={"https://github.com/0xsarwagya/arunya/"}
						target="_blank"
					>
						Check it out
						<ArrowTopRightIcon />
					</Link>
				</Card>
				<Card className="bg-dashed col-span-1 md:col-span-1 lg:col-span-2 rounded-none shadow-none border-none">
					<Image
						src="/projects/arunya.png"
						alt="me"
						width={1080}
						height={2880}
						className="w-full"
					/>
				</Card>
			</div>
		</section>
	);
};
