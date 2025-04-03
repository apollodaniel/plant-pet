import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<div
			id="hero"
			className="relative m-0 flex min-h-[100vh] w-full flex-row justify-center justify-evenly bg-[url(/plantpattern.png)] bg-cover"
		>
			<div className="top:0 right:0 bg-accent absolute h-full w-full opacity-70"></div>
			<div className="bg-accent relative my-auto flex max-w-[500px] flex-col items-start gap-3 rounded-xl p-8">
				<h1 className="text-[56px] leading-16 font-extrabold">
					Meet Your New
					<br />
					<span className="inline-flex items-baseline text-[81px] font-bold">
						Plant
						<span className="text-primary">Pet</span>!
					</span>
				</h1>
				<p className="text-[16px]">
					Adorable, low-maintenance plants delivered monthly—because
					every home needs a little green friend.
				</p>

				<Button variant="default" className="py-5">
					Get Your First PlantPet 🌱
				</Button>
			</div>
		</div>
	);
}
