import React from 'react'
import VideoComponent from '../Video/VideoComponent';
import { useTranslations } from "next-intl";
import Stories from './Stories';
import Image from 'next/image';
import Videos from '../Video/Videos';

const Customers = () => {
  const t = useTranslations("Customers");
  return (
		<section className="">
			<div className="container mx-auto my-8 p-5">
				<div className="flex flex-col-reverse lg:flex-row justify-center items-center">
					<div className="w-full lg:w-1/2">
						{/* <video width="320" height="240" controls preload="none">
						<source
							src="https://www.youtube.com/watch?v=Xe6cSxXm4OM"
							type="video/mp4"
						/>
						<track
							src="/path/to/captions.vtt"
							kind="subtitles"
							srcLang="en"
							label="English"
						/>
						Your browser does not support the video tag.
					</video> */}
						{/* <Videos /> */}
					</div>
					<div className="w-full lg:w-1/2 lg:pl-8">
						<div className="text-center lg:text-start py-6">
							<h2 className="text-3xl lg:text-5xl font-extrabold text-primary">
								{t("title")}
							</h2>
							<div className="mt-2 w-40 h-3 bg-secundary inline-block"></div>
						</div>
						<p className="text-black mb-4 py-4">{t("text")}</p>
						<button className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary">
							<div className="text-center inline-flex items-center relative">
								<span className="px-1 font-bold">{t("buttons")}</span>
							</div>
						</button>
					</div>
				</div>
			</div>

			{/* <Stories t={t} /> */}
		</section>
		// <>
		// 	<section className="text-gray-700 body-font">
		// 		<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		// 			<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
		// 				<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
		// 					Before they sold out
		// 					<br className="hidden lg:inline-block" />
		// 					readymade gluten
		// 				</h1>
		// 				<p className="mb-8 leading-relaxed">
		// 					Copper mug try-hard pitchfork pour-over freegan heirloom neutra
		// 					air plant cold-pressed tacos poke beard tote bag. Heirloom echo
		// 					park mlkshk tote bag selvage hot chicken authentic tumeric
		// 					truffaut hexagon try-hard chambray.
		// 				</p>
		// 				<div className="flex justify-center">
		// 					<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
		// 						Button
		// 					</button>
		// 					<button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
		// 						Button
		// 					</button>
		// 				</div>
		// 			</div>
		// 			<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
		// 				<VideoComponent/>
		// 			</div>
		// 		</div>
		// 	</section>
		// </>
	);
}

export default Customers