
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../styles/animations';

export default function ServiceHero() {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Digital Solutions for Modern Enterprises
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600"
          >
            Transform your business with our comprehensive suite of digital services,
            tailored to meet the evolving needs of modern enterprises.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}