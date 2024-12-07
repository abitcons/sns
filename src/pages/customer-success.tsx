import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { customerSuccessData } from "../data/customer-success";

export default function CustomerSuccess() {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Customer Success Stories</h2>
          <p className="text-lg text-gray-600">
            Discover how Smart National Solutions transformed businesses with innovative SAP solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerSuccessData.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="flex justify-center items-center bg-gray-50 p-4">
                <motion.img
                  src={caseStudy.image}
                  alt={caseStudy.clientName}
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-center">
                  {caseStudy.clientName}
                </h3>
                <p className="text-gray-600 text-center mb-4 flex-grow">
                  {caseStudy.title}
                </p>
                <div className="text-center mt-auto">
                  <Link
                    to={`/customer-success/${caseStudy.id}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
