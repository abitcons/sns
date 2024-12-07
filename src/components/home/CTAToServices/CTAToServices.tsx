import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../../styles/animations";
import { Link } from "react-router-dom";

export default function CTAToServices() {
  return (
    <section
      id="cta-services"
      className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Unlock the Full Potential of SAP with Our Services
          </h2>
          <p className="text-lg text-white/90 mb-8">
            From tailored SAP solutions to expert advisory, discover how our services can transform your business and drive innovation. Let us help you achieve operational excellence today!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
          className="flex justify-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>

      {/* Decorative Background */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle at top right, rgba(255, 255, 255, 0.2), transparent 50%)`,
          pointerEvents: "none",
        }}
      ></div>
    </section>
  );
}


