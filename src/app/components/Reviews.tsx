import TestimonialCard from "@/components/customized/card/card-08";

type PlantPetReview = {
	name: string;
	review: string;
	profilePicture: string;
	buyedPlantPets: number;
};

const people: PlantPetReview[] = [
	{
		name: "Sophie Miller",
		review: "I adopted Manguito, Zen, and more—my balcony’s a jungle now! The mangoes are a sweet bonus.",
		profilePicture: "/profile_user1.png",
		buyedPlantPets: 8,
	},
	{
		name: "Liam Carter",
		review: "Espeto started it all, and now I’ve got a whole crew of cacti—zero fuss, all style!",
		profilePicture: "/profile_user2.png",
		buyedPlantPets: 5,
	},
	{
		name: "Adrian Ortiz",
		review: "Florita’s blooms stole my heart, so I got Cavalinho and others too—pure elegance everywhere!",
		profilePicture: "/profile_user3.png",
		buyedPlantPets: 10,
	},
];

export default function Reviews() {
	return (
		<div
			id="reviews"
			className="flex min-h-[100vh] flex-col items-center justify-center gap-8 px-16 py-12 max-md:gap-4 max-md:px-4 max-md:py-8"
		>
			<h1 className="text-center text-[36px] font-bold max-sm:text-[24px]">
				What Our <span className="text-primary">Customers</span> Say
			</h1>
			<div className="flex max-w-[800px] flex-row flex-wrap items-center justify-center gap-3">
				{people
					.sort((a, b) => b.buyedPlantPets - a.buyedPlantPets)
					.map((e, index) => {
						return (
							<TestimonialCard
								key={index}
								buyedPets={e.buyedPlantPets}
								profilePicture={e.profilePicture}
								description={e.review}
								personName={e.name}
								top={index + 1}
							/>
						);
					})}
			</div>
		</div>
	);
}
