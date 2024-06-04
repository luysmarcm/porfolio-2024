"use client";
import React, { useState, useRef } from "react";
import HeadingPage from "../HeadingPage/HeadingPage";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FormContact from "../Form/FormContact";

const telefono = "13213306424";

const Contact = () => {
	const formatNumber = (number) => {
		const format = number.slice(1);
		return format.replace("-", "").replace(" ", "");
	};
	const t = useTranslations("Contact");

	return (
		<div id="contact">
			<HeadingPage text={t("title")} le="text-2xl" />
			<div className=" mx-auto my-8 p-5 lg:px-28">
				<div className="flex flex-col lg:flex-row justify-center items-center px-0 place-content-between">
					<div data-aos="fade-right" className="w-full lg:w-1/2">
						<FormContact t={t}/>
					</div>
					<div data-aos="fade-left" className="w-full lg:w-1/2 lg:pl-8">
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
