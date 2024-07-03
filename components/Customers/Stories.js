import HeadingPage from '../HeadingPage/HeadingPage'
import CardTestimonials from "../Card/CardTestimonials";

const Stories = ({ t}) => {
	const items = [
		{
			photo: "/image/c1.png",
			descripcion: "description1",
			customer: "customer1",
			video: "/videos/V1.mp4",
		},
		{
			photo: "/image/c2.png",
			descripcion: "description2",
			customer: "customer2",
			video: "/videos/V3.mp4",
		},
		{
			photo: "/image/c3.png",
			descripcion: "description3",
			customer: "customer3",
			video: "/videos/V4.mp4",
		},
		{
			photo: "/image/c4.png",
			descripcion: "description4",
			customer: "customer4",
			video: "/videos/V6.mp4",
		},

		{
			photo: "/image/c5.png",
			descripcion: "description5",
			customer: "customer5",
			video: "/videos/V5.mp4",
		},
		{
			photo: "/image/c6.png",
			descripcion: "description6",
			customer: "customer6",
			video: "/videos/v7.mp4",
		},
	];

	return (
		<section>
			<HeadingPage text={t("titleS")} le="text-5xl" le1="text-3xl" />
			{items.map((item, index) => (
				<CardTestimonials key={index} t={t} item={item} index={index} />
			))}
		</section>
	);
};

export default Stories