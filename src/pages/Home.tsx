import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import HeroBanner from '../components/home/HeroBanner';
import ClientCarousel from '../components/home/ClientCarousel';
import CoreServices from '../components/home/CoreServices';
import SAPSpecialServices from "../components/home/SAPSpecialServices";
import AboutSNAM from "../components/home/AboutSNAM";
import CTAToServices from "../components/home/CTAToServices";
import NewsSection from "../components/home/NewsSection";
import PartnersSection from '../components/home/Partners';
import AlphaiotaSection from '../components/home/Alphaiotahealthcaresec';
import ThinkAISection from '../components/home/ThinkAi section';
import SmartCitiesSection from '../components/home/smartcitiessection';
import Aboutus from '../components/home/Aboutus';

export default function Home() {
  const { t } = useTranslation('Home'); // Initialize translation for the Home namespace

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{t('seo.title')}</title> {/* Translated title */}
        <meta name="description" content={t('seo.description')} /> {/* Translated description */}
        <meta name="keywords" content={t('seo.keywords')} />
        <link rel="canonical" href="https://www.nationalsol.com/" />
        <meta property="og:title" content={t('seo.ogTitle')} />
        <meta property="og:description" content={t('seo.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nationalsol.com/" />
        <meta property="og:image" content="/images/og-homepage.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Banner */}
      <HeroBanner />

      {/* About SNS Section */}
      <Aboutus />

      {/* Why Choose SNS Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-[#36a0d0] mb-4">
              {t('why_choose_sns.section_title')} {/* Translated title */}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('why_choose_sns.description')} {/* Translated description */}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('why_choose_sns.features.0.title'),
                description: t('why_choose_sns.features.0.description'),
                src: "/Icons/Tailored-Solutions.gif",
              },
              {
                title: t('why_choose_sns.features.1.title'),
                description: t('why_choose_sns.features.1.description'),
                src: "/Icons/Proven-Expertise.gif",
              },
              {
                title: t('why_choose_sns.features.2.title'),
                description: t('why_choose_sns.features.2.description'),
                src: "/Icons/Dedicated-Support.gif",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <div className="relative flex items-center justify-center h-28 w-28 mx-auto mb-6 bg-white rounded-full shadow-lg p-6 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={feature.src}
                    alt={feature.title}
                    className="h-20 w-20 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#36a0d0] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#36a0d0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <CoreServices />

      {/* SAP Services */}
      <SAPSpecialServices />

      {/* CTA to Services */}
      <CTAToServices />
      {/* About SNAM Section */}
      <AboutSNAM />

      {/* Healthcare AI Section */}
      <AlphaiotaSection />

      {/* ThinkAI Section */}
      <ThinkAISection />

      {/* SmartCitiesSection */}
      <SmartCitiesSection />

      

      {/* Client Carousel */}
      <ClientCarousel />

      {/* Partners Carousel */}
      <PartnersSection />

      {/* News Section */}
      <NewsSection />
    </>
  );
}
