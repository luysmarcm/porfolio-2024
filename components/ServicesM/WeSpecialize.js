import Image from 'next/image';
import React from 'react'
import CardSpecialize from '../Card/CardSpecialize';

const items = [
	{
		id: 1,
		imagen: "/image/icono-otorgamos.png",
		descripcion:
			"para proyectos estéticos y funcionales tanto comerciales como residenciales",
		paRes: "Otorgamos hasta $40.000",
		paRes2: "",
	},
	{
		id: 2,
		imagen: "/image/icono-renovacion.png",
		descripcion: "para las propiedades",
		paRes: "Inspecciones",
		paRes2: "completamente gratis",
	},
	{
		id: 3,
		imagen: "/image/icono-panel-solar.png",
		descripcion: "los problemas que tengas con tu actual",
		paRes: "Resolvemos",
		paRes2: "sistema de paneles solares",
	},
	{
		id: 4,
		imagen: "/image/icono-rentable.png",
		descripcion: "de energía",
		paRes: "Proyectos",
		paRes2: "renovable",
	},
	{
		id: 5,
		imagen: "/image/icono-remodelacion.png",
		descripcion: "residenciales y comerciales",
		paRes: "Remodelaciones",
		paRes2: "",
	},
	{
		id: 6,
		imagen: "/image/icono-instalacion.png",
		descripcion: "de acondicionadores de agua para",
		paRes: "Instalación",
		paRes2: "toda tu propiedad",
	},
];

const WeSpecialize = () => {

  return (
		// <div className="">
		// 	<Image
		// 		src="/image/sobreNosotros.png"
		// 		alt="Contact"
		// 		layout="responsive"
		// 		objectFit="cover"
		// 		width={1920}
		// 		height={900}
		// 		priority
		// 		className="relative  "
		// 		// className="-translate-y-80"
		// 	/>

		// 	<div className=" z-10 w-full h-full flex flex-col">
		// 		<div className="flex flex-col items-center">
		// 			<div>
		// 				<h2 className=" text-5xl font-extrabold text-primary">
		// 					Nos especializamos en
		// 				</h2>
		// 				<div className="w-32 border-t-8  border-secundary " />
		// 			</div>
		// 			<br />
		// 			<br />
		// 			<br />
		// 			<br />
		// 			<br />
		// 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-8  place-content-between ">
		// 				{items.map((item) => (
		// 					<CardSpecialize key={item.id} item={item} />
		// 				))}
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		// <div className="relative hidden w-8 h-8 rounded-xl lg:overflow-hidden">
		// 	<Image
		// 		src="/image/sobreNosotros.png"
		// 		alt="Contact"
		// 		layout="responsive"
		// 		objectFit="cover"
		// 		width={1920}
		// 		height={900}
		// 		priority
		// 		// className="-translate-y-80"
		// 		className="w-full h-full object-cover lg:-translate-y-80"
		// 	/>
		// 	<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center  ">
		// 		<div className="flex flex-col items-center">
		// 			<div>
		// 				<h2 className=" text-3xl lg:text-5xl font-extrabold text-primary">
		// 					Nos especializamos en
		// 				</h2>
		// 				<div className="w-32 border-t-8  border-secundary " />
		// 			</div>
		// 			<div className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-8  place-content-between  ">
		// 				{items.map((item) => (
		// 					<CardSpecialize key={item.id} item={item} />
		// 				))}
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<section id="services">
			<div className="flex flex-col items-center py-14">
				<div>
					<h2 className=" text-3xl lg:text-5xl font-extrabold text-primary">
						Nos especializamos en
					</h2>
					<div className="w-32 border-t-8  border-secundary " />
				</div>
				<div className="py-24 auto-cols-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 lg:gap-y-8  place-content-between  ">
					{items.map((item) => (
						<CardSpecialize key={item.id} item={item} />
					))}
				</div>
			</div>
		</section>
	);
}

export default WeSpecialize