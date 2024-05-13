import React from "react";

const VideoComponent = () => {
	const videoId = "_lQxaYmt0DQ"; // Reemplaza esto con el ID de tu video de YouTube

	return (
		// <div className="">
		// 	<div className="flex justify-center items-center">
		// 		<div className="aspect-w-16 aspect-h-9">
		// 			<iframe
		// 				className="w-full h-full"
		// 				src={`https://www.youtube.com/embed/${videoId}`}
		// 				title="YouTube video player"
		// 				frameborder="0"
		// 				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		// 				allowFullScreen
		// 				width="320"
		// 				height="240"
		// 			/>
		// 		</div>
		// 	</div>
		// </div>
		//
		// <div className="flex">
		// 	{/* Video */}
		// 	<div className="w-1/2 aspect-w-16 aspect-h-9">
		// 		<iframe
		// 			className="w-full h-full"
		// 			src={`https://www.youtube.com/embed/${videoId}`}
		// 			title="YouTube video player"
		// 			frameborder="0"
		// 			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		// 			allowFullScreen
		// 		/>
		// 	</div>
		// 	{/* Componente de texto */}
		// 	<div className="w-1/2 p-4">
		// 		<h1 className="text-gray-900 font-bold text-2xl">Título</h1>
		// 		<p className="mt-2 text-gray-600 text-sm">Texto del componente.</p>
		// 	</div>
		// </div>
		<div className="flex">
			{/* Video */}
			<div className="">
				<iframe
					className="w-full h-full"
					src={`https://www.youtube.com/embed/${videoId}`}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			{/* Componente de texto */}
			{/* <div className="w-1/4 p-4">
				<h1 className="text-gray-900 font-bold text-2xl">Título</h1>
				<p className="mt-2 text-gray-600 text-sm">Texto del componente.</p>
			</div> */}
		</div>
	);
};

export default VideoComponent;
