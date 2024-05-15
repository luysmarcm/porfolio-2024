import React from 'react'
import VideoComponent from '../Video/VideoComponent';
import Image from 'next/image';
import Videos from '../Video/Videos';

const CardCustomers = ({ t, item, index }) => {
	return (
		<div className=" bg-gris rounded-xl shadow-md overflow-hidden w-1/2 h-full max-h-80">
			<div className="md:flex">
				<div className="md:flex-shrink-0">
					<Image
						className="h-48 w-full object-cover md:h-full md:w-48 rounded-lg"
						src={t(item.photo)}
						alt="Man looking at item at a store"
						width={448}
						height={448}
					/>
				</div>
				<div className="p-8">
					<p className="mt-2 text-gray-500">{t(item.descripcion)}</p>
					<span className=" text-sm font-semibold text-gray-700 mr-2 mb-2">
						{t(item.customer)}
					</span>
				</div>
			</div>
		</div>

		// <div className="container mx-auto px-4">
		// 	<div className='bg-gris rounded-lg'>
		// 		<div
		// 			className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start  lg:space-y-0"
		// 		>
		// 			<a href="https://stackdiary.com/" className="group">
		// 				<div className="aspect-w-3 aspect-h-2">
		// 					<Image
		// 						className="object-cover shadow-lg rounded-lg group-hover:opacity-75"
		// 						src={t(item.photo)}
		// 						alt="Featured Photo"
		// 						width={140}
		// 						height={100}
		// 					/>
		// 				</div>
		// 			</a>
		// 			<div className="sm:col-span-2" style={{ cursor: "auto" }}>
		// 				<div className="mt-2" style={{ cursor: "auto" }}>

		// 					<p
		// 						className="mt-1 text-sm font-normal text-skin-base leading-5"
		// 						style={{ cursor: "auto" }}
		// 					>
		// 						{t(item.descripcion)}
		// 					</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		// <div class="w-64 h-64 overflow-auto bg-white shadow-md rounded-lg p-4">
		// 	<h2 class="font-bold text-xl mb-2">Título de la tarjeta</h2>
		// 	<p class="text-gray-700">{t(item.descripcion)}</p>
		// </div>
	);
};

export default CardCustomers