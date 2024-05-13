import React from 'react'

const Videos = () => {
  return (
		<div className="flex justify-center items-center  bg-gray-200">
			<video className="rounded shadow-lg w-2/6" controls>
				<source src="/videos/video1.mp4 " type="video/mp4" />
				Tu navegador no soporta la etiqueta de video.
			</video>
		</div>
	);
}

export default Videos