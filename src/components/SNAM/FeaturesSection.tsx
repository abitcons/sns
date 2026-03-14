import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-xl cursor-pointer relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      style={{
        transform: isPressed ? 'scale(0.98)' : 'scale(1)',
        transition: 'transform 0.2s'
      }}
    >
      {/* Themed gradient background on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] opacity-0 group-hover:opacity-10"
        initial={false}
        animate={{ 
          opacity: isHovered ? 0.15 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative flex flex-col items-center text-gray-800">
        {/* Icon container with themed shadow */}
        <motion.div 
          className="bg-white rounded-full p-4 shadow-lg mb-6"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 360 : 0,
            boxShadow: isHovered 
              ? '0 8px 20px rgba(54, 160, 208, 0.3)' 
              : '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          transition={{ 
            duration: 0.6,
            rotate: { duration: 0.8 },
            scale: { type: "spring", stiffness: 300 }
          }}
        >
          <img
            src={`/Icons/${icon}.gif`}
            alt={`${title} Icon`}
            className="h-12 w-12"
          />
        </motion.div>

        {/* Title with themed color transition */}
        <motion.h3 
          className="text-xl font-bold mb-3 text-center"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            color: isHovered ? "#36a0d0" : "#1f2937"
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Description with fade-in effect */}
        <motion.p 
          className="text-gray-600 text-center"
          animate={{ 
            opacity: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 5
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Seamless Integration",
      description: "Unified solutions for HR, resident management, and travel workflows.",
      icon: "integration-icon",
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure adherence to Saudi regulations and global standards.",
      icon: "compliance-icon",
    },
    {
      title: "Real-Time Data Insights",
      description: "Make informed decisions with advanced analytics and reporting tools.",
      icon: "analytics-icon",
    },
    {
      title: "Future-Ready Solutions",
      description: "Built to align with Saudi Vision 2030, delivering innovation tailored for the region.",
      icon: "innovation-icon",
    },
    {
      title: "Comprehensive Support",
      description: "From seamless setup to ongoing assistance, our team ensures you get the most out of SNAM Solutions.",
      icon: "support-icon",
    },
    {
      title: "Scalability and Flexibility",
      description: "Easily adapt to your organization's growth with flexible solutions designed for scalability.",
      icon: "scalability-icon",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] relative overflow-hidden">
      {/* Themed floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{ 
              y: [null, "-100%"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            whileInView={{ 
              opacity: [0, 1],
              y: [-20, 0]
            }}
            transition={{ duration: 0.8 }}
          >
            Why Choose SNAM Solutions
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            whileInView={{ 
              opacity: [0, 1],
              y: [20, 0]
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Integrated with SAP® SuccessFactors® for seamless enterprise solutions
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.icon}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;