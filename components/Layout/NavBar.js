"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation'
// import { locales } from "@/navigation";
import { useLocale } from "next-intl";
import NavigationMenu from "./NavigationMenu";


const NavBar = () => {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
	// const { t } = useTranslations();
	const t = useTranslations("NavBar");
	const localActive = useLocale();
	const router = useRouter();
	const { pathname } = router;

	const links = [
		{ name: "Linkedln", href: "href1", current: false },
		{ name: "Git Hug", href: "href2", current: false },
		{ name: "Behance", href: "href3", current: false },
		// { name: "links5", href: "href5", current: false },
	];

	const navB = [
		{ name: "links1", href: "href1", current: false },
		{ name: "links2", href: "href2", current: false },
		{ name: "links3", href: "href3", current: false },
		{ name: "links4", href: "href4", current: false },
	];

	const showSideMenu = () => {
		setisSideMenuOpen(!isSideMenuOpen);
	};
	return (
		<nav className="backdrop-blur-xl bg-[#ffff]/5  p-2 lg:p-2 mt-0 fixed w-full z-10 top-0 shadow-lg">
			<div className=" mx-auto flex items-center justify-between px-10">
				<div className="flex w-32 lg:w-1/2 md:justify-start text-white font-extrabold	">
					<Link href="/" passHref>
						{/* <div style={{ width: "35px" }}>
							<Image
								src="/image/logo-monarca.svg"
								alt="Logo"
								width="484"
								height="326"
							/>
						</div> */}
						<h1>LLCM</h1>
					</Link>
				</div>
				<div className="flex lg:content-center justify-between md:w-1/2 md:justify-end ">
					<ul className="list-reset hidden lg:flex justify-between flex-1 md:flex-none items-center">
						<li className="mr-3">
							{links.map((link) => (
								<Link
									// locales={locales}
									key={link.name}
									href={`/${localActive}/${t(link.href)}`}
									// href={t(link.href)}
									className="px-3 py-2 rounded-md text-md lg:text-lg uppercase font-light text-white hover:text-secundary"
								>
									{link.name}
								</Link>
							))}
						</li>
						<button
							className="rounded-full font-light text-black lg:px-5 lg:py-1 bg-gradient-to-r from-morado  to-rosado text-base"
							type="submit"
						>
							{/* <a href={`/${localActive}/#contact`}>{t("buttonCont")}</a> */}
							<a href={t("href5")}>{t("links5")}</a>
						</button>
					</ul>
					<button
						aria-label="Abrir menu"
						onClick={() => {
							showSideMenu();
						}}
						className=" w-8 h-8 rounded-xl overflow-hidden text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
							/>
						</svg>
					</button>
					<div
						className={`transition-all duration-500 ease-in-out fixed w-full  bg-white left-0 top-12 overflow-hidden  ${
							isSideMenuOpen ? "h-auto" : "h-0"
						}`}
					>
						{/* <ul className="flex flex-col p-10 justify-center space-y-3 bg-primary text-center">
							{links.map((item) => (
								<li key={t(item.name)}>
									<a
										href={`/${localActive}/${t(item.href)}`}
										className="px-3 py-2 rounded-md text-2xl lg:text-lg text-white hover:text-secundary"
									>
										{t(item.name)}
									</a>
								</li>
							))}
							<Link	
								// href={`/${localActive}/${t("href5")}`}
								href={t("href5")}
								className="px-3 py-2 rounded-md text-2xl lg:text-lg text-white hover:text-secundary"
							>
								{t("links5")}
							</Link>
							<button
								href="#contact"
								className="rounded-full font-semibold  text-primary bg-m px-5 py-1 hover:bg-secundary"
								type="submit"
							>
								<a href={`/${localActive}/#contact`}>{t("buttonCont")}</a>
							</button>
						</ul> */}
						<nav className="bg-[#111] w-screen h-screen place-content-center">
							<div className="circle"></div>
							<ul className="space-y-12 text-center flex flex-col">
								{navB.map((link) => (
									<Link
										key={link.name}
										href={`/${localActive}/${t(link.href)}`}
										className="text-5xl font-light uppercase"
										onClick={() => {
											showSideMenu();
										}}
									>
										{t(link.name)}
									</Link>
								))}
							</ul>
							{/* <p className="text-xl ">LETS TALK: LUYSMAR27@GMAIL.COM</p> */}
							<div className="circle1"></div>
						</nav>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
