import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, Database, Globe, FileText, Bell, BarChart2, Clock, Languages } from 'lucide-react';
export default function SNAMMuqeem() {
    return (<>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SNAM Muqeem - Advanced Resident Management System in Saudi Arabia</title>
        <meta name="description" content="Streamline resident management with SNAM Muqeem. Automate documentation, ensure compliance, and seamlessly integrate with SAP SuccessFactors for efficient resident administration in Saudi Arabia."/>
        <meta name="keywords" content="SNAM Muqeem, resident management Saudi Arabia, SAP integration, Iqama management, Saudi resident documentation, compliance automation"/>
        <link rel="canonical" href="https://www.nationalsol.com/solutions/muqeem"/>
        <meta property="og:title" content="SNAM Muqeem - Advanced Resident Management System in Saudi Arabia"/>
        <meta property="og:description" content="Transform resident management with automated documentation, real-time compliance monitoring, and seamless SAP integration."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.nationalsol.com/solutions/muqeem"/>
        <meta property="og:image" content="/images/snam-muqeem-hero.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}>
            <motion.h1 className="text-5xl font-bold mb-6">
              SNAM Muqeem: Revolutionizing Resident Management
            </motion.h1>
            <motion.p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Transform your organization with SNAM Muqeem—a cutting-edge solution that seamlessly integrates with SAP SuccessFactors to streamline resident documentation and ensure compliance with Saudi regulations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"/>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6ec6ab]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"/>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Next-Gen Resident Management
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Simplify Complex
                <span className="block text-primary">Documentation Processes</span>
              </h2>
              
              <p className="text-lg text-gray-600">
                SNAM Muqeem is an innovative SAP-certified solution that transforms how organizations handle resident documentation in Saudi Arabia. Our platform seamlessly integrates with your existing SAP infrastructure to provide a comprehensive management ecosystem.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
            { number: '100%', label: 'Compliance Rate' },
            { number: '65%', label: 'Time Saved' },
            { number: '24/7', label: 'System Availability' },
            { number: '99.9%', label: 'Data Accuracy' }
        ].map((stat, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/SNAM-Muqeem-Interface.png" alt="SNAM Muqeem Interface" className="w-full h-full object-cover"/>
              </div>
              
              <div className="absolute top-8 right-8 w-full h-full bg-gradient-to-r from-primary/20 to-[#6ec6ab]/20 rounded-2xl -z-10 transform rotate-3"/>
              <div className="absolute top-4 right-4 w-full h-full bg-gradient-to-r from-[#6ec6ab]/20 to-primary/20 rounded-2xl -z-20 transform -rotate-3"/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium mb-6">
              Key Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Features of
              <span className="bg-gradient-to-r from-primary to-[#6ec6ab] bg-clip-text text-transparent block">
                SNAM Muqeem
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
                Icon: Shield,
                title: "Compliance Automation",
                description: "Automated checks and validation processes ensure adherence to Saudi regulations",
                gradient: "from-[#36a0d0] to-[#5bb6bb]"
            },
            {
                Icon: Bell,
                title: "Smart Reminders",
                description: "Automated alerts for critical dates including visa and Iqama renewals",
                gradient: "from-[#5bb6bb] to-[#6ec6ab]"
            },
            {
                Icon: Database,
                title: "Data Consistency",
                description: "Real-time synchronization with official Saudi databases",
                gradient: "from-[#36a0d0] to-[#5bb6bb]"
            },
            {
                Icon: Languages,
                title: "Multilingual Support",
                description: "Full interface support in both Arabic and English",
                gradient: "from-[#5bb6bb] to-[#6ec6ab]"
            },
            {
                Icon: FileText,
                title: "Document Management",
                description: "Centralized system for all resident documentation",
                gradient: "from-[#36a0d0] to-[#5bb6bb]"
            },
            {
                Icon: BarChart2,
                title: "Advanced Analytics",
                description: "Comprehensive reporting tools for informed decision-making",
                gradient: "from-[#5bb6bb] to-[#6ec6ab]"
            }
        ].map((feature, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#6ec6ab] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"/>
                <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 flex items-center justify-center`}>
                    <feature.Icon className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-primary"/>
                  </div>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium mb-6">
              SAP Integration
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Seamless SAP SuccessFactors
              <span className="bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] bg-clip-text text-transparent block">
                Integration & Capabilities
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
            {
                Icon: Database,
                title: 'Real-Time Synchronization',
                description: 'Automatic data synchronization between SAP SuccessFactors and Saudi government systems',
                features: ['Instant updates', 'Data validation', 'Error prevention'],
                gradient: 'from-[#36a0d0] to-[#5bb6bb]'
            },
            {
                Icon: Shield,
                title: 'Compliance Management',
                description: 'Automated compliance checks and validation against Saudi regulations',
                features: ['Regulatory updates', 'Audit trails', 'Risk management'],
                gradient: 'from-[#5bb6bb] to-[#6ec6ab]'
            }
        ].map((integration, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="group relative">
                <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${integration.gradient} p-4 mb-6`}>
                    <integration.Icon className="w-8 h-8 text-white"/>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {integration.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {integration.description}
                  </p>

                  <div className="space-y-3">
                    {integration.features.map((feature, idx) => (<div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary"/>
                        <span className="text-gray-600">{feature}</span>
                      </div>))}
                  </div>

                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-primary"/>
                  </div>
                </div>
              </motion.div>))}
          </div>

          {/* Integration Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
            { value: "99.9%", label: "Integration uptime" },
            { value: "<0.1s", label: "Sync latency" },
            { value: "100%", label: "API coverage" },
            { value: "24/7", label: "Support available" },
        ].map((stat, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05 }} className="bg-primary/5 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors duration-300">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab]">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full opacity-10">
            {[...Array(20)].map((_, i) => (<motion.div key={i} className="absolute bg-white/10 rounded-full" style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }} animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
            }} transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
            }}/>))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white font-medium mb-6 backdrop-blur-sm">
              Why Choose SNAM Muqeem
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Benefits for Your Organization
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
                Icon: Clock,
                title: 'Time Efficiency',
                description: 'Reduce processing time for resident documentation by up to 65% through automation.',
                stats: '65%',
                statsText: 'Time saved',
            },
            {
                Icon: Shield,
                title: 'Enhanced Compliance',
                description: 'Maintain 100% compliance with Saudi regulations through automated validation.',
                stats: '100%',
                statsText: 'Compliance rate',
            },
            {
                Icon: Globe,
                title: 'Global Accessibility',
                description: 'Access the system from anywhere with our secure cloud-based platform.',
                stats: '24/7',
                statsText: 'Availability',
            },
        ].map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} whileHover={{ y: -5 }} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300"/>
                
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="absolute -top-6 right-8 bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] rounded-xl px-4 py-2 text-white">
                    <div className="text-2xl font-bold">{benefit.stats}</div>
                    <div className="text-sm opacity-80">{benefit.statsText}</div>
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <benefit.Icon className="w-8 h-8 text-white"/>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 text-lg">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-white"/>
                  </div>
                </div>
              </motion.div>))}
          </div>

          {/* Additional Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
            { label: "Active Users", value: "50K+" },
            { label: "Documents Processed", value: "1M+" },
            { label: "Success Rate", value: "99.9%" },
            { label: "Customer Satisfaction", value: "98%" },
        ].map((stat, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Resident Management Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join leading organizations in Saudi Arabia in simplifying resident documentation management with SNAM Muqeem's advanced features and SAP integration.
          </p>
          <motion.div className="flex justify-center gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <button className="px-8 py-3 bg-[#36a0d0] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300" onClick={() => window.location.href = 'https://store.sap.com/dcp/en/product/display-2002001293_live_v1/snam-muqeem'}>
              Visit SAP Store
            </button>
            <button className="px-8 py-3 bg-white text-[#36a0d0] rounded-lg font-semibold border border-[#36a0d0] hover:bg-[#36a0d0] hover:text-white transition-colors duration-300" onClick={() => window.location.href = 'mailto:support@nationalsol.com'}>
              Request Demo
            </button>
          </motion.div>
        </div>
      </section>
    </>);
}
