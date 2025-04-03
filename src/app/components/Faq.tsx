import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Gift, Leaf, Repeat, ShieldCheck, Truck } from "lucide-react";

export default function Faq() {
	return (
		<div
			id="faq"
			className="flex h-[90vh] min-h-[100vh] flex-col items-center justify-center gap-8 px-16 py-12 max-md:gap-4 max-md:px-4 max-md:py-8"
		>
			<h1 className="text-center text-[36px] font-bold max-sm:text-[24px]">
				Frequently asked questions
			</h1>
			<p className="w-full max-w-[800px]">
				We&apos;ve compiled the most important information to help you
				get the most out of your experience. Can&apos;t find what
				you&apos;re looking for? Contact us.
			</p>
			<div className="flex w-full max-w-[800px] flex-row flex-wrap items-center justify-center gap-3">
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>
							<div className="flex items-center">
								<ShieldCheck className="text-primary mr-2 inline-block h-5 w-5" />
								<span>Is it safe for pets and children?</span>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							Yes! We offer a selection of non-toxic plants that
							are safe for homes with pets and children.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger>
							<div className="flex items-center">
								<Truck className="text-primary mr-2 inline-block h-5 w-5" />
								<span>How fast is the shipping?</span>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							Orders are processed within 24 hours and delivered
							within 3-5 business days.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger>
							<div className="flex items-center">
								<Leaf className="text-primary mr-2 inline-block h-5 w-5" />
								<span>Do the plants require special care?</span>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							No! We provide an easy-to-follow care guide with
							every plant, so even beginners can keep them
							thriving.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger>
							<div className="flex items-center">
								<Repeat className="text-primary mr-2 inline-block h-5 w-5" />
								<span>What if my plant arrives damaged?</span>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							No worries! If your plant arrives in poor condition,
							we’ll replace it for free.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-5">
						<AccordionTrigger>
							<div className="flex items-center">
								<Gift className="text-primary mr-2 inline-block h-5 w-5" />
								<span>Can I gift a plant to someone?</span>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							Absolutely! You can send a plant as a gift, and we
							even offer custom gift packaging.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
