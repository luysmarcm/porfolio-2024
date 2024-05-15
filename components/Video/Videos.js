import React from 'react'

const Videos = () => {
  return (
		
			<video className="w-full md:w-3/4 lg:w-full rounded-lg" controls>
				<source src="/videos/video-mo.mp4 " type="video/mp4" />
				Tu navegador no soporta la etiqueta de video.
			</video>
		
	);
}

export default Videos