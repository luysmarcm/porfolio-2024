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
	
	console.log(isValid);
	return (
		<div>
			<input
				className="border border-primary rounded-full"
				type="text"
				placeholder={t1("text")}
				value={postalCode}
				onChange={handleInputChange}
			/>
			<button
				className="rounded-full text-white font-bold bg-primary px-5 py-1 hover:bg-secundary"
				onClick={handleCheckPostalCode}
			>
				{t1("buttonc")}
			</button>
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