import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import type { IconProps } from "@radix-ui/react-icons/dist/types";
import Link from "next/link";
import type React from "react";

export function Header({
	title,
	header,
	cta,
}: {
	title: string;
	header: string;
	cta?: {
		text: string;
		link: string;
		icon: React.ForwardRefExoticComponent<
			IconProps & React.RefAttributes<SVGSVGElement>
		>;
		external?: boolean;
	};
}) {
	return (
		<section className="relative border p-4 md:p-8 lg:p-12">
			{/* Main */}
			<Card className="bg-dashed shadow-none flex flex-col justify-center align-middle items-center p-8 md:p-16 lg:p-24">
				<span className="text-sm md:text-xs text-muted-foreground">
					{title}
				</span>
				<CardHeader className="max-w-3xl text-center font-bold text-2xl leading-tight tracking-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
					{header}
				</CardHeader>
				<CardContent>
					{cta && (
						<Link
							href={cta.link}
							prefetch
							className={buttonVariants({
								variant: "default",
								size: "sm",
							})}
							target={cta.external === true ? "_blank" : "_self"}
						>
							<cta.icon className="w-16 h-16" />
							{cta.text}
						</Link>
					)}
				</CardContent>
			</Card>
		</section>
	);
}
