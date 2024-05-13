import React from 'react'
import HeadingPage from '../HeadingPage/HeadingPage'
import CardStories from '../Card/CardStories';
import CardCustomers from '../Card/CardCustomers';

const Stories = ({t}) => {
  const items = [
		{
			photo: "photo1",
			descripcion: "description1",
			customer: "customer1",
			video: "video1",
		},
		{
			photo: "photo2",
			descripcion: "description2",
			customer: "customer2",
			video: "video2",
		},
		{
			photo: "photo3",
			descripcion: "description3",
			customer: "customer3",
			video: "video3",
		},
		{
			photo: "photo4",
			descripcion: "description4",
			customer: "customer4",
			video: "video4",
		},
		{
			photo: "photo5",
			descripcion: "description5",
			customer: "customer5",
			video: "video5",
		},
	];

  return (
		<div>
			<HeadingPage text={t("titleS")} />
			{/* <div className="w-full md:w-auto">
				{items.map((item, index) => (
					<div key={index}>
						<CardStories key={index} t={t} item={item} />
					</div>
				))}
			</div> */}
			<div>
				{items.map((item, index) => (
					<div key={index}  
          // className={`flex w-full mb-4 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
          className='grid grid-cols-2'
          >
						<CardCustomers key={index} t={t} item={item} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Stories