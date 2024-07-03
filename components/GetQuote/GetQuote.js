"use client"
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useTranslations } from "next-intl";

const GetQuote = () => {

	const buttons = [
		{
			button: "buttonA",
		},
		{
			button: "buttonCh",
		},
		{
			button: "buttonR",
		},
		{
			button: "buttonI",
		},
	];

	const t1 = useTranslations("GetQuote");
	const t = useTranslations("Contact")
	const codeZ = [
		77008, 75201, 75202, 75203, 75204, 33601, 33602, 33603, 33604, 32801, 32802,
		32803, 32804, 77001, 77002, 77003, 77004, 76951, 75015, 76597, 73301, 78830,
		73344, 76676, 75599, 75016, 75053, 75047, 75049, 75046, 75380, 75942, 75934,
		77976, 77855, 78670, 79053, 78591, 88595, 73960, 77878, 77663, 75132, 79534,
		76880, 75017, 79105, 79942, 76573, 75026, 77838, 75880, 75085, 75029, 77463,
		75014, 75011, 77404, 75507, 77836, 79226, 79852, 78102, 76442, 78624, 76240,
		76528, 77963
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
		<div  className="flex flex-col space-y-4">
			<div className="text-left">
				<h2 className="text-3xl lg:text-2xl font-extrabold">
					{t1("subTitle")}
				</h2>
			</div>
			<p>{t1("codeV")}</p>
			<input
				className="border border-primary rounded-lg"
				type="text"
				placeholder={t1("text")}
				value={postalCode}
				onChange={handleInputChange}
			/>
			<div className="grid grid-cols-2 place-content-around gap-4">
				{buttons.map((button, index) => (
					<button
						key={index}
						className="rounded-full text-white font-bold bg-primary  py-1 p-2 hover:bg-secundary"
						onClick={handleCheckPostalCode}
					>
						{t1(button.button)}
					</button>
				))}

				{/* <button
					className="rounded-full text-white font-bold bg-primary py-1 p-2 hover:bg-secundary"
					onClick={handleCheckPostalCode}
				>
					{t1("buttonCh")}
				</button>
				<button
					className="rounded-full text-white font-bold bg-primary py-1 p-2 hover:bg-secundary"
					onClick={handleCheckPostalCode}
				>
					{t1("buttonR")}
				</button>
				<button
					className="rounded-full text-white font-bold bg-primary py-1 p-2 hover:bg-secundary"
					onClick={handleCheckPostalCode}
				>
					{t1("buttonI")}
				</button> */}
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