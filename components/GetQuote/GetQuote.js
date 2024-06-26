"use client"
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useTranslations } from "next-intl";

const GetQuote = () => {

	const t1 = useTranslations("GetQuote");
	const t = useTranslations("Contact")
	const codeZ = [
		75201, 75202, 75203, 75204, 33601, 33602, 33603, 33604, 32801, 32802, 32803,
		32804, 77001, 77002, 77003, 77004,
	];
	const [postalCode, setPostalCode] = useState("");
	const [isValid, setisValid] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleInputChange = (e) => {
		setPostalCode(e.target.value);
	};

	const handleCheckPostalCode = () => {
		// const isValidPostalCode = postalCode >= 10000 && postalCode <= 99950;
		const codigoNumerico = parseInt(postalCode, 10);
		if (codeZ.includes(codigoNumerico)) {
			setisValid(true);
			setIsModalOpen(true);
			
		} else {
			setisValid(false);
			setIsModalOpen(true);
		}
	};
	return (
		<div className="flex flex-col space-y-4">
			<div className="text-left">
				<h2 className="text-3xl lg:text-2xl font-extrabold">
					{/* {t("title")} */}
					Estoy interesado en:
				</h2>
			</div>
			<p>Verifica tu codigo postal</p>
			<input
				className="border border-primary rounded-lg"
				type="text"
				placeholder={t1("text")}
				value={postalCode}
				onChange={handleInputChange}
			/>
			<div className="grid grid-cols-2 place-content-around gap-4">
				<button
					className="rounded-full text-white font-bold bg-primary  py-1 hover:bg-secundary"
					onClick={handleCheckPostalCode}
				>
					Agendar inspección general
					{/* {t1("buttonc")} */}
				</button>
				<button 
					className="rounded-full text-white font-bold bg-primary py-1 hover:bg-secundary"
					onClick={handleCheckPostalCode}
				>
					Chequeo de mi sistema de paneles actual
					{/* {t1("buttonc")} */}
				</button>
				<button
					className="rounded-full text-white font-bold bg-primary py-1 hover:bg-secundary"
					onClick={handleCheckPostalCode}
				>
					Remodelación y mantenimiento
					{/* {t1("buttonc")} */}
				</button>
				<button
					className="rounded-full text-white font-bold bg-primary py-1 p-2 hover:bg-secundary"
					onClick={handleCheckPostalCode}
				>
					Instalación de acondicionamiento de agua
					{/* {t1("buttonc")} */}
				</button>
			</div>
			<Modal
				t1={t1}
				t={t}
				isValid={isValid}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
};

export default GetQuote;