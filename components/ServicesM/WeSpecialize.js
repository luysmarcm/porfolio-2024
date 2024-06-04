import Image from 'next/image';
import React from 'react'
import CardSpecialize from '../Card/CardSpecialize';
import { useTranslations } from 'next-intl';

const WeSpecialize = () => {

	const t = useTranslations("Services");

	const items = [
		{
			imagen: "imagen1",
			descripcion: "descripcion1",
			paRes1: "paRes1",
			paRes2: "paRes11",
		},
		{
			imagen: "imagen2",
			descripcion: "descripcion2",
			paRes1: "paRes2",
			paRes2: "paRes22",
		},
		{
			imagen: "imagen6",
			descripcion: "descripcion6",
			paRes1: "paRes6",
			paRes2: "paRes66",
		},

		{
			imagen: "imagen4",
			descripcion: "descripcion4",
			paRes1: "paRes4",
			paRes2: "paRes44",
		},
		{
			imagen: "imagen5",
			descripcion: "descripcion5",
			paRes1: "paRes5",
			paRes2: "paRes55",
		},
		{
			imagen: "imagen3",
			descripcion: "descripcion3",
			paRes1: "paRes3",
			paRes2: "paRes33",
		},
	];

  return (
		<div
			className="relative z-20 bg-cover bg-center lg:h-screen lg:w-full"
			style={{ backgroundImage: 'url("/image/sobreNosotros.png")' }}
			id="services"
		>
			<div
				data-aos="fade-up"
				className="lg:absolute inset-0 flex items-center justify-center px-2 "
			>
				<div className="flex flex-col items-center py-14 w-full h-full ">
					<div className="text-center py-6">
						<h2 className="text-3xl lg:text-5xl font-extrabold text-primary">
							{t("title")}
						</h2>
						<div className="mt-2 w-40 h-3 bg-secundary inline-block"></div>
					</div>
					<div className="py-24 auto-cols-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10 lg:gap-y-8  place-content-between  ">
						{items.map((item, index) => (
							<CardSpecialize key={index} item={item} t={t} />
						))}
					</div>
				</div>
			</div>
		</div>
		// <section id="services">
		// 	<div className="flex flex-col items-center py-14 w-full h-full ">
		// 		<div className="text-center py-6">
		// 			<h2 className="text-3xl lg:text-5xl font-extrabold text-primary">
		// 				{t("title")}
		// 			</h2>
		// 			<div className="mt-2 w-40 h-3 bg-secundary inline-block"></div>
		// 		</div>
		// 		<div className="py-24 auto-cols-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10 lg:gap-y-8  place-content-between  ">
		// 			{items.map((item, index) => (
		// 				<CardSpecialize key={index} item={item} t={t} />
		// 			))}
		// 		</div>
		// 	</div>
		// </section>
	);
}

export default WeSpecialize