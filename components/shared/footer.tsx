import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="border-t border-border/40 py-6 dark:border-border md:px-8 md:py-0">
			<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
				<p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
					Built with ❤️ by{" "}
					<Link
						href={"https://x.com/0xsarwagya"}
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						0xsarwagya
					</Link>
					. The source code is available on{" "}
					<Link
						href={"https://github.com/0xsarwagya/site"}
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						GitHub
					</Link>
					.
				</p>
			</div>
		</footer>
	);
};
