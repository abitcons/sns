import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, BarChart2, Shield, Users, Laptop, CloudCog } from 'lucide-react';
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
const solutions = [
    {
        icon: Brain,
        title: "AI Diagnostics",
        description: "Advanced machine learning algorithms for accurate medical diagnosis and prediction",
        features: ["Pattern Recognition", "Early Detection", "Risk Assessment"]
    },
    {
        icon: BarChart2,
        title: "Predictive Analytics",
        description: "Data-driven insights for improved patient outcomes and operational efficiency",
        features: ["Patient Monitoring", "Trend Analysis", "Performance Metrics"]
    },
    {
        icon: Shield,
        title: "Secure Health Data",
        description: "HIPAA-compliant data processing with advanced encryption protocols",
        features: ["Data Protection", "Access Control", "Audit Trails"]
    },
    {
        icon: Users,
        title: "Patient Engagement",
        description: "Interactive platforms for enhanced patient-provider communication",
        features: ["Remote Monitoring", "Care Coordination", "Patient Portal"]
    },
    {
        icon: Laptop,
        title: "Clinical Workflow",
        description: "Streamlined operations with intelligent automation solutions",
        features: ["Task Automation", "Resource Optimization", "Quality Control"]
    },
    {
        icon: CloudCog,
        title: "Cloud Integration",
        description: "Seamless cloud-based healthcare solutions for scalable operations",
        features: ["Data Synchronization", "Real-time Updates", "Backup Systems"]
    }
];
const SolutionsSection = () => {
    const [activeCard, setActiveCard] = useState(null);
    return (<section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #ffffff, #f0f9fb)' }}>
      

      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.animate} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(54, 160, 208, 0.1)', color: '#36a0d0' }}>
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{
            background: 'linear-gradient(135deg, #36a0d0, #5bb6bb, #6ec6ab)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }}>
            Core AI-Powered Solutions
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className={`relative group cursor-pointer rounded-2xl p-6 transition-all duration-300 ${activeCard === index ? 'scale-105' : 'hover:scale-[1.02]'}`} style={{
                backgroundColor: activeCard === index ? 'rgba(54, 160, 208, 0.05)' : 'white',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
            }} onClick={() => setActiveCard(activeCard === index ? null : index)}>
              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(54, 160, 208, 0.1)' }}>
                    <solution.icon className="w-6 h-6" style={{ color: '#36a0d0' }}/>
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#36a0d0' }}>
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">{solution.description}</p>

                <AnimatePresence>
                  {activeCard === index && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <ul className="space-y-2 mt-4 border-t pt-4" style={{ borderColor: 'rgba(54, 160, 208, 0.2)' }}>
                        {solution.features.map((feature, idx) => (<li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5bb6bb' }}></div>
                            {feature}
                          </li>))}
                      </ul>
                    </motion.div>)}
                </AnimatePresence>
              </div>

              {/* Background Gradient */}
              <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{
                background: 'linear-gradient(135deg, rgba(54, 160, 208, 0.05), rgba(110, 198, 171, 0.05))',
                zIndex: 0
            }}></div>
            </motion.div>))}
        </motion.div>
      </div>
    </section>);
};
export default SolutionsSection;
