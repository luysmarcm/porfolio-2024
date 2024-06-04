'use client'
import React, { useState, useEffect } from "react";

const Toast = ({ message }) => {
	const [showToast, setShowToast] = useState(true);

	// Ocultar el Toast después de 5 segundos
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowToast(false);
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div
			className={`bg-green-500 text-white p-4 rounded-md shadow-md w-full h-full${
				showToast ? "block" : "hidden"
			}`}
		>
			{message}
		</div>
	);
};

export default Toast;
