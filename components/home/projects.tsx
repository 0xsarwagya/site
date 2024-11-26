"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import projects from "@/data/projects.json";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const top5Projects = projects.slice(0, 6);

export function ProjectShowcase() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section className="py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<AnimatePresence>
						{top5Projects.map((project, index) => (
							<motion.div
								key={project.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								onHoverStart={() => setHoveredIndex(index)}
								onHoverEnd={() => setHoveredIndex(null)}
							>
								<Card className="h-full flex flex-col overflow-hidden group">
									<CardHeader className="p-0">
										<div className="relative overflow-hidden">
											<Image
												src={project.image}
												alt={project.name}
												width={600}
												height={300}
												className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
												<Button asChild variant="secondary" className="mr-2">
													<a
														href={project.url}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github className="mr-2 h-4 w-4" /> View on GitHub
													</a>
												</Button>
											</div>
										</div>
									</CardHeader>
									<CardContent className="flex-grow">
										<CardTitle className="my-4">{project.name}</CardTitle>
										<CardDescription className="line-clamp-3">
											{project.description}
										</CardDescription>
									</CardContent>
									<CardFooter className="flex justify-between items-center">
										<Badge
											variant="secondary"
											className="flex items-center gap-1"
										>
											<Star className="w-4 h-4" />
											{project.stars}
										</Badge>
										<Button size="sm" variant="outline" asChild>
											<a
												href={project.url}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="View project details"
											>
												<ExternalLink className="w-4 h-4" />
											</a>
										</Button>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
