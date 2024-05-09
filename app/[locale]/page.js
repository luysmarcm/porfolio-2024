import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import HeroSection from "@/components/HeroSection/HeroSection";
import WeSpecialize from "@/components/ServicesM/WeSpecialize";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Header from "@/components/Layout/Header";
// import Link from "next/link";
// import Link from "next-intl/link";
// import Link from "next-intl/link";
// import { ComponentProps } from "react";



export default function Home() {
	

	// const t = useTranslations("Index");
  return (
		<main>
			{/* <Header/> */}
			<HeroSection />
			{/* <h1>{t("title")}</h1> */}
			<AboutUs />
			<WeSpecialize />
			<Contact />
		</main>
	);
}
