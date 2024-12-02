"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import experiences from "@/data/experience.json";
import Image from "next/image";
import { useEffect, useState } from "react";

export function WorkExperience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

	const scrollToExperience = () => {
		const experienceSection = document.getElementById("experience");
		if (experienceSection) {
			experienceSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleShowAll = () => {
		setShowAll(!showAll);
		scrollToExperience();
	};

	return (
		<section className="py-8 px-4" id="experience">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
					Work Experience
				</h2>
				<div className="space-y-6">
					{displayedExperiences.map((exp) => (
						<WorkExCard key={exp.company + exp.position} exp={exp} />
					))}
				</div>
				{experiences.length > 3 && (
					<div className="mt-6">
						<Button
							onClick={handleShowAll}
							variant="outline"
							size="sm"
							className="w-full text-gray-600 hover:text-gray-800"
						>
							{showAll
								? "Show Less"
								: `Show ${experiences.length - 3} More Experiences`}
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}

const WorkExCard = ({
	exp,
}: {
	exp: {
		company: string;
		position: string;
		logo: string;
		duration: string;
		description: string[];
		skills: string[];
	};
}) => (
	<Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
		<CardContent className="p-4">
			<div className="flex items-start gap-4">
				<Image
					src={exp.logo}
					alt={`${exp.company} logo`}
					width={40}
					height={40}
					className="rounded-sm"
				/>
				<div className="flex-grow">
					<div className="flex justify-between items-baseline mb-1">
						<h3 className="font-semibold text-lg text-gray-800">
							{exp.position}
						</h3>
						<span className="text-sm text-gray-500">{exp.duration}</span>
					</div>
					<p className="text-base text-gray-600 mb-2">{exp.company}</p>
					<ul className="list-disc list-inside space-y-1 mb-3 text-xs text-gray-600">
						{exp.description.map((item, index) => (
							<li key={exp.description.toString()}>{item}</li>
						))}
					</ul>
					<div className="flex flex-wrap gap-1">
						{exp.skills.map((skill) => (
							<Badge
								key={skill}
								variant="secondary"
								className="text-xs bg-gray-100 text-gray-600"
							>
								{skill}
							</Badge>
						))}
					</div>
				</div>
			</div>
		</CardContent>
	</Card>
);
