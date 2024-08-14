"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const NavigationMenu = ({ navB, t }) => {
	const localActive = useLocale();
	const router = useRouter();
	const { pathname } = router;
	return (
		<nav className="bg-[#111] w-screen h-screen place-content-center">
			<div className="circle"></div>
			<ul className="space-y-12 text-center flex flex-col">
				{navB.map((link) => (
					<Link
						key={link.name}
						href={`/${localActive}/${t(link.href)}`}
						className="text-5xl font-light uppercase"
						
					>
						{t(link.name)}
					</Link>
				))}
			</ul>
			{/* <p className="text-xl ">LETS TALK: LUYSMAR27@GMAIL.COM</p> */}
			<div className="circle1"></div>
		</nav>
	);
};

export default NavigationMenu;
