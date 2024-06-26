import Contact from "@/components/Contact/Contact";
import WeSpecialize from "@/components/ServicesM/WeSpecialize";
import Customers from "@/components/Customers/Customers";
import OurAllies from "@/components/Allies/OurAllies";
import HowWill from "@/components/HowWill/HowWill";
import CarruselHero from "@/components/CarruselHero/CarruselHero";
import GetQuote from "@/components/GetQuote/GetQuote";

export default function Home() {
	
	return (
		<main>
			<CarruselHero />
			<WeSpecialize />
			<HowWill />
			<Customers />
			<Contact />
			<OurAllies />
			{/* <GetQuote /> */}
		</main>
	);
}	
