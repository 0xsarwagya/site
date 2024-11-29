"use client";

import projects from "@/data/projects.json";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ProjectCard } from "../projects/card";

const top5Projects = projects.slice(0, 6);

export function ProjectShowcase() {
	const [_, setHoveredIndex] = useState<number | null>(null);

	return (
		<section className="py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<AnimatePresence>
						{top5Projects.map((project, index) => (
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
		</section>
	);
}
