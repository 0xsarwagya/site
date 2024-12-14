import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Data = {
	degree?: string;
	institute?: string;
	position?: string;
	company?: string;
	location: string;
	from: string;
	to: string | null;
	url: string;
	description: string;
};

type DataList = Data[];

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

const formatDate = (date: string | null) => {
	try {
		if (date == null) {
			return "Ongoing";
		}

		const [day, month, year] = date.split("/").map(Number); // Split and convert to numbers
		const parsedDate = new Date(year, month - 1, day); // Create a Date object (month is 0-based)
		return parsedDate.getFullYear(); // Extract the full year
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const DisplayGrid = ({
	data,
	title,
	subtitle,
}: {
	data: DataList;
	title: string;
	subtitle: string;
}) => {
	return (
		<section className="relative border px-4 md:px-8 lg:px-12 border-t-0">
			<Card className="py-4 bg-transparent shadow-none border-none flex items-center justify-center w-full flex-col text-center">
				<CardHeader className="max-w-xl font-bold text-lg leading-tight tracking-tight sm:text-xl sm:leading-tight md:text-2xl md:leading-tight">
					{title}
				</CardHeader>
				<CardDescription className="text-sm text-muted-foreground">
					{subtitle}
				</CardDescription>
			</Card>
			<div className="grid grid-cols-1 md:grid-cols-2">
				{data.map((item) => (
					<Card
						key={item.degree}
						className="shadow-none rounded-none h-full flex flex-col"
					>
						<CardContent className="pt-6 hover:bg-dashed h-full flex flex-col justify-between">
							<div className="flex gap-6">
								{/* Logo */}
								<Link
									href={item.url}
									className="w-12 h-12 shrink-0"
									target="_blank"
								>
									<Image
										src={getLogo(item.url)}
										alt={`${item.institute} logo`}
										width={48}
										height={48}
										className="object-contain rounded-full"
									/>
								</Link>
								{/* Content */}
								<div className="space-y-4 flex-grow">
									{/* Title and Company */}
									<div className="space-y-1">
										<h3 className="text-lg font-semibold">
											{item.degree || item.position}
										</h3>
										<h4 className="text-base text-muted-foreground font-medium">
											{item.institute || item.company}
										</h4>
									</div>

									{/* Description */}
									<p className="font-thin text-sm leading-relaxed">
										{item.description}
									</p>
									<p className="text-xs text-muted-foreground mt-4">
										{formatDate(item.from)} — {formatDate(item.to)} •{" "}
										{item.location}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
				{data.length % 2 !== 0 && (
					<div className="hidden md:block">
						<Card className="shadow-none rounded-none bg-dashed h-full" />
					</div>
				)}
			</div>
		</section>
	);
};
