import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
				<CardHeader className="max-w-3xl text-center font-bold text-2xl leading-tight tracking-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
					Page Not Found
				</CardHeader>
				<CardContent>
					<Link
						href={"/"}
						target="_blank"
						prefetch
						className={buttonVariants({
							variant: "outline",
							size: "sm",
						})}
					>
						Back Home
					</Link>
				</CardContent>
			</Card>
		</section>
	);
}
