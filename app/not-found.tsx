import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
	return (
		<section className="relative border p-4 md:p-8 lg:p-12">
			{/* Main */}
			<Card className="shadow-none flex flex-col justify-center align-middle items-center p-8 md:p-16 lg:p-24">
				<Image
					className="rounded-full"
					alt="Me"
					src={"/memoji.png"}
					width={80}
					height={80}
				/>
				<span className="text-sm md:text-xs text-muted-foreground">Oops!</span>
				<CardHeader
					className={cn(
						"max-w-4xl text-center font-bold text-3xl leading-tight tracking-tight",
						"sm:text-4xl sm:leading-tight",
						"md:text-5xl md:leading-tight",
					)}
				>
					Page Not Found
				</CardHeader>
				<CardContent>
					<Link
						href={"/"}
						target="_blank"
						prefetch
						className={buttonVariants({
							variant: "outline",
							size: "default",
						})}
					>
						Back Home
					</Link>
				</CardContent>
			</Card>
		</section>
	);
}
