import "@/styles/index.css";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { AIChatbot } from "@/components/ui/ai";
import { poppins } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "%s | Sarwagya Singh",
		default: "Portfolio | Sarwagya Singh",
	},
	description:
		"Hi, my name is Sarwagya Singh. An upcoming Cybersecurity Engineer and Web Developer.",
	keywords: [
		"Sarwagya Singh",
		"0xsarwagya",
		"Sarwagya",
		"Singh",
		"Portfolio",
		"Web3",
		"Web Development",
		"Cybersecurity",
	],
	openGraph: {
		images: [
			"https://pbs.twimg.com/profile_banners/1591862626921115648/1714180802/1500x500",
		],
	},
	authors: {
		name: "Sarwagya Singh",
		url: "https://0xsarwagya.codes",
	},
	icons: "/memoji.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<main className={`${poppins.className} p-2 lg:p-6`}>
					<Navbar />
					<main className="flex justify-center">
						<main className="lg:w-2/3 w-full">{children}</main>
						{/* <AIChatbot /> */}
					</main>
					<Footer />
				</main>
			</body>
		</html>
	);
}
