import Image from 'next/image';
import React from 'react'

const HowWill = () => {
  return (
		<section id="howWill" className="flex flex-col items-center justify-center h-screen">
			<div className="text-center">
				<h1 className=" text-3xl lg:text-6xl font-extrabold text-primary">
					¿Como lo haremos?
				</h1>
				<div className="w-14 border-t-8      border-secundary " />
			</div>
			<div className="w-full  ">
				<div className="flex items-center flex-col justify-center w-full lg:flex-row 	lg:justify-around gap-y-10">
					<div className="max-w-sm  lg:max-w-xl lg:w-1/2 lg:justify-center">
						<div className="lg:relative lg:z-20">
							<Image
								src="/image/1.png"
								alt="About Us"
								// layout="responsive"
								width={913}
								height={1288}
							/>
						</div>
					</div>
					<div className="bg-[#CBAD8C]flex flex-col space-y-7 lg:space-y-5 items-center lg:items-end  lg:w-1/2">
						<p className="text-base lg:text-xl text-justify">
							Para comenzar, coordinaremos una cita contigo y tu familia para
							realizar un{" "}
							<spam className="font-bold">diagnóstico detallado </spam>
							de la situación actual que estás enfrentando. Luego, te
							presentaremos las opciones de solución más adecuadas para tus{" "}
							<spam className="font-bold">necesidades específicas.</spam>
						</p>
					</div>
				</div>
				<div className="p-4">Esta sección no tiene color de fondo.</div>
			</div>
		</section>
	);
}

export default HowWill;