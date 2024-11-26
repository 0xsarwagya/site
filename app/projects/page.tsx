import { ProjectCard } from "@/components/projects/card";
import projects from "@/data/projects.json";

export default function Projects() {
	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-8">My Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
			</div>
		</div>
	);
}
