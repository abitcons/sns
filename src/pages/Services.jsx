import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '../components/services/ServiceCard';
import { services } from '../data/services';
import { customerSuccessData } from '../data/customer-success';
import { fadeIn, staggerContainer } from '../styles/animations';

import { ArrowLeft, ArrowRight } from 'lucide-react';
export default function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const itemsPerPage = 3;
    const totalPages = Math.ceil(customerSuccessData.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        }, 8000);
        return () => clearInterval(interval);
    }, [totalPages]);
    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };
    const handlePrev = () => {
        setCurrentPage((prevPage) => prevPage === 0 ? totalPages - 1 : prevPage - 1);
    };
    return (<>
      <Helmet>
        <title>Our Services - Smart National Solutions</title>
        <meta name="description" content="Discover our comprehensive range of digital transformation services, including SAP implementation, AI & analytics, cloud computing, and custom software development."/>
      </Helmet>

      {/* Hero Section - Kept the same as requested */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1 className="text-4xl font-bold mb-6 leading-tight" animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
              Transform Your Business with Expert Services
            </motion.h1>
            <motion.p className="text-lg leading-relaxed max-w-3xl mx-auto" animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              Leverage tailored solutions in SAP, AI, analytics, and custom development to accelerate your digital transformation journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

     {/* Enhanced Services Grid */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      ref={ref} 
      initial="hidden" 
      animate={inView ? 'visible' : 'hidden'} 
      variants={staggerContainer} 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service, index) => (
        <motion.div 
          key={index} 
          className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" 
          onMouseEnter={() => setHoveredCard(index)} 
          onMouseLeave={() => setHoveredCard(null)}
        >
          <ServiceCard 
            {...service} 
            index={index} 
            isHovered={hoveredCard === index}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Enhanced Empower Section */}
      <section className="py-20 bg-gradient-to-r from-[#5bb6bb] via-[#36a0d0] to-[#6ec6ab] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-6">
              Empower Your Organization with Innovation
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Discover how our tailored solutions and state-of-the-art technologies
              can help you streamline processes, enhance productivity, and achieve
              unparalleled success in the digital era.
            </motion.p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
            {
                title: "Streamlined Operations",
                description: "Transform the way you work with integrated solutions that optimize workflows and reduce inefficiencies.",
                icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
            },
            {
                title: "Enhanced Security",
                description: "Protect your data and operations with robust security measures tailored to your business needs.",
                icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
            },
            {
                title: "Scalable Growth",
                description: "Leverage scalable technologies that grow with your business and enable long-term success.",
                icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
            }
        ].map((item, index) => (<motion.div key={index} variants={fadeIn} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300" whileHover={{ scale: 1.05 }}>
                <div className="flex justify-center mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Success Stories Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold text-gray-900 mb-6">
              Success Stories
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Explore the milestones and updates that define our journey of success.
            </motion.p>
          </motion.div>

          {/* Enhanced Carousel Section */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <motion.div className="flex transition-all duration-700 ease-in-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                {Array.from({ length: totalPages }).map((_, pageIndex) => (<div key={pageIndex} className="flex flex-nowrap w-full" style={{ minWidth: '100%' }}>
                    {customerSuccessData
                .slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage)
                .map((story, index) => (<motion.div key={index} className="flex-shrink-0 w-full sm:w-1/3 px-4" whileHover={{ scale: 1.02 }}>
                          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                            <div className="w-full h-40 bg-white flex items-center justify-center p-6">
                              <img src={story.image} alt={story.clientName} className="h-24 w-auto object-contain"/>
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {story.title}
                              </h3>
                              <p className="text-gray-600">{story.introduction}</p>
                            </div>
                          </div>
                        </motion.div>))}
                  </div>))}
              </motion.div>
            </div>

            {/* Enhanced Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button onClick={handlePrev} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors" aria-label="Previous">
                <ArrowLeft className="w-6 h-6 text-[#36a0d0]"/>
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (<button key={index} onClick={() => setCurrentPage(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentPage ? 'bg-[#36a0d0]' : 'bg-gray-300 hover:bg-gray-400'}`}/>))}
              </div>
              <button onClick={handleNext} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors" aria-label="Next">
                <ArrowRight className="w-6 h-6 text-[#36a0d0]"/>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl mb-8">
              Let's discuss how our services can help you achieve your digital transformation goals.
            </motion.p>
            <motion.a variants={fadeIn} href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-[#36a0d0] hover:bg-opacity-90 transition-colors" whileHover={{ scale: 1.05 }}>
              Get Started
              <ArrowRight className="ml-2 w-5 h-5"/>
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* White Divider */}
<div className="h-8 bg-white w-full"></div>
    </>);
}
