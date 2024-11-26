import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
	name: string;
	description: string;
	url: string;
	stars: number;
	image: string;
}

export function ProjectCard({
	name,
	description,
	url,
	stars,
	image,
}: ProjectCardProps) {
	return (
		<Card className="overflow-hidden">
			<CardHeader className="p-0">
				<Image
					src={image}
					alt={name}
					width={400}
					height={200}
					className="w-full h-48 object-cover"
				/>
			</CardHeader>
			<CardContent className="p-4">
				<CardTitle className="text-lg font-semibold mb-2">{name}</CardTitle>
				<p className="text-sm text-gray-600 mb-4">{description}</p>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 hover:underline text-sm"
				>
					View on GitHub
				</a>
			</CardContent>
			<CardFooter className="p-4 pt-0 flex justify-between items-center">
				<Badge variant={"outline"} className="flex items-center gap-1">
					<Star className="w-4 h-4" />
					<span>{stars}</span>
				</Badge>
			</CardFooter>
		</Card>
	);
}
