
"use client";
import { useState } from "react";
import Image from "next/image";
import ModalGallery from "../Modal/ModalGallery";

const CardTesttmonio = ({ t, item, index}) => {
	const [showModal, setshowModal] = useState(false);

	return (
		// <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
		// 	<div className="order-1 sm:ml-6 xl:ml-0">
		// 		<h3 className="mb-1 text-slate-900 font-semibold">
		// 			<span className="mb-1 block text-sm leading-6 text-indigo-500">
		// 				Headless UI
		// 			</span>
		// 			Completely unstyled, fully accessible UI components
		// 		</h3>
		// 		<div className="prose prose-slate prose-sm text-slate-600">
		// 			<p>
		// 				Completely unstyled, fully accessible UI components, designed to
		// 				integrate beautifully with Tailwind CSS.
		// 			</p>
		// 		</div>
		// 		<a
		// 			className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
		// 			href="#"
		// 		>
		// 			Learn more
		// 			<span className="sr-only">
		// 				, Completely unstyled, fully accessible UI components
		// 			</span>
		// 			<svg
		// 				className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
		// 				width="3"
		// 				height="6"
		// 				viewBox="0 0 3 6"
		// 				fill="none"
		// 				stroke="currentColor"
		// 				strokeWidth="2"
		// 				strokeLinecap="round"
		// 				strokeLinejoin="round"
		// 			>
		// 				<path d="M0 0L3 3L0 6"></path>
		// 			</svg>
		// 		</a>
		// 	</div>
		// 	<img
		// 		src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
		// 		alt=""
		// 		className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
		// 		width="1216"
		// 		height="640"
		// 	/>
		// </li>
		<div className="grid grip-cols-1 lg:grid-cols-2 place-content-around gap-y-5 lg:gap-7 p-5" 
		data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}>
			<card
				className={`flex flex-col justify-center  ${
					index % 2 === 0 ? "lg:order-first" : "lg:order-last"
				}`}
			>
				<div className="bg-fondo relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border">
					<div className="w-full md:w-1/3  grid place-items-center">
						<Image
							className="object-cover rounded-lg "
							src={item.photo}
							alt="Man looking at item at a store"
							width={1000}
							height={1500}		
						/>
					</div>
					<div className="w-full md:w-2/3 flex flex-col space-y-2 p-3 justify-center">
						<div className="flex flex-row">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6 text-yellow-500"
							>
								<path
									fillRule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6 text-yellow-500"
							>
								<path
									fillRule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6 text-yellow-500"
							>
								<path
									fillRule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6 text-yellow-500"
							>
								<path
									fillRule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="size-6 text-yellow-500"
							>
								<path
									fillRule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<p className="md:text-base text-gray-500 text-base text-balance">
							{t(item.descripcion)}
						</p>
						<p className="text-xl font-black text-gray-800">
							{t(item.customer)}
						</p>
					</div>
				</div>
			</card>

			{/* <div className="w-full h-full">
				<Image
					className="object-cover rounded-lg "
					src="/image/11.jpg"
					alt="Man looking at item at a store"
					width={1500}
					height={500}
				/>
			</div> */}
			{/* <div className="relative group">
				<Image src="/image/11.jpg" alt="Mi Imagen" width={1300} height={1200} />
				<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
					<button
						onClick={() => setshowModal(true)}
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-blue-500 text-white p-2 "
					>
						Ver mas
					</button>
					<ModalGallery
						showModal={showModal}
						setshowModal={setshowModal}
						onClose={() => setshowModal(false)}
					/>
				</div>
			</div> */}

			<video
				className="rounded-lg w-full h-full aspect-w-full aspect-h-full "
				controls
			>
				<source src={item.video} type="video/mp4" />
				Tu navegador no soporta la etiqueta de video.
			</video>

			{/* <video width="768" height="768" controls preload="none">
				<source src={item.video} type="video/mp4" />
				Your browser does not support the video tag.
			</video> */}
		</div>
	);
};

export default CardTesttmonio;
