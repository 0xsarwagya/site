import { Header } from "@/components/shared/header";
import { Cross1Icon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Guest Book",
};

export default function ExperiencePage() {
	return (
		<React.Fragment>
			<Header
				title="Guest Book"
				header="Coming Soon! I Got Tired xD"
				cta={{
					link: "https://x.com/0xsarwagya",
					text: "Follow me on X",
					icon: Cross1Icon,
					external: true,
				}}
			/>
		</React.Fragment>
	);
}
