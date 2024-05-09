"use client";
import React, { useState, useRef } from "react";
import HeadingPage from "../HeadingPage/HeadingPage";
import Image from "next/image";
import Error from "./Error";
import emailjs from "emailjs-com";

const Contact = () => {
	

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
								// 			form.current,
								// 			"7bIc42U8JY4eMLcX8"
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
			<HeadingPage text="Estamos listas para brindarte la mejor asesoria correspondiente para tu negocio o tu hogar." />
			<div className="flex flex-col lg:flex-row items-center py-14 ">
				<div className="container mx-auto p-4">
					<form onSubmit={handleSubmit} className="w-full max-w-lg">
						<div className="flex flex-wrap -mx-3 mb-6 ">
							<div className="w-full px-3">
								<label
									className="block tracking-wide text-gray-700 text-xs lg:text-xl font-bold mb-2"
									htmlFor="nombre"
								>
									Nombre y apellido
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
									Telefono
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
									Email
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
									htmlFor="telefono"
								>
									Estado
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="estado"
									type="text"
									// placeholder="Telefono"
									name="telefono"
									onChange={handleChange}
									value={formData.estado}
								/>
							</div>
							<div className="w-full px-3">
								<label
									className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
									htmlFor="telefono"
								>
									Ciudad
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
									Codigo Postal
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
									Enviar
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
						<span>+1000000000</span>
					</div>
					<div className="flex items-center mt-2">
						<Image
							src="/image/email.png"
							alt="Icono"
							width={100}
							height={100}
						/>
						<span>lifeimprovement@example.com</span>
					</div>
					<div className="flex items-center mt-2">
						<Image
							src="/image/location.png"
							alt="Icono"
							width={100}
							height={100}
						/>
						<span>00000 dirección</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
