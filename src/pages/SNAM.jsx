import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Brain, CircuitBoard, Cpu, Network, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TravelSection from '../components/SNAM/TravelSection';
import MuqeemSection from '../components/SNAM/MuqeemSection';
import YaqeenSection from '../components/SNAM/YaqeenSection';
import FeaturesSection from '../components/SNAM/FeaturesSection';
import SAPPartnerSection from '../components/SNAM/SAPPartnerSection';
const SNAM = () => {
    const [activeFeature, setActiveFeature] = useState('ai');
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };
    const fadeIn = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };
    const features = {
        ai: {
            title: 'SNAM AI',
            description: 'Transform workflows with intelligent automation',
            stats: { efficiency: '40%', savings: '25%' },
        },
        travel: {
            title: 'SNAM Travel',
            description: 'Streamline business travel management',
            stats: { efficiency: '35%', savings: '20%' },
        },
        muqeem: {
            title: 'SNAM Muqeem',
            description: 'Simplify resident management compliance',
            stats: { efficiency: '45%', savings: '30%' },
        },
        yaqeen: {
            title: 'SNAM Yaqeen',
            description: 'Enhance HR operations integration',
            stats: { efficiency: '38%', savings: '22%' },
        },
    };
    return (<>
      <Helmet>
        <title>SNAM Solutions - Revolutionize Your Business Operations</title>
        <meta name="description" content="Explore SNAM solutions—SNAM AI, SNAM Travel, SNAM Muqeem, and SNAM Yaqeen—integrated with SAP® SuccessFactors® to transform operations, ensure compliance, and boost productivity."/>
        <meta name="keywords" content="SNAM solutions, SAP SuccessFactors integration, HR management, business travel, AI, compliance"/>
        <link rel="canonical" href="https://www.nationalsol.com/solutions/hr/snam/"/>
        <meta property="og:title" content="SNAM Solutions - Revolutionize Your Business Operations"/>
        <meta property="og:description" content="Explore SNAM solutions—SNAM AI, SNAM Travel, SNAM Muqeem, and SNAM Yaqeen—integrated with SAP® SuccessFactors® to transform operations, ensure compliance, and boost productivity."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.nationalsol.com/solutions/hr/snam/"/>
        <meta property="og:image" content="/images/snam-solutions-banner.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Helmet>

      {/* Hero Section */}
    <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
      <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
        Empowering Smart Business Solutions with SAP® Integration
      </motion.h1>
      <motion.p variants={fadeIn} className="text-lg leading-relaxed max-w-3xl mx-auto">
        Revolutionize your business operations with Smart National Solutions' qualified packaged solutions. From streamlining business travel to enhancing HR processes, our seamless SAP®-integrated solutions ensure efficiency, compliance, and innovation across your organization.
      </motion.p>
     
    </motion.div>
  </div>
    </section>


      {/* Section 1 */}
      <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
          {/* Image Section */}
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0]/20 to-[#6ec6ab]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"/>
            <img src="/images/SNAM-Solutions.png" alt="SNAM Solutions Overview" className="rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"/>
            <motion.div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <div className="text-primary font-bold text-2xl">95%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab]">
                Transform
              </span> Your Operations
            </h2>
            <h3 className="text-2xl font-semibold text-[#36a0d0] mb-6">
              AI-Driven, Integrated Solutions
            </h3>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(features).map((key) => (<motion.div key={key} whileHover={{ scale: 1.05 }} className={`p-4 rounded-lg cursor-pointer transition-colors ${activeFeature === key
                ? 'bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] text-white'
                : 'bg-white shadow-lg hover:shadow-xl'}`} onClick={() => setActiveFeature(key)}>
                  <h4 className="font-semibold mb-2">{features[key].title}</h4>
                  <p className="text-sm">{features[key].description}</p>
                </motion.div>))}
            </div>

            {/* Stats for Active Feature */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Efficiency Boost</div>
                  <div className="text-3xl font-bold text-[#36a0d0]">
                    {features[activeFeature].stats.efficiency}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                  <div className="text-3xl font-bold text-[#6ec6ab]">
                    {features[activeFeature].stats.savings}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/contact" className="inline-flex items-center bg-[#36a0d0] text-white font-semibold text-xl px-6 py-3 rounded-lg hover:bg-[#36a0d0]/90 transition-all duration-300 group">
              Contact Us to Transform Your Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2 with AI elements */}
      <section className="py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white overflow-hidden relative">
        {/* Main floating Brain icon */}
        <motion.div initial={{ x: -100, y: 100, opacity: 0 }} animate={{
            x: [null, 800],
            y: [null, -200],
            opacity: [0, 1, 1, 0]
        }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        }} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <Brain size={48} className="text-white/80"/>
        </motion.div>

        {/* Floating circuit board background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div animate={{
            backgroundPositionX: ["0%", "100%"],
            backgroundPositionY: ["0%", "100%"]
        }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        }} className="absolute inset-0 border-2 border-white/20" style={{
            background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 45%, transparent 50%, transparent 90%, rgba(255,255,255,0.2) 95%, transparent 100%)',
            backgroundSize: '200% 200%'
        }}/>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
          {/* Content Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="space-y-8">
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-6">
                SNAM AI
              </h2>
              
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold text-white-600">
              Redefining Efficiency 
              </h3>
              
      
            </div>
              {/* Floating CPU icon */}
              <motion.div className="absolute -right-12 top-0" animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 360]
        }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }}>
                <Cpu size={24} className="text-white/40"/>
              </motion.div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative">
              <p className="text-lg mb-6">
                The First SAP-Generated AI Solution in KSA
              </p>
              <ul className="space-y-4">
                {[
            "Smarter Workflows: Automate tasks and boost focus",
            "Enhanced Productivity: Save time with AI insights",
            "Cost Savings: Maximize ROI and efficiency",
            "Future-Ready: Foster innovation and adaptability"
        ].map((item, index) => (<motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-4 h-4"/>
                    </div>
                    <span>{item}</span>
                  </motion.li>))}
              </ul>

              {/* Network icon */}
              <motion.div className="absolute -left-8 bottom-4" animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
        }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }}>
                <Network size={16} className="text-white/30"/>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative">
            <img src="/images/SNAM-AI-Dashboard.png" alt="SNAM AI" className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"/>
            <motion.div className="absolute -top-6 -left-6 bg-white rounded-lg p-4 shadow-xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <div className="text-[#36a0d0] font-bold text-2xl">2.5x</div>
              <div className="text-gray-600 text-sm">ROI Increase</div>
            </motion.div>

            {/* Circuit Board icon */}
            <motion.div className="absolute -right-4 bottom-12" animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
        }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
        }}>
              <CircuitBoard size={32} className="text-white/60"/>
            </motion.div>

            {/* AI wave effect */}
            <motion.div className="absolute -right-8 top-1/2" animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1]
        }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }}>
              <Waves size={24} className="text-white/40"/>
            </motion.div>

            {/* Chip icon */}
            <motion.div className="absolute -left-8 bottom-1/4" animate={{
            y: [0, -10, 0],
            rotate: [0, 45, 0]
        }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
        }}>
           
            </motion.div>

            {/* Connected nodes effect */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div className="absolute w-full h-full" animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
        }} transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
        }} style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px) 0 0/20px 20px'
        }}/>
            </div>
          </motion.div>
        </div>
      </section>

      
 {/* TravelSection */}
      <TravelSection />

      {/* MuqeemSection */}
      <MuqeemSection />
      {/* YaqeenSection */}
      <YaqeenSection />
      
    {/* FeaturesSection */}
    <FeaturesSection />
    {/* SAPPartnerSection */}
    <SAPPartnerSection />
  
    </>);
};
export default SNAM;
