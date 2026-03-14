import React from "react";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SAPImplementation = () => {
    const phases = [
        {
            title: 'Discover',
            description: 'Define project goals and assess your business needs.',
            icon: '/Services Icons/discover.svg',
        },
        {
            title: 'Prepare',
            description: 'Establish a roadmap and allocate resources effectively.',
            icon: '/Services Icons/prepare.svg',
        },
        {
            title: 'Explore',
            description: 'Design tailored solutions aligning with business objectives.',
            icon: '/Services Icons/explore.svg',
        },
        {
            title: 'Realize',
            description: 'Implement and test configurations for seamless operation.',
            icon: '/Services Icons/realize.svg',
        },
        {
            title: 'Deploy',
            description: 'Launch your SAP system with post-go-live support.',
            icon: '/Services Icons/deploy.svg',
        },
    ];
    const features = [
        {
            icon: '/Services Icons/SAP-Implementation.gif',
            title: 'Tailored Implementation',
            description: 'Customizing SAP solutions to meet your unique business needs.',
        },
        {
            icon: '/Services Icons/Data-Integration.gif',
            title: 'Seamless Integration',
            description: 'Integrate SAP seamlessly with existing systems for efficiency.',
        },
        {
            icon: '/Services Icons/Training-Support.gif',
            title: 'Training & Support',
            description: 'Comprehensive training and 24/7 support for SAP users.',
        },
        {
            icon: '/Services Icons/Scalable-Infrastructure.gif',
            title: 'Scalable Solutions',
            description: 'Future-proof SAP infrastructure for scalable growth.',
        },
    ];
    return (<>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6">
            Drive Excellence with SAP Implementation
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-lg leading-relaxed">
            Transform your business with Smart National Solutions, Saudi Arabia's trusted SAP Gold Partner, offering unmatched expertise in digital transformation.
          </motion.p>
        </div>
      </section>

     {/* Why Choose SNS Section */}
    <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Why Choose Smart National Solutions?
      </h2>
      <p className="text-lg text-gray-700 mb-12 text-center">
        As a certified SAP Gold Partner, we deliver exceptional SAP implementation services tailored to Saudi Arabia and the Middle East.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (<motion.div key={index} className="relative group h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"/>
            <div className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col items-center justify-between h-full">
              <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-6">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12 object-contain"/>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-center">
                {feature.description}
              </p>
            </div>
          </motion.div>))}
      </div>
    </motion.div>
  </div>
    </section>


      {/* SAP Activate Methodology Section */}
      <section className="py-12 bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            SAP Activate: A Structured Approach to Success
          </h2>
          <p className="text-base text-white/90">
            Our SAP Activate methodology ensures efficient and scalable implementations, delivering value across these essential phases.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-4">
          {phases.map((phase, index) => (<React.Fragment key={index}>
              <motion.div className="w-48" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-64 flex flex-col items-center justify-between relative overflow-hidden cursor-pointer group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"/>
                  
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                    <img src={phase.icon} alt={phase.title} className="w-8 h-8 group-hover:scale-110 transition-transform duration-500"/>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 text-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center relative z-10">
                      {phase.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-700 transition-opacity z-20">
                    <div className="absolute inset-0 translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent"/>
                  </div>
                </div>
              </motion.div>

              {index < phases.length - 1 && (<ArrowRight className="w-6 h-6 text-white animate-pulse flex-shrink-0"/>)}
            </React.Fragment>))}
        </div>
      </div>
    </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-white">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur"/>
            
            <div className="bg-white rounded-2xl px-8 py-12 relative">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 transition-all duration-500 group-hover:transform group-hover:scale-105">
                Ready to Transform Your Business with SAP?
              </h2>
              <p className="text-lg text-gray-600 mb-8 transition-all duration-500 relative">
                Partner with Smart National Solutions to elevate your operations with SAP implementation.
              </p>
              
              <motion.a href="/contact" className="relative inline-block group/btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-sm transition-all duration-500 group-hover/btn:blur-md"/>
                <div className="relative px-8 py-4 bg-primary text-white font-medium rounded-xl transition-all duration-500 group-hover/btn:bg-opacity-90">
                  Contact Us Today
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shine"/>
                </div>
              </motion.a>

              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl transition-all duration-500 group-hover:border-primary/40"/>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl transition-all duration-500 group-hover:border-primary/40"/>
            </div>
          </div>
        </motion.div>
      </section>
    </>);
};
export default SAPImplementation;
