import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../styles/animations";

const sapServices = [
  {
    title: "SAP Implementation",
    description: "Tailored implementation of SAP systems to meet business needs and ensure operational success.",
    icon: "/SAP Services Icons/implementation-icon.gif",
  },
  {
    title: "SAP Training",
    description: "Empowering your team with expert SAP training to enhance productivity and operational efficiency.",
    icon: "/SAP Services Icons/training-icon.gif",
  },
  {
    title: "Project Management",
    description: "Streamlined management for SAP projects to deliver on time and within budget.",
    icon: "/SAP Services Icons/project-management-icon.gif",
  },
  {
    title: "Data Services",
    description: "Comprehensive data migration and management services to maximize SAP potential.",
    icon: "/SAP Services Icons/data-services-icon.gif",
  },
  {
    title: "SAP Support",
    description: "Ongoing support to ensure smooth operation and minimal downtime of SAP systems.",
    icon: "/SAP Services Icons/support-icon.gif",
  },
  {
    title: "Add-On Development",
    description: "Custom add-ons tailored to your business processes to extend the functionality of SAP systems.",
    icon: "/SAP Services Icons/addon-development-icon.gif",
  },
];

export default function SAPSpecialServices() {
  return (
    <section className="py-20 bg-white">
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
            className="text-4xl font-bold"
            style={{ color: "#36a0d0" }}
          >
            SAP Special Services
          </motion.h2>
          <div className="h-4"></div> {/* Added space between headline and subheadline */}
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600"
          >
            As certified SAP partners, we offer a range of services tailored to meet the diverse needs of businesses, ensuring seamless operations and exceptional performance.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {sapServices.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gray-100 p-8 rounded-lg shadow-lg text-center transition-transform duration-300"
            >
              {/* Icon Section */}
              <div className="flex items-center justify-center h-28 w-28 mx-auto mb-6 bg-white rounded-full shadow-lg p-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-20 w-20 object-contain"
                  style={{
                    animation: "spin 5s linear infinite", // Ensures the GIF animation remains smooth
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}