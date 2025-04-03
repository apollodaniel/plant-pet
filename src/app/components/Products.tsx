import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface PlantPet {
	title: string;
	description: string;
	img: string;
	price: number;
}

const plantPets: PlantPet[] = [
	{
		title: "Pot with mango tree",
		description: "Manguito: shade and sweet fruit for your balcony!",
		img: "/mango.jpg",
		price: 120,
	},
	{
		title: "Cactus in a pot",
		description: "Espeto: spiky charm, low maintenance!",
		img: "/cactus.jpg",
		price: 99,
	},
	{
		title: "Bonsai",
		description: "Zen: peace and elegance in miniature!",
		img: "/bonsai.jpg",
		price: 56,
	},
	{
		title: "Pot with orchid",
		description: "Florita: vibrant floral sophistication!",
		img: "/plant1.jpg",
		price: 156,
	},
	{
		title: "Horseplant",
		description: "Cavalinho: exotic and easy to care for!",
		img: "/horseplant.jpg",
		price: 72,
	},
];

export default function Products() {
	return (
		<div
			id="products"
			className="flex min-h-[100vh] flex-col items-center justify-center gap-8 px-24 py-12 max-lg:px-16 max-sm:gap-4 max-sm:py-8"
		>
			<h1 className="text-[36px] font-bold max-sm:text-[24px]">
				Explore our <span className="text-primary">plants</span> :)
			</h1>
			<Carousel
				className="w-full"
				title="Some plants"
				opts={{
					align: "center",
					loop: true,
					skipSnaps: true,
				}}
			>
				<CarouselContent>
					{plantPets.map((e, index) => (
						<CarouselItem
							className="basis-auto max-[450px]:basis-1/1"
							key={index}
						>
							<div className="p-1">
								<Card className="width w-full max-w-xs rounded-xl border">
									<div className="grid gap-4 p-4">
										<div className="aspect-[4/5] w-full overflow-hidden">
											<Image
												src={e.img}
												alt="Product image"
												width="400"
												height="500"
												className="aspect-[4/5] w-full rounded-xl border object-cover"
											/>
										</div>
										<div className="grid gap-1.5">
											<h3 className="text-sm font-semibold md:text-base">
												{e.title}
											</h3>
											<p className="text-sm font-semibold md:text-base">
												${e.price}
											</p>
											<p className="text-muted-foreground text-sm md:text-base">
												{e.description}
											</p>
										</div>
										<Button size="sm">Add to cart</Button>
									</div>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
