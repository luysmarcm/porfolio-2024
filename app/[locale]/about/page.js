import AboutUs from '@/components/AboutUs/AboutUs';
import WhyChoose from '@/components/AboutUs/WhyChoose';
import HeadingPage from '@/components/HeadingPage/HeadingPage';
import { useTranslations } from 'next-intl';
import React from 'react'

const About = () => {
  const t = useTranslations("AboutUs");
  return (
		<section className=" lg:p-0 lg:py-12">
			<HeadingPage text={t("heading")} le="text-5xl" le1="text-3xl" />
			<AboutUs t={t} />
			<WhyChoose t={t} />
		</section>
	);
}

export default About;