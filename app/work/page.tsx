import { Header } from "@/components/shared/header";
import { DisplayGrid } from "@/components/work/display-grids";
import { TechStack } from "@/components/work/tech-stack";
import education from "@/data/education.json";
import experience from "@/data/experience.json";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import React from "react";

export default function ExperiencePage() {
	return (
		<React.Fragment>
			<Header
				title="Work"
				header="Education and Work Experience"
				cta={{
					link: "https://www.linkedin.com/in/0xsarwagya",
					text: "Follow me on Linkedin",
					icon: LinkedInLogoIcon,
					external: true,
				}}
			/>
			<DisplayGrid
				data={experience}
				title="Work Experience"
				subtitle="Hands-on Moments"
			/>
			<TechStack />
			<DisplayGrid
				data={education}
				title="Education"
				subtitle="Alma 'Matters'"
			/>
		</React.Fragment>
	);
}
