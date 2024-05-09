"use client";
import React, { useState, useRef } from "react";
import HeadingPage from "../HeadingPage/HeadingPage";
import Image from "next/image";
import Error from "./Error";
import emailjs from "emailjs-com";
import { useTranslations } from "next-intl";

const Contact = () => {
	const t = useTranslations("Contact");
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
					};

	return (
		<div id="contact">
			<HeadingPage text={t("title")} />
			<div className="flex flex-col lg:flex-row ">
				<div className="">
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
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="text"
									type="text"
									value={formData.telefono}
									// placeholder="Telefono"
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
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="email"
									type="email"
									// placeholder="Telefono"
									value={formData.email}
									name="telefono"
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
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="estado"
									type="text"
									// placeholder="Telefono"
									name="city"
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
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
							<div className="w-full px-3">
								<button
									className="rounded-full font-semibold text-white bg-primary px-5 py-1 hover:bg-secundary"
									type="submit"
								>
									{t("buttonE")}
								</button>
							</div>
						</div>
					</form>
				</div>

				<div className="flex-col items-center py-14">
					<div className="flex items-center mt-4">
						<div>
							<Image
								src="/image/phone.png"
								alt="Icono"
								width={100}
								height={100}
							/>
						</div>
						<div className="flex flex-col">
							<h className="font-bold">{t("whatsApp")}</h>
							<h>+1000000000</h>
						</div>
					</div>
					<div className="flex items-center mt-2">
						<Image
							src="/image/email.png"
							alt="Icono"
							width={100}
							height={100}
						/>
						<div className="flex flex-col">
							<h className="font-bold">{t("emailE")}</h>
							<h>lifeimprovement@example.com</h>
						</div>
					</div>
					<div className="flex items-center mt-2">
						<Image
							src="/image/location.png"
							alt="Icono"
							width={100}
							height={100}
						/>
						<div className="flex flex-col">
							<h className="font-bold">{t("address")}</h>
							<h>lifeimprovement@example.com</h>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
