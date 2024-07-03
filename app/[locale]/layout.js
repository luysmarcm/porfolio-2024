import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer.";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { AOSInit } from "@/aos"
import Script from "next/script";

const montse = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "Monarca | Life Improvement",
	description:
		"Your reliable partner to improve your property! We offer customized and effective solutions for projects of any size, guaranteeing results that exceed your expectations.",
	image: "/image/logoM.png",
};

export default async function LocaleLayout({ children, params }) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={params.locale}>
			<AOSInit />
			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GID}`}
			/>
			<Script
				id="google-analytics"
				dangerouslySetInnerHTML={{
					__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('consent', 'update', { 'analytics_storage': 'granted' });
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GID}', { page_path: window.location.pathname });
				`,
				}}
			/>
			<body>
				<NextIntlClientProvider messages={messages}>
					<Header />
					<div className="max-w-max m-auto overflow-hidden w-full">
						{children}
					</div>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
