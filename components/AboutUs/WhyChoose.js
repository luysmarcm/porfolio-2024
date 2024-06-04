import React from "react";
import CardItem from "../Card/CardItem";
import Image from "next/image";

const cardContainerClasses =
	"flex flex-col md:flex-row bg-white dark:bg-zinc-800 p-4 rounded-lg";
const gridClasses = "";
const cardContentClasses = "";
const imageClasses = "";

const WhyChoose = ({t}) => {

	const items = [
		{
			title: "title1",
			text: "text1",
			image: "/image/enfoque.png",
		},
		{
			title: "title2",
			text: "text2",
			image: "/image/flex.png",
		},
		{
			title: "title3",
			text: "text3",
			image: "/image/costo.png",
		},
		{
			title: "title4",
			text: "text4",
			image: "/image/atencion.png",
		},
	];
	return (
		<section>
			<div className="text-center py-6">
				<h2 className="text-3xl lg:text-5xl font-extrabold text-primary">
					{t("subTitle")}
				</h2>
				<div className="mt-2 w-40 h-3 bg-secundary inline-block"></div>
			</div>
			<div className="flex flex-col md:flex-row space-y-4">
				<div className="w-full bg-primary rounded-md lg:rounded-r-[100px] lg:w-3/4">
					<div className="grid grip-col-1 place-content-between  lg:grid-cols-2 gap-4 p-4 lg:p-20 lg:px-36 lg:-translate-x-14">
						{items.map((item, index) => (
							<CardItem key={index} item={item} t={t} />
						))}
					</div>
				</div>
				<div className="flex w-full justify-center items-center lg:-translate-x-32 lg:w-1/4">
					{/* <img
					src="https://placehold.co/300x500"
					alt="Event Photo"
					className="rounded-lg shadow-lg"
				/> */}
					<Image
						src="/image/we.jpg"
						alt="About Us"
						// layout="responsive"
						width={300}
						height={500}
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};


export default WhyChoose;
