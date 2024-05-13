import Image from "next/image";
import { useTranslations } from "next-intl";


const HeroSection = () => {
    const t = useTranslations("Banner");

	return (
		<div
			id="home"
			// className="bg-cover bg-center h-screen"
			// style={{ backgroundImage: `url(${bag2})` }}
			// className="relative bg-[url('/image/banner.webp')] bg-cover bg-no-repeat bg-center bg-fixed py-16 lg:py-32"
			className="relative bg-[url('/image/banner.webp')] lg:bg-cover bg-no-repeat bg-center bg-fixed pt-24 lg:pt-32"
		>
			<div className="flex items-center flex-col-reverse justify-center w-full lg:flex-row lg:justify-around gap-y-10">
				<div className="lg:text-start px-10 lg:w-1/2 ">
					<h2 className="text-center lg:text-left text-3xl font-black lg:text-5xl text-primary">
						{t("title")}
					</h2>
					<br />
					<p className="text-center lg:text-left text-base md:text-base text-black font-semibold">
						{t("parrafo1")}
						<br />
						<br />
						{t("parrafo2")}
					</p>
					<div className="flex flex-row space-x-4 justify-center lg:justify-start py-6">
						<button className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary">
							<div className="text-center inline-flex items-center relative">
								<span className="px-1 font-bold">{t("buttonc")}</span>
							</div>
						</button>

						<button className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary">
							<div className="text-center inline-flex items-center relative">
								<span className="px-1 font-bold">{t("buttons")}</span>
							</div>
						</button>
					</div>
				</div>

				<div className="max-w-sm  lg:max-w-xl lg:w-1/2 lg:justify-center">
					<Image
						src="/image/logo-monarca.png"
						alt="Monarca"
						width="1920"
						height="1766"
					/>
				</div>
			</div>
			<div className="p-5">
				<a
					href="#aboutUs"
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
			</div>
		</div>
	);
};

export default HeroSection;
