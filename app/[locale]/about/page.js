"use client";
import CardInfo from "@/components/Card/CardInfo";
import CardSkills from "@/components/Card/CardSkills";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  return (
		<section className=" text-white py-28 ">
			{/* <div class="circle"></div> */}
			<div className="flex flex-row place-items-center p-5">
				<h1 className="mb-4 w-1/2 uppercase text-center lg:text-left text-3xl font-bold lg:text-8xl bg-gradient-to-r from-morado via-rosado to-rosado inline-block text-transparent bg-clip-text">
					{t("title")}
				</h1>
				<p className="text-base w-1/2">{t("subTitle")}</p>
			</div>
			<div className="grid grid-cols-none lg:grid-cols-2 overflow-hidden">
				<div className="flex flex-col space-y-5 p-5">
					<h2 className="text-2xl">
						{t("hello")} <span className="font-bold">Luysmar</span>
					</h2>
					<p>{t("text")}</p>
					<CardInfo />
					<h2 className="text-2xl font-bold">Skills</h2>
					<CardSkills t={t} />
				</div>
				{/* <div>
					<h2 className="text-2xl font-bold">
						Skills
					</h2>
					<CardSkills t={t} />
				</div> */}
			</div>
			{/* <div className="circle1"></div> */}
		</section>
	);
}

export default About;