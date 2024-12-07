import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Plane, Users, CheckCircle } from 'lucide-react';
import { fadeIn, staggerContainer } from '../styles/animations';
import SolutionCard from '../components/solutions/SolutionCard';
import { solutions } from '../data/solutions';

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Our Solutions - Smart National Solutions</title>
        <meta
          name="description"
          content="Discover SNAM solutions suite - Smart National App's Management for travel, residency permits, and employee verification."
        />
      </Helmet>

      {/* Hero Section */}
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
              Tailored Digital Solutions for Modern Businesses
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600"
            >
              Streamline your operations with our innovative SNAM suite of solutions,
              designed to meet the unique needs of businesses in Saudi Arabia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Seamless Integration with Your Systems
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our solutions are designed to work seamlessly with your existing
                infrastructure, including SAP and other enterprise systems.
              </p>
              <ul className="space-y-4">
                {[
                  'Easy implementation and onboarding',
                  'Real-time data synchronization',
                  'Secure and compliant',
                  'Customizable to your needs'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Integration Diagram"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our SNAM solutions can streamline your operations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}