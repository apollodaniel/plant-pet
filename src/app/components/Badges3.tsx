import { Heart, Rocket, Sprout, Star } from "lucide-react";

export default function HeroBadges3() {
	return (
		<div className="bg-secondary/30 px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 text-center max-sm:grid-cols-1 md:grid-cols-4">
				{/* Free Returns */}
				<div className="p-4">
					<Heart className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Pet Friendly
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Safe for cats and dogs
					</p>
				</div>

				<div className="p-4 max-sm:hidden">
					<Rocket className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Fast Shipping
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Arrives in days, not weeks
					</p>
				</div>

				<div className="p-4 max-md:hidden">
					<Sprout className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Beginner Friendly
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Easy to care for and maintain
					</p>
				</div>

				<div className="p-4 max-md:hidden">
					<Star className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Premium Quality
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Hand-selected healthy plants
					</p>
				</div>
			</div>
		</div>
	);
}
