"use client";

import { ProjectCard } from "@/components/projects/card";
import projects from "@/data/projects.json";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export const ProjectDisplay = () => {
	const [_, setHoveredIndex] = useState<number | null>(null);
	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-8">My Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<AnimatePresence>
					{projects.map((project, index) => (
						<ProjectCard
							key={project.name}
							{...project}
							index={index}
							setHoveredIndex={setHoveredIndex}
						/>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};
