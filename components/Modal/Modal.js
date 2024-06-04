import React from "react";
import FormContact from "../Form/FormContact";
import HeadingPage from "../HeadingPage/HeadingPage";

const Modal = ({ isOpen, onClose, isValid, t, t1 }) => {
	if (!isOpen) return null;

	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
				{isValid === true ? (
					<div className="bg-white p-4 rounded-lg shadow-lg w-96 overflow-y-auto">
						<div className="bg-primary h-44 lg:h-36">
							<h2 className="text-white text-xl lg:text-xl font-bold py-12 px-10">
								{t("title")}
							</h2>
						</div>
						<FormContact t={t} />
						<button
							onClick={onClose}
							className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary"
						>
							Cerrar
						</button>
					</div>
				) : (
					<div className="bg-white p-4 rounded-lg text-center">
						<p className="text-2xl p-10">{t1("alert")}</p>
						<button
							onClick={onClose}
							className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary"
						>
							Cerrar
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Modal;
