"use client";

import { Card } from "@/components/ui/card";
import techStack from "@/data/techstack.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const TechStack = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section ref={ref} className="py-6 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl font-bold text-center mb-12">
					Technologies I Work With
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{techStack.map((tech, index) => (
						<motion.div
							key={tech.name}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="group relative overflow-hidden p-6 hover:shadow-lg transition-shadow duration-300">
								<div className="flex flex-col items-center space-y-4">
									<div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
										<Image
											src={tech.image}
											alt={`${tech.name} logo`}
											fill
											className="object-contain"
										/>
									</div>
									<p className="text-sm font-medium text-center">{tech.name}</p>
								</div>
								<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
