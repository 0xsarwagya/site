import { Card, CardContent, CardHeader } from "@/components/ui/card";
import technologies from "@/data/techstack.json";
import Image from "next/image";
import Link from "next/link";

const getLogo = (url: string) => {
	try {
		const hostname = new URL(url).hostname;

		// biome-ignore lint/style/noNonNullAssertion: used here TBA @todo
		return `https://img.logo.dev/${hostname}?token=${encodeURIComponent(process.env.NEXT_PUBLIC_LOGO_DEV_KEY!)}`;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const TechStack = () => {
	return (
		<section className="relative border px-4 md:px-8 lg:px-12 border-t-0">
			<Card className="py-4 bg-transparent shadow-none border-none flex items-center justify-center w-full flex-col text-center">
				<CardHeader className="max-w-xl font-bold text-lg leading-tight tracking-tight sm:text-xl sm:leading-tight md:text-2xl md:leading-tight">
					Tech Stack
				</CardHeader>
			</Card>
			<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-center items-center mx-auto max-w-full">
				{technologies.map((tech) => (
					<Link
						href={tech.url}
						key={tech.name}
						target="_blank"
						className="group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
					>
						<Card className="h-full border-none shadow-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg">
							<CardContent className="flex flex-col items-center justify-center p-4 h-full">
								<div className="relative w-16 h-16 mb-2">
									<Image
										src={getLogo(tech.url)}
										alt={`${tech.name} logo`}
										layout="fill"
										objectFit="contain"
										className="rounded-full"
									/>
								</div>
								<p className="text-center font-medium">{tech.name}</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
};
