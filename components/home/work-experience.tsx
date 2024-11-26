"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import experiences from "@/data/experience.json";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function WorkExperience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

	return (
		<section className="py-16 px-4">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">
					Work Experience
				</h2>
				<div className="space-y-6">
					<AnimatePresence>
						{displayedExperiences.map((exp, index) => (
							<motion.div
								key={exp.company + exp.position}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card>
									<CardHeader>
										<div className="flex items-start gap-4">
											<div className="flex-shrink-0">
												<Image
													src={exp.logo}
													alt={`${exp.company} logo`}
													width={80}
													height={80}
													className="rounded-md"
												/>
											</div>
											<div className="flex-grow">
												<div className="flex justify-between items-start">
													<div>
														<CardTitle className="text-xl font-bold">
															{exp.position}
														</CardTitle>
														<p className="text-lg text-muted-foreground">
															{exp.company}
														</p>
													</div>
													<Badge variant="secondary" className="text-sm">
														{exp.duration}
													</Badge>
												</div>
											</div>
										</div>
									</CardHeader>
									<CardContent>
										<ul className="list-disc list-inside space-y-2 mb-4">
											{exp.description.map((item, i) => (
												<li
													key={`experience-${i + 1}`}
													className="text-muted-foreground"
												>
													{item}
												</li>
											))}
										</ul>
										<div className="flex flex-wrap gap-2">
											{exp.skills.map((skill) => (
												<Badge key={skill} variant="outline">
													{skill}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
				<div className="mt-8 text-center">
					<Button
						onClick={() => setShowAll(!showAll)}
						variant="default"
						size="lg"
						className="w-full"
					>
						{showAll ? "Show Less" : "Show All Experiences"}
					</Button>
				</div>
			</div>
		</section>
	);
}
