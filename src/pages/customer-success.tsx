import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { customerSuccessData } from "../data/customer-success";

export default function CustomerSuccess() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              className="text-4xl font-bold mb-4 leading-tight"
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Customer Success Stories
            </motion.h1>
            <motion.p
              className="text-lg leading-relaxed max-w-3xl mx-auto"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Discover how Smart National Solutions transformed businesses with innovative SAP solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-6"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Real Stories of Transformation
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Dive into success stories showcasing how our solutions have empowered businesses to innovate and excel in their industries.
            </motion.p>
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
                {/* Image Section */}
                <div className="flex justify-center items-center bg-gray-50 p-4">
                  <motion.img
                    src={caseStudy.image}
                    alt={caseStudy.clientName}
                    className="w-32 h-32 object-contain"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>

                {/* Text Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-center text-gray-800">
                    {caseStudy.clientName}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 flex-grow">
                    {caseStudy.title}
                  </p>
                  <div className="text-center mt-auto">
                    <Link
                      to={`/customer-success/${caseStudy.id}`}
                      className="inline-block text-primary font-semibold hover:underline"
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
    </>
  );
}
