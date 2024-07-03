import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";

const ModalGallery = ({ onClose,showModal, setshowModal}) => {

    const images = [
			{
				src: "/image/c2.png",
				link: "agrega el enlace aquí",
			},
			{
				src: "/image/c2.png",
				link: "agrega el enlace aquí",
			},
			{
				src: "/image/c2.png",
				link: "agrega el enlace aquí",
			},
		];
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
		<>
			{showModal ? (
				<div className="max-w-max min-w-min p-6 justify-center flex fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg  md:px-2 lg:px-4 lg:justify-center overflow-hidden">
					<div className="relative md:w-1/2 lg:w-auto my-6 xl:w-2/4 py-32">
						<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
							<div className="bg-white p-4 rounded-lg text-center">
								<Slider {...settings}>
									<div>
										<Image
											src="/image/11.jpg"
											alt="Mi Imagen"
											width={1300}
											height={1200}
										/>
									</div>
									<div>
										<Image
											src="/image/11.jpg"
											alt="Mi Imagen"
											width={1300}
											height={1200}
										/>
									</div>
								</Slider>

								<p className="text-2xl p-10"></p>
								<button
									onClick={onClose}
									className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary"
								>
									Cerrar
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default ModalGallery