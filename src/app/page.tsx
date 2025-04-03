import Hero from "./components/Hero";
import HeroBadges from "./components/Badges";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import HeroBadges2 from "./components/Badges2";
import Faq from "./components/Faq";
import HeroBadges3 from "./components/Badges3";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Hero />
			<HeroBadges />
			<Products />
			<HeroBadges2 />
			<Reviews />
			<HeroBadges3 />
			<Faq />
			<Footer />
		</>
	);
}
