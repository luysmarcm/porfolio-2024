import Image from "next/image";
import Link from "next/link";
import React from "react";

const telefono = "04269629325";

const Footer = () => {
	const formatNumber = (number) => {
		const format = number.slice(1);
		return format.replace("-", "").replace(" ", "");
	};
	return (
		<footer>
			<div className="px-6 pb-8 pt-16 md:px-20">
				<div className="relative">
					<div style={{ width: "200px" }}>
						{/* <Image
							src="/image/drivok-11.png"
							alt="Logo"
							width={384}
							height={126}
							priority
						/> */}
					</div>
				</div>
				<div className="py-10 grid grid-cols-1 lg:grid-cols-4 lg:space-y-0 pb-8 md:pb-16 lg:gap-20 place-content-center ">
					<div className="text-black text-sm">
						<div className="flex flex-col justify-center lg:justify-start pb-10 lg:pb-0">
							<h3 className="font-extrabold mb-4 text-base">Pasajeros</h3>
							<ul className="space-y-4">
								<a
									target="_blank"
									href="https://play.google.com/store/apps/details?id=com.drivok.usuario"
									rel="noopener noreferrer"
								>
									<li className="flex flex-row md:px-0 space-x-5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 fill-primary "
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={0}
												d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
											/>
										</svg>
										<span className="hover:text-primary">
											Descargar Google Play
										</span>
									</li>
								</a>
							</ul>
							<br />
							<h3 className="font-extrabold mb-4 text-base">Conductores</h3>
							<ul className="space-y-4">
								<a
									target="_blank"
									href="https://play.google.com/store/apps/details?id=com.drivok.conductores"
									rel="noopener noreferrer"
								>
									<li className="flex flex-row md:px-0 space-x-5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 fill-primary "
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={0}
												d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
											/>
										</svg>
										<span className="hover:text-primary ">
											Descargar Google Play Conductores
										</span>
									</li>
								</a>
							</ul>
							<br />
						</div>
					</div>

					<div className="text-black text-sm">
						<div className="flex flex-col justify-center lg:justify-start pb-10 lg:pb-0">
							<h3 className="font-extrabold mb-4 text-base">Anuncio Legal</h3>
							<ul className="space-y-4">
								<li className="flex flex-row md:px-0 space-x-2 hover:text-primary">
									<Link href="/terms-condition" passHref>
										Terminos y condiciones
									</Link>
								</li>
								<li className="flex flex-row md:px-0 space-x-2  hover:text-primary">
									<Link href="/privacy" passHref>
										Politica de privacidad
									</Link>
								</li>
								<li className="flex flex-row md:px-0 space-x-2  hover:text-primary">
									<Link href="/providers" passHref>
										Política de Conductores
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="text-black text-sm">
						<h3 className="font-extrabold mb-4 text-base">Contactanos</h3>
						<div className="flex pb-10 lg:pb-0">
							<ul className="space-y-4">
								<li className="flex flex-row md:px-0 space-x-2">
									<p className="text-center inline-flex items-center relative">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 text-primary"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
											/>
										</svg>
									</p>
									<span>drivokcontrol@gmail.com</span>
								</li>
								{/* <li className="flex flex-row md:px-0 space-x-2">
									<a
										href={`https://wa.me/+58${formatNumber(telefono)}`}
										className="text-center inline-flex items-center relative"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 fill-primary "
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={0}
												d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
											/>
										</svg>
									</a>
									<span>04269629325</span>
								</li> */}
							</ul>
						</div>
					</div>

					<div className="text-black text-sm">
						<h3 className="font-extrabold mb-4 text-base">
							Siguenos en nuestras redes
						</h3>
						<div className="flex pb-10 lg:pb-0">
							<ul className="space-y-4">
								<li className="flex flex-row md:px-0 space-x-5">
									{/* <a className="text-center inline-flex items-center relative">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 fill-primary "
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={0}
												d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
											/>
										</svg>
									</a> */}
									<a
										href="https://www.instagram.com/drivok.ve/"
										target="_blank"
										rel="noreferrer"
										className="text-center inline-flex items-center relative"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 fill-primary "
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={0}
												d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
											/>
										</svg>
									</a>
									{/* <a className="text-center inline-flex items-center relative">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 fill-primary "
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={0}
												d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
											/>
										</svg>
									</a> */}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className=" hidden lg:flex justify-center px-16 py-6">
				<p className="text-xs text-center text-black">
					DRIVOK Grupo Rickshop Spa © Todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
