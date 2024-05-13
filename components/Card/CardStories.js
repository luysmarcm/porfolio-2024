import Image from 'next/image';
import React from 'react'
import VideoComponent from '../Video/VideoComponent';

const CardStories = ({t, item}) => {
  return (
		<div className="flex flex-row">
			{/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
				<Image
					className="w-full"
					src={t(item.photo)}
					alt="Rooftops"
					width={100}
					height={100}
				/>
				<div className="px-6 py-4">
					<p className="text-gray-700 text-base">{t(item.descripcion)}/</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					<span className=" px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{t(item.customer)}
					</span>
				</div>
			</div> */}
			{/* <div className="flex max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
				<div className="w-1/3">
					<Image
						className="w-full h-full"
						src={t(item.photo)}
						alt="Rooftops"
						width={50}
						height={50}
					/>
				</div>
				<div className="w-2/3 p-4">
					<div className="">
						<p className="text-gray-700 text-base">{t(item.descripcion)}</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className=" px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							{t(item.customer)}
						</span>
					</div>
				</div>
			</div> */}

			{/* <card class="flex justify-center items-center  bg-gris p-4 rounded-lg shadow-md">
				<div class=" flex card text-grey-darkest">
					<Image
						className="w-full h-full rounded-lg"
						src={t(item.photo)}
						alt={t(item.customer)}
						width={100}
						height={100}
						sizes="(max-width: 300px) 100vw, 33vw"
					/>
					<div className="w-full flex flex-col">
						<div className="">
							<div className="px-6 py-4">
								<p className="text-gray-700 text-base">
									{t(item.descripcion)}/
								</p>
							</div>
							<div className="px-6 pt-4 pb-2">
								<span className=" px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
									{t(item.customer)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</card> */}
			<div className="p-20">
				<div className="rounded-lg shadow-lg flex h-auto bg-gris">
					<div className="  ">
						<Image
							src={t(item.photo)}
							width={500}
							height={500}
							alt="ss"
							className="rounded-md"
						/>
					</div>
					<div className="flex flex-col items-center">
						<div className="p-4 text-gray-600">
							<h2 className="text-gray-700 text-base">{t(item.descripcion)}</h2>
						</div>
						<div className="py-4 px-4 text-sm w-full rounded-br-lg">
							<h3>{t(item.customer)}</h3>
						</div>
					</div>
				</div>
			</div>

			{/* <VideoComponent /> */}
		</div>
	);
}

export default CardStories