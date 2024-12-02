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
		<section className="py-8 px-4" id="experience">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold mb-6 text-primary border-b pb-2">
					Projects
				</h2>
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
