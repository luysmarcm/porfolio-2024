import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import HeroSection from "@/components/HeroSection/HeroSection";
import WeSpecialize from "@/components/ServicesM/WeSpecialize";
import Customers from "@/components/Customers/Customers";
import OurAllies from "@/components/Allies/OurAllies";
import HowWill from "@/components/HowWill/HowWill";

export default function Home() {

	return (
		<main>
			<HeroSection />
			<AboutUs />
			<WeSpecialize />
			<HowWill/>
			<Customers />
			<Contact />
			<OurAllies />
		</main>
	);
}
