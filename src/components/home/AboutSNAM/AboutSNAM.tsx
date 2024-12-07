import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../styles/animations";

export default function AboutSNAM() {
  return (
    <section id="about-snam">
      {/* Section 1: Introducing SNAM */}
      <div className="relative py-20 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-gray-800"
            >
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Introducing SNAM
              </h2>
              <p className="text-lg mb-6">
                SNAM (Smart National App's Management) is an innovative suite
                of applications crafted to empower organizations and government
                entities. Our goal is to streamline operations, ensure compliance,
                and foster digital transformation.
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>
                  <strong>SNAM Travel</strong>: Simplifying business travel
                  processes with SAP integration.
                </li>
                <li>
                  <strong>SNAM Muqeem</strong>: Efficiently managing resident
                  and visa compliance.
                </li>
                <li>
                  <strong>SNAM Yaqeen</strong>: Enhancing secure identity
                  verification.
                </li>
                <li>
                  <strong>More to Come</strong>: Continuous innovation driving
                  future developments.
                </li>
              </ul>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <img
                src="/images/aboutsnam.png"
                alt="About SNAM"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2: Delivering Excellence with SNAM */}
<div className="py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="mb-12"
    >
      <h3 className="text-3xl font-semibold mb-6">
        Delivering Excellence with SNAM
      </h3>
      <p className="text-lg mb-8">
        SNAM is a testament to our commitment as a SAP Gold Partner in
        enabling digital transformation across diverse industries. With
        tailored solutions and a focus on innovation, we empower businesses
        to achieve operational excellence.
      </p>
      {/* Call-to-Action Button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <a
          href="/solutions"
          className="inline-block px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-md hover:bg-primary hover:text-white transition-all duration-300"
        >
          Explore Our Solutions
        </a>
      </motion.div>
    </motion.div>
  </div>
</div>


  {/* Section 3: Why Choose SNAM with SNS */}
<div className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h3 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Why Choose SNAM with SNS?
      </h3>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Discover how SNAM empowers businesses and government entities with innovative solutions, driving operational excellence and digital transformation.
      </p>
    </motion.div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Streamlined Travel Processes",
          description: "Simplify business travel with seamless SAP integration.",
          icon: "✈️", // Emoji or replace with a custom icon
        },
        {
          title: "Compliance Simplified",
          description: "Ensure regulatory adherence with automated compliance tools.",
          icon: "✅",
        },
        {
          title: "Secure Identity Management",
          description: "Enhance data security and streamline identity processes.",
          icon: "🔒",
        },
        {
          title: "Continuous Innovation",
          description: "Stay ahead with our evolving suite of innovative solutions.",
          icon: "🚀",
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 text-center"
        >
          {/* Icon */}
          <motion.div
            className="flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-800 rounded-full mx-auto mb-6 text-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {feature.icon}
          </motion.div>
          {/* Feature Title */}
          <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
          {/* Feature Description */}
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Decorative Overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    aria-hidden="true"
    style={{
      background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 80%)",
    }}
  ></div>
</div>

    </section>
  );
}
