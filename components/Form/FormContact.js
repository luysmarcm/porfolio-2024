"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Toast from "../Toast";

const FormContact = ({ t }) => {
    const [showToast, setShowToast] = useState(false);
	// funciona ojo
	const [formData, setFormData] = useState({
		nombre: "",
		telefono: "",
		email: "",
		estado: "",
		ciudad: "",
		codigoPostal: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"lifeimprovement",
				"template_87c1vdx",
				e.target,
				"7bIc42U8JY4eMLcX8"
			)
			.then(
				(result) => {
					console.log("Email successfully sent!", result.text);
				},
				(error) => {
					console.log("Failed to send email:", error.text);
				}
			);
		setFormData({
			nombre: "",
			telefono: "",
			email: "",
			estado: "",
			ciudad: "",
			codigoPostal: "",
		});
		setShowToast(true);
	};
	return (
		<form onSubmit={handleSubmit} className="w-full max-w-lg">
			<div className="flex flex-wrap -mx-3 mb-6 ">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-gray-700 text-xs lg:text-xl font-bold mb-2"
						htmlFor="nombre"
					>
						{t("name")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="nombre"
						type="text"
						// placeholder="Juan Pérez"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="telefono"
					>
						{t("phone")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="text"
						type="text"
						value={formData.telefono}
						placeholder={t("phone")}
						name="telefono"
						onChange={handleChange}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="email"
					>
						{t("email")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="email"
						type="email"
						placeholder={t("email")}
						value={formData.email}
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="state"
					>
						{t("state")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="estado"
						type="text"
						// placeholder="Telefono"
						name="estado"
						onChange={handleChange}
						value={formData.estado}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="telefono"
					>
						{t("city")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="ciudad"
						type="text"
						// placeholder="Telefono"
						name="ciudad"
						value={formData.ciudad}
						onChange={handleChange}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="telefono"
					>
						{t("zipCode")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="codigoPostal"
						type="text"
						// placeholder="Telefono"
						name="codigoPostal"
						value={formData.codigoPostal}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full h-full px-3">
					<button
						className="rounded-full font-semibold text-white bg-primary px-5 py-1 hover:bg-secundary w-full h-full "
						type="submit"
					>
						{t("buttonE")}
					</button>
				</div>
				{showToast && <Toast message="¡Formulario enviado con éxito!" />}
			</div>
		</form>
	);
};

export default FormContact;
