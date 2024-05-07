import Image from 'next/image';
import React from 'react'
import WeSpecialize from './WeSpecialize';



const AboutUs = () => {
  return (
		<section
			id="aboutme"
			// className="min-h-screen w-full p-2 lg:p-10"
			className="p-3 lg:p-0 lg:py-10"
		>
			<div className="flex items-center flex-col-reverse justify-center w-full lg:flex-row 	lg:justify-around gap-y-10">
				<div className="max-w-sm  lg:max-w-xl lg:w-1/2 lg:justify-center">
					<div className="lg:relative lg:z-20">
						<Image
							src="/image/aboutUs.png"
							alt="About Us"
							// layout="responsive"
							width={913}
							height={1288}
						/>
					</div>
				</div>
				<div className="flex flex-col space-y-7 lg:space-y-5 items-center lg:items-end  lg:w-1/2">
					<div className="text-center">
						<h2 className=" text-2xl lg:text-2xl font-extrabold text-primary">
							Sobre nosotras
						</h2>
						<div className="w-14 border-t-8  border-secundary " />
					</div>

					<h1 className="text-3xl lg:text-6xl font-extrabold text-primary">
						¿Quienes somos?
					</h1>
					<p className="text-base lg:text-xl text-justify">
						Desde nuestra fundación en 2020, nuestra misión en Monarca Life
						Improvement ha sido facilitar a nuestros clientes la realización de
						mejoras en sus propiedades y el impulso de sus negocios,
						especialmente cuando carecen de los recursos necesarios en el
						momento crucial. Nos dedicamos a ofrecer soluciones efectivas y
						personalizadas, buscando constantemente las mejores opciones para
						satisfacer las necesidades de nuestros clientes y ayudarles a
						alcanzar sus metas con éxito
					</p>
				</div>
			</div>
			<WeSpecialize />
		</section>
	);
}

export default AboutUs