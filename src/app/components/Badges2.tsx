import { Droplet, Gift, Leaf, Sun } from "lucide-react";

export default function HeroBadges2() {
	return (
		<div className="bg-secondary/30 px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 text-center max-sm:grid-cols-1 md:grid-cols-4">
				{/* Free Returns */}
				<div className="p-4">
					<Sun className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Sunshine Ready
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Thrives in natural light
					</p>
				</div>

				<div className="p-4 max-sm:hidden">
					<Leaf className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Eco-Friendly
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Sustainably grown
					</p>
				</div>

				<div className="p-4 max-md:hidden">
					<Droplet className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Water Wise
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Minimal watering needed
					</p>
				</div>

				<div className="p-4 max-md:hidden">
					<Gift className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Bonus Perks
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Free care guide included
					</p>
				</div>
			</div>
		</div>
	);
}
