import React from 'react'
import HeadingPage from '../HeadingPage/HeadingPage'
import CardCustomers from '../Card/CardCustomers';

const Stories = ({t}) => {
	const items = [
		{
			photo: "photo1",
			descripcion: "description1",
			customer: "customer1",
			video: "/videos/video-mo.mp4",
		},
		{
			photo: "photo2",
			descripcion: "description2",
			customer: "customer2",
			video: "/videos/video-mo.mp4",
		},
		{
			photo: "photo3",
			descripcion: "description3",
			customer: "customer3",
			video: "/videos/video-mo.mp4",
		},
		{
			photo: "photo4",
			descripcion: "description4",
			customer: "customer4",
			video: "/videos/video-mo.mp4",
		},

		{
			photo: "photo5",
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