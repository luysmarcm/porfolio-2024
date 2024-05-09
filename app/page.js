import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import HeroSection from "@/components/HeroSection/HeroSection";
import WeSpecialize from "@/components/ServicesM/WeSpecialize";
import Image from "next/image";

export default function Home() {
  return (
		<main>
			<HeroSection />
			<AboutUs />
			<WeSpecialize />
			<Contact/>
		</main>
	);
}
