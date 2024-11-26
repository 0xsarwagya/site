import "@/styles/index.css";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { poppins } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {};

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
					</main>
					<Footer />
				</main>
			</body>
		</html>
	);
}
