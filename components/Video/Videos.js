import React from 'react'

const Videos = ({ item }) => {
	return (
		<video
			className="w-full rounded-lg" controls
		>
			<source src={item.video} type="video/mp4" />
			Tu navegador no soporta la etiqueta de video.
		</video>
	);
};

export default Videos