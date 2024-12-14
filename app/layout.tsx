import { Navbar } from "@/components/shared/navbar";
import "@/styles/index.css";
import { ThemeProvider } from "@/components/providers/theme";
import { Footer } from "@/components/shared/footer";
import { Newsletter } from "@/components/shared/newsletter";
import { getActivity } from "./(home)/actions";

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
						<Newsletter />
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
