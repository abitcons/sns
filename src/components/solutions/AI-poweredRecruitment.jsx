import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, BarChart2, Clock, Users, Shield, Cog } from 'lucide-react';
export default function AIPoweredRecruitment() {
    return (<>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>AI-Powered Recruitment - Transform Your Hiring Process</title>
        <meta name="description" content="Leverage AI-powered recruitment to streamline hiring, enhance decision-making, and attract top talent. Tailored for businesses in Saudi Arabia and the Middle East."/>
        <meta name="keywords" content="AI Recruitment, Talent Acquisition, AI HR Solutions, Saudi Arabia, Middle East, Smart Hiring, SAP Gold Partner"/>
        <link rel="canonical" href="https://www.nationalsol.com/solutions/ai-recruitment"/>
        <meta property="og:title" content="AI-Powered Recruitment - Transform Your Hiring Process"/>
        <meta property="og:description" content="Revolutionize your hiring process with AI-powered recruitment solutions, designed to attract, evaluate, and onboard top talent effectively."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.nationalsol.com/solutions/ai-recruitment"/>
        <meta property="og:image" content="/images/ai-recruitment-banner.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}>
            <motion.h1 variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }} className="text-4xl font-bold mb-6">
              AI-Powered Recruitment: Transform Your Hiring Process
            </motion.h1>
            <motion.p variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
        }} className="text-lg leading-relaxed max-w-3xl mx-auto">
              Streamline your hiring process, reduce time-to-hire, and attract top talent with AI-driven recruitment solutions tailored for businesses in Saudi Arabia and the Middle East.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose SNS for AI Recruitment?
              </h2>
              <ul className="space-y-6">
                {[
            {
                icon: <Brain className="w-6 h-6 text-[#36a0d0]"/>,
                text: 'Advanced AI algorithms for precise candidate matching and assessment'
            },
            {
                icon: <Clock className="w-6 h-6 text-[#36a0d0]"/>,
                text: 'Reduce time-to-hire by up to 50% with automated screening'
            },
            {
                icon: <Shield className="w-6 h-6 text-[#36a0d0]"/>,
                text: 'Compliant with Saudi labor laws and Vision 2030 guidelines'
            },
            {
                icon: <Cog className="w-6 h-6 text-[#36a0d0]"/>,
                text: 'Seamless integration with SAP SuccessFactors and other HRMS'
            },
        ].map((feature, index) => (<li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 mt-1">{feature.icon}</span>
                    <span className="text-gray-600">{feature.text}</span>
                  </li>))}
              </ul>
            </div>
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[#36a0d0] mb-4">Recruitment Expertise</h3>
                <p className="text-gray-600">Leverage our team of 200+ consultants to implement cutting-edge recruitment solutions that drive real business value.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[#36a0d0] mb-4">Local Market Knowledge</h3>
                <p className="text-gray-600">As a Saudi company, we understand the unique recruitment challenges and opportunities in the KSA market.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Benefits of AI-Powered Recruitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
                icon: <Clock className="w-8 h-8 text-[#36a0d0] mb-4"/>,
                title: 'Faster Hiring Process',
                description: 'Reduce recruitment cycles by up to 50% with AI-driven candidate screening and matching.'
            },
            {
                icon: <BarChart2 className="w-8 h-8 text-[#36a0d0] mb-4"/>,
                title: 'Data-Driven Decisions',
                description: 'Make informed hiring decisions with advanced analytics and predictive insights.'
            },
            {
                icon: <Users className="w-8 h-8 text-[#36a0d0] mb-4"/>,
                title: 'Quality Candidates',
                description: 'Attract and identify top talent with AI-powered assessment and matching.'
            },
        ].map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{
                scale: 1.03,
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                }
            }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer relative border-2 border-transparent hover:border-[#36a0d0] transition-all duration-300">
                <div className="relative z-10">
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}>
                    {benefit.icon}
                  </motion.div>
                  <motion.h3 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-xl font-semibold text-gray-800 mb-4">
                    {benefit.title}
                  </motion.h3>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-600">
                    {benefit.description}
                  </motion.p>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#36a0d0] mb-6">
            Transform Your Recruitment Process Today
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join leading organizations in Saudi Arabia who trust SNS for their AI-powered recruitment solutions.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <a href="https://www.nationalsol.com/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5"/>
            </a>
          </motion.div>
        </div>
      </section>
    </>);
}
