import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Flower2, Sprout } from "lucide-react";
import React from "react";

interface IProps {
	personName: string;
	profilePicture: string;
	description: string;
	buyedPets: number;
	top: number;
}

const TestimonialCard = ({
	personName,
	profilePicture,
	description,
	buyedPets,
	top,
}: IProps) => {
	return (
		<Card className="bg-muted/70 relative w-full max-w-sm border-none shadow-none">
			{buyedPets <= 5 ? (
				<Sprout className="text-primary absolute top-3 right-2 h-16 w-16 stroke-[1.5px] opacity-30" />
			) : (
				<Flower2 className="text-primary absolute top-3 right-2 h-16 w-16 stroke-[1.5px] opacity-30" />
			)}
			<CardHeader className="py-0">
				<div className="flex items-center gap-3">
					<Avatar className="h-12 w-12">
						<AvatarImage src={profilePicture} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-2">
						<span className="text-[15px] leading-none font-semibold">
							{personName}
						</span>
						<div className="flex gap-1 max-md:flex-col-reverse">
							<span className="text-muted-foreground text-sm leading-none font-medium">
								<span className="text-md text-primary font-bold">
									{buyedPets}
								</span>{" "}
								buyed pets
							</span>
							<span className="text-xs max-md:hidden"> | </span>
							<span className="text-muted-foreground text-sm leading-none font-medium">
								<span className="text-primary text-md font-bold">
									Top {top}.
								</span>{" "}
								buyer!
							</span>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-muted-foreground text-[15px]">
					{description}
				</p>
			</CardContent>
		</Card>
	);
};

export default TestimonialCard;
