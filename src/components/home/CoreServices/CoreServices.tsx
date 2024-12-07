import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../styles/animations";

const services = [
  {
    title: "SAP Solutions",
    description: "Empowering your business with tailored SAP systems to drive growth and efficiency.",
    icon: "/Services Icons/Briefcase.gif",
  },
  {
    title: "Custom Development",
    description: "Building innovative custom applications to meet your unique business needs.",
    icon: "/Services Icons/Code.gif",
  },
  {
    title: "Data Management",
    description: "Transforming data into actionable insights with advanced analytics and storage solutions.",
    icon: "/Services Icons/Database.gif",
  },
  {
    title: "IT Consulting",
    description: "Expert advisory services to streamline operations and maximize your IT investments.",
    icon: "/Services Icons/Monitor.gif",
  },
];

export default function CoreServices() {
  return (
    <section
      id="core-services"
      className="py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-white mb-4"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-lg text-white/90"
          >
            Discover how our innovative solutions can empower your business through technology-driven success.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 flex flex-col items-center text-center"
            >
              {/* Icon Section */}
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 shadow-lg p-4 mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-16 w-16 object-contain"
                />
              </div>
              {/* Text Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
