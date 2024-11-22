import { useState } from "react";
import { SocialIcon } from "react-social-icons";

export default function App() {
	const [displaySocials, setDisplaySocials] = useState(false);

	return (
		<div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-black text-white">
			<main className="max-w-xl space-y-6">
				<h1 className="text-lg">
					<span className="text-white">Sarwagya Singh</span>
					<span className="text-muted-foreground">*</span>
				</h1>

				<p className="text-base text-muted-foreground">
					Student and Cybersecurity Enthusiast based in Germany 🇩🇪. Originally
					from India 🇮🇳
				</p>

				<p className="text-base text-muted-foreground">
					Currently I am Studying at{" "}
					<a
						href="https://tum.de/"
						target="_blank"
						className="text-white underline decoration-2 underline-offset-4"
						rel="noreferrer"
					>
						Technical University of Munich &#8599;
					</a>
					, pursuing my Bachelors in Informatik with a Specialization in
					Cybersecurity.{" "}
				</p>

				<p className="text-base text-muted-foreground">
					Currently I work at{" "}
					<a
						href="https://sap.com/"
						target="_blank"
						className="text-white underline decoration-2 underline-offset-4"
						rel="noreferrer"
					>
						SAP &#8599;
					</a>
					, as a Werkstudent , managing day to day development operations{" "}
				</p>

				<p className="text-base text-muted-foreground">
					Previously I was a Research Assistant at{" "}
					<a
						href="https://www.fraunhofer.de/"
						target="_blank"
						className="text-white underline decoration-2 underline-offset-4"
						rel="noreferrer"
					>
						Fraunhofer Institute &#8599;
					</a>
					, where I worked on a project related to Cybersecurity and
					Cryptography.{" "}
				</p>

				<p className="text-base text-muted-foreground">
					Take a look at some recent{" "}
					<a
						href="https://github.com/0xsarwagya"
						target="_blank"
						className="text-white underline decoration-2 underline-offset-4"
						rel="noreferrer"
					>
						work &#8599;
					</a>{" "}
					I have been doing or feel free to{" "}
					<button
						type="button"
						className="text-white underline decoration-2 underline-offset-4"
						onClick={() => setDisplaySocials(!displaySocials)}
					>
						get in touch.
					</button>
				</p>
				{displaySocials && <Socials />}
			</main>
		</div>
	);
}

function Socials() {
	const socialLinks = [
		{ href: "https://linkedin.com/in/0xsarwagya", network: "linkedin" },
		{ href: "https://twitter.com/0xsarwagya", network: "twitter" },
		{ href: "https://github.com/0xsarwagya", network: "github" },
		{ href: "mailto:contact@0xsarwagya.codes", network: "email" },
	];

	return (
		<div className="flex space-x-4">
			{socialLinks.map((link, index) => (
				<div
					key={link.network}
					className={
						"animate-in fade-in slide-in-from-bottom-4 duration-300 ease-in-out"
					}
					style={{ animationDelay: `${index * 100}ms` }}
				>
					<SocialIcon
						href={link.href}
						target="_blank"
						bgColor="#ccc"
						fgColor="#000"
						network={link.network}
						style={{ height: 30, width: 30 }}
					/>
				</div>
			))}
		</div>
	);
}
