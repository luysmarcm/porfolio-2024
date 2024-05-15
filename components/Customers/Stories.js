import React from 'react'
import HeadingPage from '../HeadingPage/HeadingPage'
import CardStories from '../Card/CardStories';
import CardCustomers from '../Card/CardCustomers';
import Videos from '../Video/Videos';

const Stories = ({t}) => {
	const items = [
		{
			photo: "photo1",
			descripcion: "description1",
			customer: "customer1",
			

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
			video: "video5	",
		}
		
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
			<div className="container">
				{items.map((item, index) => (
					<>
						<div
							key={index}
							// className="flex flex-row"
							className={`flex place-content-around ${
								index % 2 === 0 ? "flex-row" : "flex-row-reverse"
							}`}
						>
							<CardCustomers key={index} t={t} item={item} />
							<div className="w-1/4 h-1/4 max-w-80">
								<Videos key={index} t={t} item={item} />
							</div>
						</div>
					</>
				))}
			</div>
			
		</div>
	);
}

export default Stories