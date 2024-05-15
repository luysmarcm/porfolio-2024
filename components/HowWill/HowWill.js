import Image from 'next/image';
import React from 'react'
import { useTranslations } from "next-intl";

const HowWill = () => {
	const t = useTranslations("HowWeWork");

	const items = [
		{
			text: "text1",
			imagen: "/image/1.png",
		},
		{
			text: "text2",
			imagen: "/image/2.png",
		},
	];
  return (
		<section id="howWill" className="flex flex-col lg:pb-40 pt-10 ">
			<div className="text-center py-6">
				<h2 className="text-3xl lg:text-5xl font-extrabold text-primary">
					{t("title")}
				</h2>
				<div className="mt-2 w-40 h-3 bg-secundary inline-block"></div>
			</div>
			{items.map((item, index) => (
				<div key={index} className="flex flex-row pt-32 ">
					<div
						className={`flex py-12 flex-col place-content-center bg-[#CBAD8C]  ${
							index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
						}`}
					>
						<div
							className={`flex flex-col lg:flex-1 p-24 lg:p-20 relative ${
								index % 2 === 0 ? "lg:translate-x-32" : "lg:translate-x-32"
							}`}
						>
							<div className="w-1/2 h-1/2 absolute -top-36">
								<Image
									src={item.imagen}
									alt="About Us"
									// layout="responsive"
									width={913}
									height={1288}
									className="asolute"
								/>
							</div>
						</div>
						<div
							className={`flex-1 px-4 lg:p-4 lg:py-12  ${
								index % 2 === 0 ? "lg:-translate-x-40" : "lg:translate-x-40"
							}`}
						>
							<p
								// dangerouslySetInnerHTML={{ __html: t(item.text) }}
								className="text-lg lg:text-xl text-justify lg:text-justify"
							>
								{t(item.text)}
							</p>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

export default HowWill;