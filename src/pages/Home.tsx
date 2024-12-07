import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Building, CheckCircle } from 'lucide-react';
import { fadeIn, staggerContainer } from '../styles/animations';
import HeroBanner from '../components/home/HeroBanner';
import StatisticsSection from '../components/home/StatisticsSection';
import ClientCarousel from '../components/home/ClientCarousel';
import CoreServices from '../components/home/CoreServices';
import SAPSpecialServices from "../components/home/SAPSpecialServices";
import AboutSNAM from "../components/home/AboutSNAM";
import CTAToServices from "../components/home/CTAToServices";
import NewsSection from "../components/home/NewsSection";

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Smart National Solutions - Digital Transformation & SAP Solutions</title>
        <meta
          name="description"
          content="Smart National Solutions (SNS) is a leader in digital transformation, enabling businesses to thrive with cutting-edge SAP solutions and tailored applications."
        />
      </Helmet>

      {/* Hero Banner */}
      <HeroBanner />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* About SNS Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div
              variants={slideInRight}
              className="flex flex-col"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Smart National Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Smart National Solutions (SNS) is a leader in digital transformation,
                enabling businesses to thrive with cutting-edge SAP solutions and
                tailored applications like SNAM.
              </p>

              {/* Icon Boxes */}
              <div className="flex flex-wrap justify-between gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white rounded-lg shadow-lg w-[30%] flex flex-col items-center text-center"
                >
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-md font-semibold mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600">
                    Delivering exceptional solutions
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white rounded-lg shadow-lg w-[30%] flex flex-col items-center text-center"
                >
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-md font-semibold mb-2">Partnership</h3>
                  <p className="text-sm text-gray-600">
                    Lasting client relationships
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white rounded-lg shadow-lg w-[30%] flex flex-col items-center text-center"
                >
                  <Building className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-md font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Driving transformation
                  </p>
                </motion.div>
              </div>

              {/* Learn More Link */}
              <Link
                to="/about"
                className="inline-flex items-center text-primary hover:text-primary/90"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            {/* Right Content: Image */}
            <motion.div
              variants={slideInRight}
              className="hidden lg:block"
            >
              <img
                src="/images/about-sns.jpg" // Replace with your actual image path
                alt="About SNS"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

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
      <h2 className="text-4xl font-extrabold text-[#36a0d0] mb-4">
        Why Choose SNS?
      </h2>
      <p className="text-lg text-gray-600">
        Experience the transformative power of tailored solutions, proven expertise, 
        and unparalleled support. Let us elevate your business to new heights.
      </p>
    </motion.div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Tailored Solutions",
          description: "Custom-fit solutions to meet your business needs.",
          icon: "💡",
        },
        {
          title: "Proven Expertise",
          description: "Decades of experience in digital transformation.",
          icon: "🏆",
        },
        {
          title: "Dedicated Support",
          description: "Round-the-clock assistance to ensure success.",
          icon: "🤝",
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: index * 0.5, // Delay each box in sequence
          }}
          className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 text-center"
        >
          <div className="w-16 h-16 mx-auto bg-gray-100 flex items-center justify-center rounded-full text-3xl mb-6">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Other sections */}
      <CoreServices />

      {/* SAP Services sections */}
      <SAPSpecialServices />
      {/* CTA to Services */}
      <CTAToServices />
      {/* About SNAM Section */}
      <AboutSNAM />

      {/* Client Carousel Section */}
      <ClientCarousel />
      {/* News Section */}
      <NewsSection />
    </>
  );
}