import { ProfileCard } from "@/components/home/profile";
import { ProjectShowcase } from "@/components/home/projects";
import { TechStack } from "@/components/home/techstack";
import { WorkExperience } from "@/components/home/work-experience";
import React from "react";

export default function Page() {
	return (
		<React.Fragment>
			<ProfileCard />
			<TechStack />
			<WorkExperience />
			<ProjectShowcase />
		</React.Fragment>
	);
}
