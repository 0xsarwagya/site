"use client";

import { Button } from "@/components/ui/button";
import {
	Cross1Icon,
	DesktopIcon,
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	MoonIcon,
	SunIcon,
} from "@radix-ui/react-icons";
import { allPosts } from "content-collections";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";

const getFeatured = () => {
	return allPosts.length > 4 ? allPosts.slice(0, 4) : allPosts;
};

export const Footer = () => {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		console.log(theme);
	}, [theme]);

	return (
		<footer className="w-full border-t-0 border">
			<div className="container grid grid-cols-1 gap-12 px-4 py-12 md:grid-cols-4 md:px-6">
				{/* Pages */}
				<div className="space-y-4">
					<h3 className="text-sm font-medium underline underline-offset-4">
						Pages
					</h3>
					<nav className="flex flex-col space-y-3 text-sm text-muted-foreground">
						<Link href="/">Home</Link>
						<Link href="/work">Work</Link>
						<Link href="/projects">Projects</Link>
						<Link href="/blog">Blog</Link>
						<Link href="/guest-book">Guest Book</Link>
					</nav>
				</div>
				{/* Projects */}
				<div className="space-y-4">
					<h3 className="text-sm font-medium underline underline-offset-4">
						Projects
					</h3>
					<nav className="flex flex-col space-y-3 text-sm text-muted-foreground">
						<Link href="https://github.com/0xsarwagya/arunya" target="_blank">
							Arunya
						</Link>
						<Link
							href="https://github.com/0xsarwagya/vibestart"
							target="_blank"
						>
							Vibestart
						</Link>
						<Link href="https://github.com/0xsarwagya/sniffa" target="_blank">
							Sniffa
						</Link>
						<Link
							href="https://github.com/0xsarwagya/scramblify"
							target="_blank"
						>
							Scramblify
						</Link>
						<Link href="https://github.com/0xsarwagya/cvssify" target="_blank">
							CVSSify
						</Link>
					</nav>
				</div>
				{/* Blogs */}
				<div className="space-y-4">
					<h3 className="text-sm font-medium underline underline-offset-4">
						Posts
					</h3>
					<nav className="flex flex-col space-y-3 text-sm text-muted-foreground">
						{getFeatured().map((data, i) => (
							<Link href={`/blog/${data._meta.path}`} key={data._meta.path}>
								{data.title}
							</Link>
						))}
					</nav>
				</div>
				{/* Socials */}
				<div className="space-y-4">
					<h3 className="text-sm font-medium underline underline-offset-4">
						Socials
					</h3>
					<nav className="flex flex-col space-y-3 text-sm text-muted-foreground">
						<Link
							href="https://github.com/0xsarwagya"
							className="flex gap-x-2"
							target="_blank"
						>
							<GitHubLogoIcon /> Github
						</Link>
						<Link
							href="https://x.com/0xsarwagya"
							className="flex gap-x-2"
							target="_blank"
						>
							<Cross1Icon /> X
						</Link>
						<Link
							href="https://linkedin.com/in/0xsarwagya"
							className="flex gap-x-2"
							target="_blank"
						>
							<LinkedInLogoIcon /> Linkedin
						</Link>
						<Link
							href="https://instagram.com/0xsarwagya"
							className="flex gap-x-2"
							target="_blank"
						>
							<InstagramLogoIcon /> Instagram
						</Link>
					</nav>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="container flex flex-col gap-4 border-t px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
				<p className="text-sm text-muted-foreground">
					© 2024 Sarwagya Singh. All rights reserved.
				</p>

				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						size="icon"
						className="h-8 w-8"
						onClick={() => setTheme("system")}
					>
						<DesktopIcon className="h-4 w-4" />
						<span className="sr-only">System theme</span>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="h-8 w-8"
						onClick={(e) => {
							console.log(e);
							setTheme("light");
						}}
					>
						<SunIcon className="h-4 w-4" />
						<span className="sr-only">Light theme</span>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="h-8 w-8"
						onClick={(e) => {
							console.log(e);
							setTheme("dark");
						}}
					>
						<MoonIcon className="h-4 w-4" />
						<span className="sr-only">Dark theme</span>
					</Button>
				</div>
			</div>
		</footer>
	);
};
