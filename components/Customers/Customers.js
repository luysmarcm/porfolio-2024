"use client"
import { useTranslations } from "next-intl";
import Stories from './Stories';


const Customers = () => {

  const t = useTranslations("Customers");
  return (
		<section>
			<div
				data-aos="fade-up"
				className="flex flex-col-reverse lg:flex-row justify-center items-center mx-auto my-8 p-5"
			>
				<div className="w-full lg:w-1/2">
					<video className="w-full md:w-3/4 lg:w-full rounded-lg" controls>
						<source src="/videos/video-mo.mp4" type="video/mp4" />
						Tu navegador no soporta la etiqueta de video.
					</video>
				</div>
				<div className="w-full pb-8 lg:w-1/2 lg:pl-8">
					<div className="text-center lg:text-start py-6">
						<h2 className="text-3xl lg:text-5xl font-extrabold text-primary">
							{t("title")}
						</h2>
						<div className="mt-2 w-40 h-3 bg-secundary inline-block"></div>
					</div>
					<p className="text-black mb-4 py-4">{t("text")}</p>
					<button className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary">
						<div className="text-center inline-flex items-center relative">
							<a href="#services" className="px-1 font-bold">
								{t("buttons")}
							</a>
						</div>
					</button>
				</div>
			</div>
			<Stories t={t} />
		</section>
	);
}

export default Customers