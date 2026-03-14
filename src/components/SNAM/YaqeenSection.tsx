import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Shield, Clock, Bot } from 'lucide-react';

const YaqeenSection = () => {
  // Explicitly type the state to accept number or null
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Processing",
      description: "Smart document scanning and data extraction with 99.9% accuracy"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Blockchain Security",
      description: "Immutable record-keeping with distributed ledger technology"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast HR trends and make data-driven decisions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        {/* Enhanced Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0]/20 to-[#6ec6ab]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          <img
            src="/images/SNAM-Yaqeen-QPP.png"
            alt="SNAM Yaqeen"
            className="rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Innovation Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3"
          >
            <Lightbulb className="w-6 h-6 text-[#36a0d0]" />
          </motion.div>
        </motion.div>

        {/* Enhanced Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
         <h2 className="text-4xl font-bold text-gray-800 mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#6ec6ab]">
              SNAM Yaqeen
              </span>
            </h2>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold text-gray-600">
                Optimize HR Operations 
              </h3>
              
            </div>

          {/* Interactive Feature Cards */}
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer ${
                  activeFeature === index ? 'ring-2 ring-[#36a0d0]' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-[#36a0d0]">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-gradient-to-r from-[#36a0d0]/10 to-[#36a0d0]/5"
              >
                <div className="text-sm text-gray-600">Time Saved</div>
                <div className="text-3xl font-bold text-[#36a0d0]">40%</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-gradient-to-r from-[#6ec6ab]/10 to-[#6ec6ab]/5"
              >
                <div className="text-sm text-gray-600">Compliance Improvement</div>
                <div className="text-3xl font-bold text-[#6ec6ab]">95%</div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <motion.a
            href="https://store.sap.com/dcp/en/product/display-2002001834_live_v1/snam-yaqeen"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold text-xl rounded-lg hover:bg-primary/90 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About SNAM Yaqeen
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default YaqeenSection;
