import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export const ProfileCard = () => {
	return (
		<div>
			<div className="container py-24 lg:py-32">
				{/* 
					- Announcement Badge
				*/}
				<div className="flex justify-center">
					<Link
						className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition-colors"
						href="https://github.com/0xsarwagya?tab=repositories"
						target="_blank"
					>
						Upcoming Cybersecurity Engineer! Check out my Projects
						<span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
							<ArrowRightIcon className="w-4 h-4" />
						</span>
					</Link>
				</div>
				{/* 
					- Name
				*/}
				<div className="mt-5 max-w-2xl text-center mx-auto">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						Sarwagya Singh
					</h1>
				</div>
				{/* 
					- Job Description
				*/}
				<div className="mt-5 max-w-3xl text-center mx-auto">
					<p className="text-base text-muted-foreground">
						Upcoming Cybersecurity Engineer
					</p>
					<p className="text-base text-muted-foreground">
						Student @ Technical University of Munich (Campus Heilbronn)
					</p>
				</div>
				{/* 
					- Location
				*/}
				<div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
					<span className="inline-flex items-center text-sm decoration-2 hover:underline font-medium">
						🇩🇪 Ludwigsburg, Germany
					</span>
				</div>
			</div>
		</div>
	);
};
