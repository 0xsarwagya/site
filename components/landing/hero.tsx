import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Hero() {
	return (
		<section className="relative border p-4 md:p-8 lg:p-12">
			{/* Main */}
			<Card className="shadow-none flex flex-col justify-center align-middle items-center p-8 md:p-16 lg:p-24">
				<Image
					className="h-12 w-12 overflow-hidden rounded-full object-cover"
					alt="Me"
					src={"/memoji.png"}
					width={80}
					height={80}
				/>
				<span className="text-sm md:text-xs text-muted-foreground">
					Sarwagya Singh
				</span>
				<CardHeader className="max-w-3xl text-center font-bold text-2xl leading-tight tracking-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
					Indian Cybersecurity Student and Engineer Currently Based In
					Stuttgart, Germany 🇩🇪.
				</CardHeader>
				<CardContent className="grid grid-cols-2 gap-2">
					<Link
						href={"/resume.pdf"}
						target="_blank"
						prefetch
						className={buttonVariants({
							variant: "outline",
							size: "sm",
						})}
					>
						Resume
					</Link>
					<Link
						href={"mailto:sarwagyasingh69@gmail.com"}
						prefetch
						className={buttonVariants({
							variant: "secondary",
							size: "sm",
						})}
					>
						Get in Touch
					</Link>
				</CardContent>
			</Card>
		</section>
	);
}
