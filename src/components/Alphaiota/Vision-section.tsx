import { motion } from 'framer-motion';
import { ArrowUpRight, Brain, Shield, Activity } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const VisionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #ffffff, #f0f9fb)' }}>
      

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content Section */}
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="flex-1 lg:max-w-2xl"
          >
            {/* Eyebrow text */}
            <div className="flex items-center gap-2 mb-6">
              <span className="px-4 py-1 rounded-full text-sm font-semibold tracking-wide"
                    style={{ backgroundColor: 'rgba(54, 160, 208, 0.1)', color: '#36a0d0' }}>
                Innovation in Healthcare
              </span>
              <ArrowUpRight className="w-4 h-4" style={{ color: '#36a0d0' }} />
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" 
                style={{ 
                  background: 'linear-gradient(135deg, #36a0d0, #5bb6bb, #6ec6ab)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
              Healthcare AI with Alphaiota
            </h2>

            {/* Main Description */}
            <p className="text-lg leading-relaxed mb-8"
               style={{ color: '#2c5282' }}>
              AI is revolutionizing healthcare through advanced predictive analytics and personalized medicine. Our innovative solutions empower healthcare providers to enhance patient outcomes while optimizing operational efficiency.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {[
                {
                  icon: Brain,
                  title: "Intelligent Diagnostics",
                  desc: "Advanced AI algorithms for accurate medical diagnosis"
                },
                {
                  icon: Shield,
                  title: "Secure Analytics",
                  desc: "HIPAA-compliant data processing and analysis"
                },
                {
                  icon: Activity,
                  title: "Real-time Monitoring",
                  desc: "Continuous patient health tracking and alerts"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: 'rgba(54, 160, 208, 0.03)' }}
                >
                  <feature.icon className="w-6 h-6 mt-1" style={{ color: '#5bb6bb' }} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#36a0d0' }}>{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Logo Section */}
          <motion.div
            initial={fadeInRight.initial}
            whileInView={fadeInRight.animate}
            viewport={{ once: true }}
            className="lg:w-1/3 relative"
          >
            <div className="relative w-72 h-72 mx-auto">
              {/* Logo */}
              <div className="relative z-10 w-full h-full transition-transform duration-300 hover:scale-105">
                <img
                  src="/Partners Logo/alphaiota.svg"
                  alt="Alphaiota Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Background Effects */}
              <div className="absolute -z-10 inset-0 transition-transform duration-300">
                <div className="absolute inset-0 rounded-3xl opacity-20"
                     style={{ background: 'linear-gradient(135deg, #36a0d0, #5bb6bb)' }}></div>
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-20 -right-4 -bottom-4 w-full h-full rounded-3xl opacity-10"
                   style={{ backgroundColor: '#6ec6ab' }}></div>
              <div className="absolute -z-20 -left-4 -top-4 w-full h-full rounded-3xl opacity-10"
                   style={{ backgroundColor: '#36a0d0' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;