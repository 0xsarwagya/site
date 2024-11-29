"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	GitHubLogoIcon,
	HamburgerMenuIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export type NavItem = {
	title: string;
	href: string;
	isExternal: boolean;
};

const navItems: NavItem[] = [
	{ title: "Home", href: "/", isExternal: false },
	{
		title: "Projects",
		href: "/projects",
		isExternal: false,
	},
];

/**
 * Renders the marketing header with navigation menu, branding, and responsive mobile menu.
 * @returns JSX.Element
 */
export function Navbar() {
	return (
		<div className="w-full flex justify-center font-normal">
			<Card
				className="bg-transparent py-2 px-4 flex justify-between gap-6 w-full lg:w-2/3 border-[0.25px] border-muted-foreground rounded-full"
				style={{ backdropFilter: "blur(20px)" }}
			>
				{/* Brand Logo */}
				<BrandLogo />

				{/* Desktop Navigation */}
				<DesktopNav />

				{/* Mobile Menu */}
				<MobileMenu />
			</Card>
		</div>
	);
}

/**
 * Renders the navigation menu for desktop.
 * @returns JSX.Element
 */
function DesktopNav() {
	return (
		<NavigationMenu>
			<NavigationMenuList className="hidden lg:flex items-start gap-10">
				{navItems.map((item, i) => (
					<NavigationMenuItem asChild key={`nav-item=${i + 1}`}>
						<Link
							prefetch={true}
							href={item.href}
							target={item.isExternal ? "_blank" : ""}
						>
							{item.title}
							{item.isExternal && <sup className="ml-1">↗</sup>}
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

/**
 * Renders the mobile menu with a hamburger icon and slide-out sheet for small screens.
 * @returns JSX.Element
 */
function MobileMenu() {
	return (
		<div className="flex items-center">
			<GetStartedDesktop />
			<Sheet>
				<SheetTrigger asChild className="block lg:hidden">
					<Button variant="ghost">
						<HamburgerMenuIcon />
					</Button>
				</SheetTrigger>
				<SheetContent side="top" className="w-screen">
					{/* Header of the mobile menu */}
					<SheetHeader className="pb-4">
						<SheetTitle className="text-2xl font-bold text-start">
							Menu
						</SheetTitle>
					</SheetHeader>

					{/* Mobile Navigation Menu Items */}
					<MobileNavItems />

					{/* Footer of the mobile menu with social media icons */}
					<MobileMenuFooter />
				</SheetContent>
			</Sheet>
		</div>
	);
}

/**
 * Renders the mobile navigation items inside the sheet component.
 * @returns JSX.Element
 */
function MobileNavItems() {
	return (
		<NavigationMenu>
			<NavigationMenuList className="grid grid-cols-1 gap-y-4 mb-5 w-screen px-6">
				{navItems.map((item, i) => (
					<NavigationMenuItem className="py-2" key={`nav-item=${i + 1}`}>
						<Link
							prefetch={true}
							href={item.href}
							target={item.isExternal ? "_blank" : ""}
							className="font-semibold"
							passHref
						>
							<SheetClose>
								{item.title}
								{item.isExternal && <sup className="ml-1">↗</sup>}
							</SheetClose>
						</Link>
						<Separator className="w-full" />
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

/**
 * Renders the footer in the mobile sheet with social media icons and a "Get Started" button.
 * @returns JSX.Element
 */
function MobileMenuFooter() {
	return (
		<SheetFooter>
			<div className="flex justify-between" data-test="mobile-menu-footer">
				{/* Social Media Icons */}
				<div className="flex gap-1">
					<SocialLink
						href="https://github.com/0xsarwagya"
						icon={GitHubLogoIcon}
					/>
					<SocialLink
						href="https://instagram.com/0xsarwagya"
						icon={InstagramLogoIcon}
					/>
					<SocialLink
						href="https://twitter.com/0xsarwagya"
						icon={TwitterLogoIcon}
					/>
					<SocialLink
						href="https://linkedin.com/in/0xsarwagya"
						icon={LinkedInLogoIcon}
					/>
				</div>

				{/* Get Started Button */}
				<GetStartedMobile />
			</div>
		</SheetFooter>
	);
}

/**
 * Renders a social media icon button with a given link.
 * @param props - Social media link properties.
 * @returns JSX.Element
 */
function SocialLink({
	href,
	icon: Icon,
}: {
	href: string;
	icon: React.ComponentType;
}) {
	return (
		<Link prefetch={true} passHref href={href} target="_blank">
			<Button className="w-full" variant="ghost">
				<Icon />
			</Button>
		</Link>
	);
}

export const GetStartedMobile = () => {
	return (
		<div>
			<Link
				prefetch={true}
				passHref
				href="/resume.pdf"
				download="Sarwagya_Singh_Resume.pdf"
			>
				<Button className="w-full rounded-full" variant="outline">
					Download Resume
				</Button>
			</Link>
		</div>
	);
};

export const GetStartedDesktop = () => {
	return (
		<div>
			<Link
				prefetch={true}
				passHref
				href="/resume.pdf"
				download="Sarwagya_Singh_Resume.pdf"
			>
				<Button
					className="hidden lg:block ml-2 mr-2"
					data-test="get-started-desktop"
				>
					Download Resume
				</Button>
			</Link>
		</div>
	);
};

export const BrandLogo = () => {
	return (
		<Link
			prefetch={true}
			href="/"
			className="flex items-center"
			data-test="brand-logo"
		>
			<Image height={40} width={40} src="/memoji.png" alt="logo" />
			<span className="text-base font-bold text-primary">Sarwagya Singh</span>
		</Link>
	);
};
