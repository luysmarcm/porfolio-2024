import React from 'react'

const HeadingPage = (props) => {
  return (
		<div
			className="relative text-center bg-cover bg-center h-48"
			style={{ backgroundImage: 'url("/image/headingPage.png")' }}
		>
			<div className="absolute inset-0 flex items-center justify-center ">
				<div className='w-1/2'>
					<h2 className="text-primary text-2xl font-bold">{props.text}</h2>
					<p className="text-white mt-2">Monarca life improvement</p>
				</div>
			</div>
		</div>
	);
}

export default HeadingPage