import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import HeroSection from "@/components/HeroSection/HeroSection";
import WeSpecialize from "@/components/ServicesM/WeSpecialize";
import Customers from "@/components/Customers/Customers";
import OurAllies from "@/components/Allies/OurAllies";

export default function Home() {

	return (
		<main>
			<HeroSection />
			<AboutUs />
			<WeSpecialize />
			<Customers />
			<Contact />
			<OurAllies />
		</main>
	);
}
