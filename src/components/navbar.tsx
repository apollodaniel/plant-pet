import { Button, type ButtonProps } from "./ui/button";
import {
	Navbar as NavbarComponent,
	NavbarLeft,
	NavbarRight,
} from "./ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Dog, Menu } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarLink {
	text: string;
	title: string;
	href: string;
	isLink: boolean;
}

interface NavbarActionProps {
	text: string;
	href: string;
	variant?: ButtonProps["variant"];
	icon?: ReactNode;
	iconRight?: ReactNode;
	isButton?: boolean;
}

export default function Navbar() {
	const links: NavbarLink[] = [
		{
			text: "Home",
			title: "Home",
			href: "/#hero",
			isLink: true,
		},
		{
			text: "Products",
			title: "Products",
			href: "/#products",
			isLink: true,
		},
		{
			text: "Reviews",
			title: "Reviews",
			href: "/#reviews",
			isLink: true,
		},
		{
			text: "FAQ",
			title: "FAQ",
			href: "/#faq",
			isLink: true,
		},
	];
	const actions: NavbarActionProps[] = [
		{
			isButton: true,
			text: "Get started",
			href: "#",
		},
	];
	return (
		<header className={cn("fixed top-0 z-50 -mb-4 w-full px-4 pb-4")}>
			<div className="fade-bottom bg-background/15 absolute left-0 h-18 w-full backdrop-blur-lg"></div>
			<div className="max-w-container relative mx-auto">
				<NavbarComponent>
					<NavbarLeft>
						<Link
							href="/#hero"
							className="flex items-center gap-2 text-xl font-bold"
						>
							<div className="flex flex-row items-center gap-1">
								<Dog
									size={32}
									strokeWidth={1.5}
									absoluteStrokeWidth
								/>
								<p className="font-medium">
									Plant
									<span className="text-primary">Pet</span>
								</p>
							</div>
						</Link>
					</NavbarLeft>
					<NavbarRight>
						{links.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="text-md hidden font-medium md:block"
							>
								{link.text}
							</Link>
						))}
						{actions.map((action, index) =>
							action.isButton ? (
								<Button
									key={index}
									variant={action.variant || "default"}
									asChild
								>
									<a href={action.href}>
										{action.icon}
										{action.text}
										{action.iconRight}
									</a>
								</Button>
							) : (
								<a
									key={index}
									href={action.href}
									className="hidden text-sm md:block"
								>
									{action.text}
								</a>
							),
						)}
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="shrink-0 md:hidden"
								>
									<Menu className="size-5" />
									<span className="sr-only">
										Toggle navigation menu
									</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right">
								<nav className="grid gap-6 text-lg font-medium">
									<Link
										href="/#hero"
										className="flex items-center gap-2 text-xl font-bold"
									>
										<span>PlantPet</span>
									</Link>
									{links.map((link, index) => (
										<a
											key={index}
											href={link.href}
											className="text-muted-foreground hover:text-foreground"
										>
											{link.text}
										</a>
									))}
								</nav>
							</SheetContent>
						</Sheet>
					</NavbarRight>
				</NavbarComponent>
			</div>
		</header>
	);
}
