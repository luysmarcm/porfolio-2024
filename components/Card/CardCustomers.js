import React from 'react'
import VideoComponent from '../Video/VideoComponent';
import Image from 'next/image';
import Videos from '../Video/Videos';

const CardCustomers = ({t, item}) => {
  return (
		<div className=" ">
			<div className="rounded-lg overflow-hidden shadow-lg flex w-full mb-4 bg-gris max-w-sm ">
				<div className="w-1/2">
					<div>
						<Image
							src={t(item.photo)}
							alt="ss"
							width={500}
							height={750}
							unoptimized
							// className="rounded-lg w-1/2 p-4"
						/>
					</div>
				</div>
				<div className="w-1/2 p-4">
					<p className="text-gray-700 text-base">
						<p className="text-gray-700 text-base">{t(item.descripcion)}</p>
					</p>
					<p className="text-gray-600 text-xs mt-2">-{t(item.customer)}</p>
				</div>
			</div>
		</div>
		// <>
		// 	<Videos/>
		// 	<div className="flex flex-row rounded-lg shadow-lg bg-gris ">
		// 		<div className="rounded-xl">
		// 			<Image
		// 				src={t(item.photo)}
		// 				alt="ss"
		// 				width={500}
		// 				height={750}
		// 				unoptimized

		// 			/>
		// 		</div>
		// 		<div className=" p-4">
		// 			<p className="text-gray-700 text-base">{t(item.descripcion)}</p>
		// 			<p className="text-gray-600 text-xs mt-2">-{t(item.customer)}</p>
		// 		</div>
		// 	</div>
		// 	{/* <VideoComponent /> */}
		// </>
	);
}

export default CardCustomers