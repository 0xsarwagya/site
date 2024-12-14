"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
	return (
		<header className="w-full flex justify-between items-center p-2">
			<div className="flex items-center">
				<Image
					alt="Me"
					src={"/memoji.png"}
					width={40}
					height={40}
					loading="lazy"
				/>
			</div>
			<div className="hidden md:flex gap-6 text-sm lg:text-xs items-center">
				<Link href={"/"} prefetch>
					Home
				</Link>
				<Link href={"/work"} prefetch>
					Work
				</Link>
				<Link href={"/blog"} prefetch>
					Blogs
				</Link>
				<Link href={"/guest-book"} prefetch>
					Guest book
				</Link>
			</div>
			<Link
				href={"/resume.pdf"}
				className={cn(
					buttonVariants({
						variant: "outline",
						size: "sm",
					}),
					"hidden md:flex",
				)}
				target="_blank"
			>
				Resume
			</Link>
			<Button variant={"outline"} size={"sm"} className="md:hidden">
				<HamburgerMenuIcon />
			</Button>
		</header>
	);
};
