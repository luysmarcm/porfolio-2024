'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from "framer-motion";

const CarruselHero = () => {
    //  const videoRef = useRef();
    const t = useTranslations("Banner");

    const settings = {
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				fade: true,
			};
    

  return (
		// <div className="relative   ">
		// 	<Slider {...settings}>
		// 		<div className="max-w-[1536px] max-h-[700px] bg-black bg-opacity-50 h-screen w-screen ">
		// 			<video autoPlay loop muted className="w-full h-auto">
		// 				<source src="/videos/video-mo.mp4 " type="video/mp4" />
		// 			</video>
		// 			<div className="absolute top-0 left-0 h-screen w-screen bg-primary bg-opacity-50 text-whit ">
		// 				<div className="lg:text-start px-10 lg:w-1/2 pt-40">
		// 					<h2 className="text-center lg:text-left text-3xl font-black lg:text-5xl text-white">
		// 						{t("title")}
		// 					</h2>
		// 					<br />
		// 					<p className="text-center lg:text-left text-base md:text-base  font-semibold text-white">
		// 						<br />
		// 						<br />
		// 						{t("parrafo2")}
		// 					</p>
		// 					<div className="flex flex-row space-x-4 justify-center lg:justify-start py-6">
		// 						<button className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary">
		// 							<div className="text-center inline-flex items-center relative">
		// 								<span className="px-1 font-bold">{t("buttonc")}</span>
		// 							</div>
		// 						</button>

		// 						<button className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary">
		// 							<div className="text-center inline-flex items-center relative">
		// 								<span className="px-1 font-bold">{t("buttons")}</span>
		// 							</div>
		// 						</button>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>

		// 		{/* <div>
		// 			<video autoPlay loop muted className="w-full h-auto">
		// 				<source src="/videos/video-mo.mp4 " type="video/mp4" />
		// 			</video>
		// 			<div className="absolute top-0 left-0 h-screen w-screen text-white bg-black bg-opacity-50 text-9xl">
		// 				Texto encima de la imagen
		// 			</div>
		// 		</div> */}
		// 	</Slider>
		// </div>
		<div className="relative h-screen bg-banner bg-cover">
			<video
				autoPlay
				loop
				muted
				className="absolute top-0 left-0 w-full h-full object-cover opacity-70 bg-primary"
			>
				<source src="/videos/vpp.mp4" type="video/mp4" />
				Tu navegador no admite la etiqueta de video.
			</video>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="flex items-center flex-col-reverse justify-center w-full lg:flex-row lg:justify-around gap-y-10 ">
					<div className="lg:text-start px-10 lg:w-1/2 ">
						<motion.div
							initial={{ x: -1000, opacity: 0 }} // Empieza fuera de la pantalla a la izquierda
							animate={{ x: 0, opacity: 1 }} // Se desplaza hacia la posición original
							exit={{ x: 1000, opacity: 0 }} // Sale hacia la derecha al cambiar de página
							transition={{ duration: 1.1 }}
						>
							<h2 className="text-center lg:text-left text-3xl font-black lg:text-5xl text-primary">
								{t("title")}
							</h2>
							<br />
							<p className="text-center lg:text-left text-base md:text-base text-black font-semibold">
								{t("parrafo1")}
							</p>
						</motion.div>
						<div className="flex flex-row space-x-4 justify-center lg:justify-start py-6">
							<motion.button
								initial={{ x: 1000, opacity: 0 }} // Empieza fuera de la pantalla a la derecha
								animate={{ x: 0, opacity: 1 }} // Se desplaza hacia la posición original
								exit={{ x: -1000, opacity: 0 }} // Sale hacia la izquierda al cambiar de página
								transition={{ duration: 1.1 }}
								className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary"
							>
								<div className="text-center inline-flex items-center relative">
									<a href="#contact" className="px-1 font-bold">
										{t("buttonc")}
									</a>
								</div>
							</motion.button>
							<motion.button
								initial={{ x: 1000, opacity: 0 }} // Empieza fuera de la pantalla a la derecha
								animate={{ x: 0, opacity: 1 }} // Se desplaza hacia la posición original
								exit={{ x: -1000, opacity: 0 }} // Sale hacia la izquierda al cambiar de página
								transition={{ duration: 1.1 }}
								className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary"
							>
								<div className="text-center inline-flex items-center relative">
									<a href="#services" className="px-1 font-bold">
										{t("buttons")}
									</a>
								</div>
							</motion.button>
						</div>
					</div>

					<motion.div
						className="max-w-sm w-3/5 lg:max-w-xl lg:w-1/2 lg:justify-center"
						initial={{ scale: 0 }} // Escala inicial (sin zoom)
						animate={{ scale: 1 }} // Escala al cargar la página
						transition={{ duration: 0.7 }}
					>
						<Image
							src="/image/logo-monarca.png"
							alt="Monarca"
							width="1920"
							height="1766"
						/>
					</motion.div>
				</div>
			</div>
			{/* <div >
				<a
					href="#servcies"
					aria-label="Scroll down"
					className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110 "
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="currentColor"
					>
						<path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
					</svg>
				</a>
			</div> */}
		</div>
	);
}

export default CarruselHero