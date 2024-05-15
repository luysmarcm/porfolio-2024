"use client";
import React, { useState, useRef } from "react";
import HeadingPage from "../HeadingPage/HeadingPage";
import Image from "next/image";
import Error from "./Error";
import emailjs from "emailjs-com";
import { useTranslations } from "next-intl";

const telefono = "13213306424";

const Contact = () => {
	const formatNumber = (number) => {
		const format = number.slice(1);
		return format.replace("-", "").replace(" ", "");
	};
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
			<div className=" mx-auto my-8 p-5 lg:px-28">
				<div className="flex flex-col lg:flex-row justify-center items-center px-0 place-content-between">
					<div className="w-full lg:w-1/2">
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
										className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
										id="email"
										type="email"
										// placeholder="Telefono"
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
							</div>
						</form>
					</div>
					<div className="w-full lg:w-1/2 lg:pl-8">
						<div className="flex-col items-center py-14">
							<div className="flex items-center mt-4">
								<div>
									<Image
										src="/image/phone.png"
										alt="Icono"
										width={80}
										height={80}
									/>
								</div>
								<div className="flex flex-col px-4">
									<h className="font-bold">{t("whatsApp")}</h>
									<a
										href={`https://wa.me/+1${formatNumber(telefono)}`}
										target="_blank"
										rel="noreferrer"
										className="text-center inline-flex items-center relative hover:underline"
									>
										+321-330-6424{" "}
									</a>
									<h className="font-bold">{t("phoneE")}</h>
									<h>+713-417-0414</h>
								</div>
							</div>
							<div className="flex items-center mt-2">
								<Image
									src="/image/email.png"
									alt="Icono"
									width={80}
									height={80}
								/>
								<div className="flex flex-col px-4">
									<h className="font-bold">{t("emailE")}</h>
									<h>lifeimprovement@monarcallc.us</h>
								</div>
							</div>
							<div className="flex items-center mt-2">
								<Image
									src="/image/location.png"
									alt="Icono"
									width={80}
									height={80}
								/>
								<div className="flex flex-col px-4">
									<h className="font-bold">{t("address")}</h>
									<h>9900 Westpark Dr Houston, TX 77063</h>
								</div>
							</div>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
