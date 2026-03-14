import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../styles/animations';
import { careersData } from '../data/careers';

// Import icons from the Icons folder
import Benefits from '/Icons/Benefits.gif';
import Growth from '/Icons/Growth.gif';
import Global from '/Icons/Global.gif';
import Culture from '/Icons/Culture.gif';


const benefits = [
  {
    icon: Benefits,
    title: 'Comprehensive Benefits',
    description: 'Health insurance, wellness programs, and retirement plans.',
  },
  {
    icon: Growth,
    title: 'Professional Growth',
    description: 'Access to training, certifications, and mentoring programs.',
  },
  {
    icon: Global,
    title: 'Global Opportunities',
    description: 'Collaborate with teams worldwide and work on impactful projects.',
  },
  {
    icon: Culture,
    title: 'Innovative Culture',
    description: 'A dynamic work environment fostering creativity and innovation.',
  },
];

export default function CareersSection() {
  return (
    <>
      <Helmet>
        <title>Careers - Smart National Solutions</title>
        <meta
          name="description"
          content="Join Smart National Solutions and drive digital transformation in Saudi Arabia. Discover our exciting benefits, growth opportunities, and open positions."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold mb-6"
            >
              Build Your Future with Us
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl mb-12"
            >
              Join a team dedicated to innovation, growth, and making a difference in the digital era.
            </motion.p>
          </motion.div>
        </div>
      </section>

{/* Why Join Us Section */}
<section className="py-20 bg-white relative overflow-hidden">
  {/* Animated background patterns */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#36a0d0] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6ec6ab] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#36a0d0]/10 to-[#6ec6ab]/10 rounded-full"
      >
        <span className="text-[#36a0d0] font-medium">Join Our Team</span>
      </motion.div>

      <motion.h2
        variants={fadeIn}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Why Join Smart National Solutions?
      </motion.h2>
      
      <motion.p
        variants={fadeIn}
        className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
      >
        At Smart National Solutions, we empower our employees with resources, mentorship, and opportunities to thrive in their careers.
      </motion.p>
    </motion.div>

    {/* Benefits Section (Within Why Join Us) */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group relative bg-white p-6 rounded-xl shadow-md text-center transition-all duration-300 hover:shadow-xl border border-gray-100"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#36a0d0]/5 to-[#6ec6ab]/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
          
          <div className="relative">
            {/* Pure white icon container */}
            <div className="mb-6 w-24 h-24 mx-auto bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-full">
                <img
                  src={benefit.icon}
                  alt={`${benefit.title} Icon`}
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#36a0d0] transition-colors duration-300">
              {benefit.title}
            </h3>
            
            <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-700">
              {benefit.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Explore Career Opportunities
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            >
              {careersData.description}
            </motion.p>
            <motion.a
              href={careersData.portalLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              className="inline-flex items-center px-6 py-3 text-white bg-primary rounded-lg shadow-md hover:bg-primary/90 transition"
            >
              View All Job Openings
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
