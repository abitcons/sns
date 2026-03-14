
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Users, Clock, Building2, // Using Building2 instead of Hospital
Globe } from 'lucide-react';
import VisionSection from '../components/Alphaiota/Vision-section';
import SolutionsSection from '../components/Alphaiota/Solutions-section';
// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};
const InteractiveButton = ({ children, href, primary, large }) => (<motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`
      inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg
      transition-all duration-300
      ${primary ? 'bg-white text-[#36a0d0]' : 'border-2 border-white text-white'}
      ${large ? 'text-xl px-10 py-5' : ''}
      hover:shadow-lg
    `}>
    {children}
    <ChevronRight className="ml-2 w-5 h-5"/>
  </motion.a>);
const Alphaiota = () => {
    const processSteps = [
        {
            title: "Understand Needs",
            description: "We conduct a comprehensive analysis of your unique challenges in healthcare delivery."
        },
        {
            title: "Innovative Design",
            description: "Our AI solutions are crafted to align with patient-centric goals and organizational needs."
        },
        {
            title: "Seamless Implementation",
            description: "Deploy AI solutions without disruption, ensuring patient safety and compliance."
        },
        {
            title: "Continuous Improvement",
            description: "Monitor, analyze, and optimize AI systems for maximum impact and scalability."
        }
    ];
    return (<div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h1 initial={fadeInUp.initial} animate={fadeInUp.animate} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transforming Healthcare with AI
          </motion.h1>
          <motion.p initial={fadeInUp.initial} animate={fadeInUp.animate} className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Empowering healthcare providers through AI-driven precision, automation, and innovation.
          </motion.p>
          <motion.div initial={fadeInUp.initial} animate={fadeInUp.animate} className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://alphaiota.com.sa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#36a0d0] rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all">
              Discover Alphaiota <ChevronRight className="ml-2 w-5 h-5"/>
            </a>
            <a href="/Contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <VisionSection />
      
      {/* Solutions Section */}
      <SolutionsSection />

      {/* Impact Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-white/10 text-white backdrop-blur-sm">
              Global Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Transforming Healthcare Globally
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
                icon: Users,
                value: "99%",
                label: "Diagnostic Accuracy",
            },
            {
                icon: Clock,
                value: "75%",
                label: "Efficiency Boost in Operations",
            },
            {
                icon: Building2,
                value: "500",
                label: "Healthcare Providers Impacted",
                suffix: "+",
            },
            {
                icon: Globe,
                value: "1M",
                label: "Lives Transformed",
                suffix: "+",
            },
        ].map((stat, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="relative group flex flex-col items-center">
                <div className="relative z-10 p-6 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 flex flex-col items-center justify-between h-full" style={{ minHeight: "250px" }}>
                  <div className="flex flex-col items-center text-white">
                    <div className="p-3 rounded-xl bg-white/10 mb-4">
                      <stat.icon className="w-6 h-6"/>
                    </div>

                    <h3 className="text-4xl font-bold mb-2 flex items-center">
                      <motion.span initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                ease: "easeOut",
            }}>
                        {stat.value}
                      </motion.span>
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </h3>

                    <p className="text-lg opacity-90 text-center">{stat.label}</p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl -rotate-3 bg-white/5 -z-10 transition-all duration-300 group-hover:rotate-0"></div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/30"/>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.animate} viewport={{ once: true }} className="text-center mb-20">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r from-[#36a0d0]/10 to-[#6ec6ab]/10 text-[#36a0d0]">
              Our Process
            </span>
            <h2 className="text-3xl font-bold">
              Seamless AI Integration
            </h2>
          </motion.div>

          <div className="relative">      
            <motion.div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] z-0" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }} className="h-0.5 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] transform origin-left"/>
              
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between">
                {[0, 1, 2, 3].map((index) => (<motion.div key={index} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + (index * 0.3) }} className="w-3 h-3 rounded-full bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab]"/>))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, index) => (<motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{
                delay: 0.7 + (index * 0.3),
                duration: 0.5,
                ease: "easeOut"
            }} className="relative group">
                  <div className="relative h-full bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#36a0d0]/5 to-[#6ec6ab]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    
                    <div className="relative z-10">
                      <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + (index * 0.3) }} viewport={{ once: true }} className="text-xl font-semibold mb-4 text-gray-900">
                        {step.title}
                      </motion.h3>
                      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + (index * 0.3) }} viewport={{ once: true }} className="text-gray-600 leading-relaxed">
                        {step.description}
                      </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"/>
                  </div>
                </motion.div>))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <motion.div initial={fadeInUp.initial} whileInView={fadeInUp.animate} viewport={{ once: true }} className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Join the AI-Driven Healthcare Revolution</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with Smart National Solutions and Alphaiota to redefine healthcare with cutting-edge AI solutions. Let's build a healthier future, together.
          </p>
          <InteractiveButton href="https://alphaiota.com.sa/" primary large>
            Get Started
          </InteractiveButton>
        </motion.div>
      </section>
    </div>);
};
export default Alphaiota;
