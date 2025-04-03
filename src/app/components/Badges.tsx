import { PawPrint, Truck, Undo2, Zap } from "lucide-react";

export default function HeroBadges() {
	return (
		<div className="bg-secondary/30 px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 text-center max-sm:grid-cols-1 md:grid-cols-4">
				{/* Free Returns */}
				<div className="p-4">
					<Undo2 className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						30-Day Guarantee
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Free returns, no fuss
					</p>
				</div>

				{/* Pet-Safe */}
				<div className="p-4 max-sm:hidden">
					<PawPrint className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Pet-Safe
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Vetted by veterinarians
					</p>
				</div>

				{/* Easy Care */}
				<div className="p-4 max-md:hidden">
					<Zap className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Low-Maintenance
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						Survives your schedule
					</p>
				</div>

				{/* Delivery */}
				<div className="p-4 max-md:hidden">
					<Truck className="text-secondary-foreground mx-auto mb-2 h-10 w-10" />
					<p className="text-secondary-foreground font-bold">
						Free Shipping
					</p>
					<p className="text-secondary-foreground/80 text-sm">
						On all subscriptions
					</p>
				</div>
			</div>
		</div>
	);
}
