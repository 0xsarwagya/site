import { Navbar } from "@/components/shared/navbar";
import "@/styles/index.css";
import { ThemeProvider } from "@/components/providers/theme";
import { Footer } from "@/components/shared/footer";
import { Newsletter } from "@/components/shared/newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Home | Sarwagya Singh",
		template: "%s | Sarwagya Singh",
	},
	description:
		"Explore the professional journey of Sarwagya Singh, a cybersecurity analyst and web developer passionate about Web3, AI, and secure technologies. Proficient in ReactJS, NextJS, Solidity, and more.",
	keywords: [
		"Sarwagya Singh",
		"Web Developer",
		"ReactJS",
		"NextJS",
		"Solidity",
		"Web3",
		"AI",
		"Cybersecurity Analyst",
		"Secure Technologies",
	],
	openGraph: {
		title: "Sarwagya Singh | Cybersecurity Engineer",
		description:
			"Learn about Sarwagya Singh's professional experiences in cybersecurity, software development, and AI.",
		images: [
			"https://pbs.twimg.com/profile_banners/1591862626921115648/1714180802/1500x500",
		],
		url: "https://0xsarwagya.codes",
		type: "website",
	},
	twitter: {
		title: "Sarwagya Singh | Cybersecurity Engineer",
		description:
			"Learn about Sarwagya Singh's professional experiences in cybersecurity, software development, and AI.",
		images: [
			"https://pbs.twimg.com/profile_banners/1591862626921115648/1714180802/1500x500",
		],
		site: "https://0xsarwagya.codes",
	},
	verification: {
		google: "yo2frn-tk1Yi7L-3F7kPWaP6Ub2LA6mNu3TqDteje1w",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>
					<main className="px-4 md:px-8 lg:px-12 selection:bg-foreground selection:text-background bg-backdrop">
						<Navbar />
						{children}
						{/* <Newsletter /> */}
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
