import Image from 'next/image';
import React from 'react'
import { useTranslations } from 'next-intl';



const AboutUs = () => {
	const t = useTranslations("AboutUs");

  return (
		<section
			id="aboutUs"
			// className="min-h-screen w-full p-2 lg:p-10"
			className="p-4 lg:p-0 lg:py-10"
		>
			<div className="flex items-center flex-col justify-center w-full lg:flex-row 	lg:justify-around gap-y-10">
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
					<div className="text-center py-6">
						<h2 className=" text-2xl lg:text-2xl font-extrabold text-primary">
							{t("title")}
						</h2>
						<div className="mt-1 w-14 h-2 bg-secundary inline-block"></div>
					</div>

					<h1 className="text-3xl lg:text-6xl font-extrabold text-primary">
						{t("subTitle")}
					</h1>
					<p className="text-base lg:text-xl text-justify">{t("text")}</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs