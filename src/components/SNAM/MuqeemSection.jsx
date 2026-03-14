import { motion } from 'framer-motion';
import { ArrowRight, Bell, Shield, Layout } from 'lucide-react';
import { useState } from 'react';
const MuqeemSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const features = [
        {
            icon: Bell,
            title: "Automated Reminders",
            description: "Never miss critical renewal dates with smart notifications and timeline management",
            highlight: "Efficient Management",
            animation: {
                icon: { y: [0, -5, 0] },
                duration: 2
            }
        },
        {
            icon: Shield,
            title: "Regulatory Compliance",
            description: "Ensure alignment with Saudi regulations through automated compliance checks",
            highlight: "100% Compliant",
            animation: {
                icon: { rotate: [0, 10, 0] },
                duration: 3
            }
        },
        {
            icon: Layout,
            title: "Unified Interface",
            description: "Seamlessly manage resident processes with our integrated dashboard",
            highlight: "Streamlined Process",
            animation: {
                icon: { scale: [1, 1.1, 1] },
                duration: 2.5
            }
        }
    ];
    return (<section className="relative py-20 overflow-hidden">
      {/* Gradient Background with Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab]">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#000000 25%,transparent 25%,transparent 75%,#000000 75%,#000000),linear-gradient(45deg,#000000 25%,transparent 25%,transparent 75%,#000000 75%,#000000)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]"/>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 relative">
        {/* Content Section */}
        <div className="text-white space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-2">
              SNAM Muqeem
            </h2>
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Streamline Resident Management
            </h3>
            <p className="text-lg text-white/80">
              Advanced resident management solution designed for modern businesses in Saudi Arabia
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return (<motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <motion.div className="p-2 rounded-lg bg-white/20 mt-1" animate={hoveredIndex === index ? feature.animation.icon : {}} transition={{ duration: feature.animation.duration, repeat: Infinity }}>
                      <Icon className="w-6 h-6"/>
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>);
        })}
          </div>

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="pt-4">
            <motion.a href="https://store.sap.com/dcp/en/product/display-2002001293_live_v1/snam-muqeem" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-white text-[#36a0d0] font-semibold text-xl rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Explore SNAM Muqeem
              <motion.div className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="h-5 w-5"/>
              </motion.div>
            </motion.a>
          </motion.div>
        </div>

        {/* Image Section with Professional Stats */}
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative">
          {/* Main Image Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white/10 p-1">
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }} className="relative rounded-lg overflow-hidden">
              <img src="/images/SNAM-Muqeem-QPP.png" alt="SNAM Muqeem Dashboard" className="w-full h-full object-cover"/>
              
              
            </motion.div>

            

            
          </div>
        </motion.div>
      </div>
    </section>);
};
export default MuqeemSection;
