import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Database,
  FileText,
  Bell,
  BarChart2,
  Languages,
  UserCheck,
  Link} from 'lucide-react';

export default function SNAMYaqeen() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SNAM Yaqeen - Advanced Employee Verification Solution</title>
        <meta
          name="description"
          content="Transform your HR operations with SNAM Yaqeen. Automate employee verification, ensure compliance, and integrate seamlessly with SNAM Muqeem for comprehensive workforce management."
        />
        <meta
          name="keywords"
          content="SNAM Yaqeen, employee verification, HR compliance, data validation, SAP integration, secure employee management, Muqeem integration"
        />
        <link rel="canonical" href="https://www.nationalsol.com/solutions/yaqeen" />
        <meta property="og:title" content="SNAM Yaqeen - Advanced Employee Verification Solution" />
        <meta
          property="og:description"
          content="Transform HR operations with automated verification, real-time compliance monitoring, and seamless SAP integration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nationalsol.com/solutions/yaqeen" />
        <meta property="og:image" content="/images/snam-yaqeen-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <motion.h1 className="text-5xl font-bold mb-6">
              SNAM Yaqeen: Revolutionizing Employee Verification
            </motion.h1>
            <motion.p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Transform your HR operations with real-time employee verification, automated data management, and seamless integration with SAP SuccessFactors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6ec6ab]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Next-Gen Employee Verification
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Automate Complex
                <span className="block text-primary">Verification Processes</span>
              </h2>
              
              <p className="text-lg text-gray-600">
                SNAM Yaqeen is an innovative SAP-certified solution that transforms how organizations handle employee verification in Saudi Arabia. Our platform seamlessly integrates with your existing SAP infrastructure to provide a comprehensive verification ecosystem.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { number: '100%', label: 'Data Accuracy' },
                  { number: '75%', label: 'Time Saved' },
                  { number: '24/7', label: 'System Availability' },
                  { number: '99.9%', label: 'Verification Success Rate' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/SNAM-Yaqeen-Interface.png"
                  alt="SNAM Yaqeen Interface"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute top-8 right-8 w-full h-full bg-gradient-to-r from-primary/20 to-[#6ec6ab]/20 rounded-2xl -z-10 transform rotate-3" />
              <div className="absolute top-4 right-4 w-full h-full bg-gradient-to-r from-[#6ec6ab]/20 to-primary/20 rounded-2xl -z-20 transform -rotate-3" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium mb-6">
              Key Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Features of
              <span className="bg-gradient-to-r from-primary to-[#6ec6ab] bg-clip-text text-transparent block">
                SNAM Yaqeen
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: UserCheck,
                title: "Real-time Verification",
                description: "Instant employee data verification against official databases",
                gradient: "from-[#36a0d0] to-[#5bb6bb]"
              },
              {
                Icon: Bell,
                title: "Smart Alerts",
                description: "Automated notifications for verification status and updates",
                gradient: "from-[#5bb6bb] to-[#6ec6ab]"
              },
              {
                Icon: Database,
                title: "Data Integration",
                description: "Seamless connection with SAP SuccessFactors and government systems",
                gradient: "from-[#36a0d0] to-[#5bb6bb]"
              },
              {
                Icon: Languages,
                title: "Bilingual Support",
                description: "Full interface support in both Arabic and English",
                gradient: "from-[#5bb6bb] to-[#6ec6ab]"
              },
              {
                Icon: FileText,
                title: "Document Management",
                description: "Centralized system for all employee verification documents",
                gradient: "from-[#36a0d0] to-[#5bb6bb]"
              },
              {
                Icon: BarChart2,
                title: "Advanced Analytics",
                description: "Comprehensive reporting and verification analytics",
                gradient: "from-[#5bb6bb] to-[#6ec6ab]"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#6ec6ab] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 flex items-center justify-center`}>
                    <feature.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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
                description: 'Automatic data synchronization between SAP SuccessFactors and government verification systems',
                features: ['Instant updates', 'Data validation', 'Error prevention'],
                gradient: 'from-[#36a0d0] to-[#5bb6bb]'
              },
              {
                Icon: Shield,
                title: 'Compliance Management',
                description: 'Automated verification checks and validation against Saudi regulations',
                features: ['Regulatory updates', 'Audit trails', 'Risk management'],
                gradient: 'from-[#5bb6bb] to-[#6ec6ab]'
              }
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${integration.gradient} p-4 mb-6`}>
                    <integration.Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {integration.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {integration.description}
                  </p>

                  <div className="space-y-3">
                    {integration.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
      </section>


      {/* Integration with Muqeem Section */}
<section className="py-32 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header content remains the same */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary font-medium mb-6">
        Unified Solution
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        SNAM Yaqeen & Muqeem
        <span className="bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] bg-clip-text text-transparent block">
          Working Together
        </span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left side - enhanced with integration info and QPPS link */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-6">
          {[
            {
              title: "Seamless Data Flow",
              description: "Automatic synchronization between employee verification and Resident management systems",
              icon: Link
            },
            {
              title: "Unified Compliance",
              description: "Integrated compliance monitoring for both local and Resident employees",
              icon: Shield
            },
            {
              title: "Streamlined Processes",
              description: "Support for issuing Iqama through direct integration between Yaqeen and Muqeem",
              icon: FileText
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Information with QPPS Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#36a0d0]/5 to-[#6ec6ab]/5 border border-gray-100"
        >
          <h3 className="text-xl font-semibold text-[#36a0d0] mb-4">
            SAP Qualified Partner-Packaged Solution
          </h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Discover how SNAM Yaqeen and Muqeem integrate seamlessly with SAP SuccessFactors to streamline your HR processes:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#36a0d0] mt-2"></span>
                <span>SAP-certified integration ensuring reliability and performance</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#5bb6bb] mt-2"></span>
                <span>Pre-configured solution reducing implementation time</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#6ec6ab] mt-2"></span>
                <span>Comprehensive support and documentation included</span>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://www.sap.com/mena/partners/find/qualified-packaged-solutions/finder/smart-national-solutions-for-information-successfactors-snam-solutions-integration.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#36a0d0] text-white rounded-lg hover:bg-[#5bb6bb] transition-all duration-300 group"
              >
                <span>Explore SAP QPPS Solution</span>
                <svg 
                  className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side - integration visualization with actual logos */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
          <div className="flex flex-col items-center space-y-8">
            {/* Yaqeen System */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#36a0d0]/10 to-transparent border border-[#36a0d0]/20 group hover:bg-[#36a0d0]/5 transition-all duration-300">
                <div className="flex items-center justify-center">
                  <img 
                    src="/SNAM-Logos/SNAM-yaqeen.svg"
                    alt="SNAM Yaqeen"
                    className="h-16 w-auto transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center mt-3">
                  <div className="text-sm text-gray-600">Employee Verification System</div>
                </div>
              </div>
            </motion.div>

            {/* Integration Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-20 flex justify-center items-center"
            >
              {/* Connection line */}
              <div className="absolute w-px h-full bg-gradient-to-b from-[#36a0d0] to-[#6ec6ab] left-1/2 transform -translate-x-1/2" />
              
              {/* Animated dots */}
              <div className="flex space-x-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] animate-ping" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] animate-ping delay-100" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] animate-ping delay-200" />
              </div>
            </motion.div>

            {/* Muqeem System */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full"
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#6ec6ab]/10 to-transparent border border-[#6ec6ab]/20 group hover:bg-[#6ec6ab]/5 transition-all duration-300">
                <div className="flex items-center justify-center">
                  <img 
                    src="/SNAM-Logos/SNAM-muqeem.svg"
                    alt="SNAM Muqeem"
                    className="h-16 w-auto transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center mt-3">
                  <div className="text-sm text-gray-600">Resident Management System</div>
                </div>
              </div>
            </motion.div>

            {/* Integration Status */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#36a0d0]/5 to-[#6ec6ab]/5 border border-gray-100"
            >
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Systems Connected & Syncing</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements - keeping original styling */}
        <div className="absolute top-8 right-8 w-full h-full bg-gradient-to-r from-primary/20 to-[#6ec6ab]/20 rounded-2xl -z-10 transform rotate-3" />
        <div className="absolute top-4 right-4 w-full h-full bg-gradient-to-r from-[#6ec6ab]/20 to-primary/20 rounded-2xl -z-20 transform -rotate-3" />
      </motion.div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your HR Operations Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the power of integrated employee verification and management with SNAM Yaqeen's advanced features and seamless Muqeem integration.
          </p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button
              className="px-8 py-3 bg-[#36a0d0] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
              onClick={() => window.location.href = 'https://store.sap.com/dcp/en/product/display-2002001834_live_v1/snam-yaqeen'}
            >
              Visit SAP Store
            </button>
            <button
              className="px-8 py-3 bg-white text-[#36a0d0] rounded-lg font-semibold border border-[#36a0d0] hover:bg-[#36a0d0] hover:text-white transition-colors duration-300"
              onClick={() => window.location.href = 'mailto:support@nationalsol.com'}
            >
              Request Demo
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}