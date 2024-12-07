import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Heart, GraduationCap, Globe } from 'lucide-react';
import { fadeIn, staggerContainer } from '../styles/animations';
import { jobOpenings } from '../data/careers';

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and professional certifications'
  },
  {
    icon: Globe,
    title: 'Work Environment',
    description: 'Modern office space and flexible work arrangements'
  },
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Clear career progression paths and mentorship programs'
  }
];

export default function Careers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Careers - Smart National Solutions</title>
        <meta
          name="description"
          content="Join Smart National Solutions and be part of a team driving digital transformation in Saudi Arabia. Explore our current job openings and benefits."
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
              Join Our Team
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600"
            >
              Be part of a dynamic team driving digital transformation across Saudi Arabia
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Current Openings
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600"
            >
              Explore opportunities to grow with us
            </motion.p>
          </motion.div>

          <div className="grid gap-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-0">
                      {job.location} • {job.type}
                    </p>
                  </div>
                  <a
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}