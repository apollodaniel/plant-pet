import FooterSection from "@/components/sections/footer/default";
import { Dog } from "lucide-react";

export default function Footer() {
	return (
		<FooterSection
			logo={<Dog size={32} strokeWidth={3} absoluteStrokeWidth />}
			name="PlantPet"
			copyright="© 2025 Apollo Daniel. All rights reserved"
			columns={[
				{
					title: "Company",
					links: [
						{ text: "About Us", href: "#" },
						{ text: "Our Mission", href: "#" },
						{ text: "Sustainability", href: "#" },
						{ text: "Careers", href: "#" },
					],
				},
				{
					title: "Shop",
					links: [
						{ text: "All Plants", href: "#" },
						{ text: "Best Sellers", href: "#" },
						{ text: "New Arrivals", href: "#" },
						{ text: "Gift Cards", href: "#" },
					],
				},
				{
					title: "Support",
					links: [
						{ text: "FAQs", href: "#" },
						{ text: "Shipping & Returns", href: "#" },
						{ text: "Plant Care Guide", href: "#" },
						{ text: "Live Chat", href: "#" },
					],
				},
				{
					title: "Contact",
					links: [
						{ text: "Email", href: "#" },
						{ text: "Twitter", href: "#" },
						{ text: "Instagram", href: "#" },
						{ text: "Discord", href: "#" },
					],
				},
			]}
		/>
	);
}
