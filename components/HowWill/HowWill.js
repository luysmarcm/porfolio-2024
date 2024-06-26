import Image from 'next/image';
import React from 'react'
import { useTranslations } from "next-intl";

const HowWill = () => {
	const t = useTranslations("HowWeWork");

	const items = [
		{
			text: "text1",
			imagen: "/image/22.JPG",
		},
		{
			text: "text2",
			imagen: "/image/55.JPG",
		},
	];
  return (
		<section id="howWill" className="flex flex-col lg:pb-40 pt-10 ">
			<div data-aos="fade-up" className="text-center py-6">
				<h2 className="text-3xl lg:text-5xl font-extrabold text-primary">
					{t("title")}
				</h2>
				<div className="mt-2 w-40 h-3 bg-secundary inline-block"></div>
			</div>
			{/* {items.map((item, index) => (
				<div
					data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}

					key={index}
					className="flex flex-row pt-32 "
				>
					<div
						className={`flex py-12 flex-col place-content-center bg-primary  ${
							index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
						}`}
					>
						<div
							className={`flex flex-col lg:flex-1 p-24 lg:p-20 relative ${
								index % 2 === 0 ? "lg:" : "lg:	"
							}`}
						>
							<div className="w-2/3 h-2/3 absolute -top-36">
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
							className={`flex-1 px-4 lg:p-4 lg:py-12  bg-fondo rounded-[50px] ${
								index % 2 === 0 ? "-translate-x-10" : "translate-x-10"
							}`}
						>
							<p
								// dangerouslySetInnerHTML={{ __html: t(item.text) }}
								className="text-lg lg:text-xl text-justify lg:text-justify p-12"
							>
								{t(item.text)}
							</p>
						</div>
					</div>
				</div>
			))} */}
			{items.map((item, index) => (
				<div
					// data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
					key={index}
					className="flex flex-row pt-32 "
				>
					<div
						className={`flex py-12 flex-col items-center px-12 bg-primary ${
							index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
						}`}
					>
						<div
							className={`flex flex-col lg:flex-1 p-4 lg:p-24 relative ${
								index % 2 === 0 ? "lg:-top-56" : "lg:-top-56"
							}`}
						>
							<div className="lg:w-1/2 lg:absolute">
								<Image
									src={item.imagen}
									alt="About Us"
									// layout="responsive"
									width={913}
									height={1288}
									className="rounded-lg"
								/>
							</div>
						</div>
						<div
							className={`lg:w-1/2 flex-1 p-10 lg:p-4 lg:py-3  bg-fondo rounded-[50px] ${
								index % 2 === 0 ? "" : ""
							}`}
						>
							<p
								// dangerouslySetInnerHTML={{ __html: t(item.text) }}
								className="text-lg lg:text-xl text-justify lg:text-justify lg:p-12"
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