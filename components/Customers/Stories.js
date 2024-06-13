import React from 'react'
import HeadingPage from '../HeadingPage/HeadingPage'
import CardCustomers from '../Card/CardCustomers';

const Stories = ({t}) => {
	const items = [
		{
			photo: "/image/c1.png",
			descripcion: "description1",
			customer: "customer1",
			video: "/videos/video-mo.mp4",
		},
		{
			photo: "/image/c2.png",
			descripcion: "description2",
			customer: "customer2",
			video: "/videos/video-mo.mp4",
		},
		{
			photo: "/image/c3.png",
			descripcion: "description3",
			customer: "customer3",
			video: "/videos/video-mo.mp4",
		},
		{
			photo: "/image/c4.png",
			descripcion: "description4",
			customer: "customer4",
			video: "/videos/video-mo.mp4",
		},

		{
			photo: "/image/c5.png",
			descripcion: "description5",
			customer: "customer5",
			video: "/videos/video-mo.mp4",
		},
	];

	return (
		<section>
			<HeadingPage text={t("titleS")} le="text-5xl" />
			{items.map((item, index) => (
				<CardCustomers key={index} t={t} item={item} index={index} />
			))}
		</section>
	);
}

export default Stories