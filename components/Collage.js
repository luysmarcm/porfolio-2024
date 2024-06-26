import React from 'react'

const Collage = () => {
    const images = [
			{ src: "/image/11.jpg", alt: "Descripción de la imagen 1" },
			{ src: "/image/22.jpg", alt: "Descripción de la imagen 2" },
			{ src: "/image/55.jpg", alt: "Descripción de la imagen 3" },
			{ src: "/image/44.jpg", alt: "Descripción de la imagen 4" },
		];
  return (
		<div className="grid grid-cols-2 gap-4">
			{images.map((image, index) => (
				<div key={index} className="relative">
					<img
						src={image.src}
						alt={image.alt}
						className="w-full h-auto rounded-lg"
					/>
					<div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 ">
						<p className="text-white text-center absolute inset-0 flex items-center justify-center">
							{image.alt}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Collage