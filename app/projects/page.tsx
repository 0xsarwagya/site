import { ProjectDisplay } from "@/components/projects/projectsDisplay";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
};

export default function Projects() {
	return <ProjectDisplay />;
}
