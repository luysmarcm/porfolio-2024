import Image from 'next/image';
import React from 'react'


const CardSpecialize = ({ item,t }) => {
//    const { imagen, descripcion, paRes, paRes2 } = item;
	return (
		<div className="relative p-4 max-w-sm  rounded-lg shadow-md bg-white">
			<div className="absolute -top-12 left-32 flex flex-row">
				<div>
					<Image src={t(item.imagen)} alt="Icono" width={100} height={100} />
				</div>
			</div>
			<div className="mt-14">
				<p className="text-primary text-lg text-center">
					<span className="font-bold">{t(item.paRes1)}</span>&nbsp;
					{t(item.descripcion)}&nbsp;
					<span className="font-bold">{t(item.paRes2)}</span>
				</p>
			</div>
		</div>
	);
};

export default CardSpecialize