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
			imagen: "imagen3",
			descripcion: "descripcion3",
			paRes1: "paRes3",
			paRes2: "paRes33",
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
			imagen: "imagen6",
			descripcion: "descripcion6",
			paRes1: "paRes6",
			paRes2: "paRes66",
		},
	];

  return (
		// <>
		// 	<div className="">
		// 		<Image
		// 			src="/image/sobreNosotros.png"
		// 			alt="Contact"
		// 			layout="responsive"
		// 			objectFit="cover"
		// 			width={1920}
		// 			height={900}
		// 			priority
		// 			className="relative  "
		// 			// className="-translate-y-80"
		// 		/>

		// 		<div className=" z-10 w-full h-full flex flex-col">
		// 			<div className="flex flex-col items-center">
		// 				<div>
		// 					<h2 className=" text-5xl font-extrabold text-primary">
		// 						Nos especializamos en
		// 					</h2>
		// 					<div className="w-32 border-t-8  border-secundary " />
		// 				</div>
		// 				<br />
		// 				<br />
		// 				<br />
		// 				<br />
		// 				<br />
		// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-8  place-content-between ">
		// 					{items.map((item) => (
		// 						<CardSpecialize key={item.id} item={item} />
		// 					))}
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className="relative hidden w-8 h-8 rounded-xl lg:overflow-hidden">
		// 		<Image
		// 			src="/image/sobreNosotros.png"
		// 			alt="Contact"
		// 			layout="responsive"
		// 			objectFit="cover"
		// 			width={1920}
		// 			height={900}
		// 			priority
		// 			// className="-translate-y-80"
		// 			className="w-full h-full object-cover lg:-translate-y-80"
		// 		/>
		// 		<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center  ">
		// 			<div className="flex flex-col items-center">
		// 				<div>
		// 					<h2 className=" text-3xl lg:text-5xl font-extrabold text-primary">
		// 						Nos especializamos en
		// 					</h2>
		// 					<div className="w-32 border-t-8  border-secundary " />
		// 				</div>
		// 				<div className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-8  place-content-between  ">
		// 					{items.map((item, index) => (
		// 						<CardSpecialize key={index} item={item} t={t} />
		// 					))}
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
		<div
			className="relative z-20 bg-cover bg-center lg:h-screen lg:w-full"
			style={{ backgroundImage: 'url("/image/sobreNosotros.png")' }}
		>
			<div className="lg:absolute inset-0 flex items-center justify-center px-2">
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