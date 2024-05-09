"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
	{ name: "Inicio", href: "/", current: false },
	{ name: "Sobre Nosotros", href: "#aboutUS", current: false },
	{ name: "Servicios", href: "#services", current: false },
	{ name: "Metodologia", href: "#howWill", current: false },
	{ name: "English", href: "/conductores", current: false },
];

const NavBar = () => {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

	const showSideMenu = () => {
		setisSideMenuOpen(!isSideMenuOpen);
	};
	return (
		<nav className="p-2 lg:p-2 mt-0 fixed w-full z-40  top-0 shadow-lg bg-primary">
			<div className=" mx-auto flex items-center justify-between px-10">
				<div className="flex w-32 lg:w-1/2 md:justify-start text-white font-extrabold	">
					<Link href="/" passHref>
						<div style={{ width: "35px" }}>
							<Image
								src="/image/logo-monarca.svg"
								alt="Logo"
								width="484"
								height="326"
							/>
						</div>
					</Link>
				</div>
				<div className="flex lg:content-center justify-between md:w-1/2 md:justify-end ">
					<ul className="list-reset hidden lg:flex justify-between flex-1 md:flex-none items-center">
						<li className="mr-3">
							{links.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="px-3 py-2 rounded-md text-md lg:text-lg text-white hover:text-secundary"
								>
									{item.name}
								</a>
							))}
						</li>
						<button
							href=""
							className="rounded-full font-bold text-primary bg-m lg:px-5 lg:py-1 hover:bg-secundary"
							type="submit"
						>
							Contactanos
						</button>
					</ul>

					<button
						aria-label="Abrir menu"
						onClick={() => {
							showSideMenu();
						}}
						className="lg:hidden w-8 h-8 rounded-xl overflow-hidden text-white"
					>
						<svg style={{ width: "100%", height: "100%" }} viewBox="0 0 20 20">
							<path
								fill="currentColor"
								d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14"
							/>
						</svg>
					</button>
					<div
						className={`transition-all duration-500 ease-in-out fixed w-full lg:hidden   bg-white left-0 top-12 overflow-hidden  ${
							isSideMenuOpen ? "h-auto" : "h-0"
						}`}
					>
						<ul className="flex flex-col p-10 justify-center space-y-3 bg-primary text-center">
							{links.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										className="px-3 py-2 rounded-md text-2xl lg:text-lg text-white hover:text-secundary"
									>
										{item.name}
									</a>
								</li>
							))}
							<button
								className="rounded-full font-semibold  text-primary bg-m px-5 py-1 hover:bg-secundary"
								type="submit"
							>
								Contactanos
							</button>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
