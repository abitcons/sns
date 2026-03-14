import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Server, Cloud, Link, ArrowRight } from 'lucide-react';
import { Cpu, BarChart3, Building2 } from 'lucide-react';
import { Users, Settings, Headphones } from 'lucide-react';
export default function S4HANA() {
    return (<>
      {/* Enhanced SEO Meta Tags */}
      <Helmet>
        <title>SAP S/4HANA® Implementation & Consulting Services in Saudi Arabia | Smart National Solutions</title>
        <meta name="description" content="Transform your business with SAP S/4HANA® – the intelligent ERP solution tailored for industries in Saudi Arabia. Explore seamless implementation, real-time analytics, and innovative features with Smart National Solutions."/>
        <meta name="keywords" content="SAP S/4HANA Saudi Arabia, ERP Implementation, SAP ERP, Industries ERP Solutions, Digital Transformation, SAP Fiori®, Real-Time Analytics, Middle East SAP Solutions"/>
        <link rel="canonical" href="https://www.nationalsol.com/solutions/sap-s4hana"/>
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
              SAP S/4HANA®: Revolutionizing Enterprise Resource Planning
            </motion.h1>
            <motion.p variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
        }} className="text-lg leading-relaxed max-w-3xl mx-auto">
              Accelerate your digital transformation with SAP S/4HANA®, the cutting-edge ERP solution
              that integrates intelligent technologies and real-time insights for streamlined business operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
    <div className="lg:w-1/2">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Why Migrate to SAP S/4HANA®?
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          SAP S/4HANA® redefines how businesses operate in the digital age. Designed to optimize performance,
          simplify processes, and deliver real-time insights, it’s the intelligent ERP solution your business needs
          to thrive in a competitive market.
        </p>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          By migrating to SAP S/4HANA®, businesses unlock new levels of agility, scalability, and innovation, paving
          the way for a seamless digital transformation.
        </p>
        <ul className="list-disc ml-6 text-gray-600 space-y-4">
          <li className="flex items-start space-x-2">
            <span className="text-[#36a0d0] font-bold">✔</span>
            <span>Enhanced user experience with SAP Fiori® for a modern, intuitive interface.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#36a0d0] font-bold">✔</span>
            <span>Streamlined operations with intelligent automation and AI-driven processes.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#36a0d0] font-bold">✔</span>
            <span>Seamless integration across all business units for unified workflows.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#36a0d0] font-bold">✔</span>
            <span>Real-time analytics and decision-making powered by in-memory computing.</span>
          </li>
        </ul>
      </motion.div>
    </div>
    <div className="lg:w-1/2">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}>
        <img src="/images/sap-s4hana.png" alt="Why Migrate to SAP S/4HANA" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"/>
      </motion.div>
    </div>
  </div>
    </section>


 {/* Why Choose SNS Section */}
    <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
        Why Choose SAP S/4HANA® with SNS?
      </h2>
      <div className="w-24 h-1 bg-white/30 mx-auto rounded-full mb-8"></div>
      <p className="text-lg text-white/90">
        Smart National Solutions is your trusted partner for SAP S/4HANA® implementation in Saudi
        Arabia. We combine expertise, technology, and a client-centric approach to deliver seamless
        ERP transformations.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
            {
                title: 'Expert Guidance',
                description: 'Leverage our experienced consultants to ensure successful implementation.',
                icon: <Users className="w-8 h-8"/>,
                gradient: 'from-[#36a0d0] to-[#5bb6bb]'
            },
            {
                title: 'Customized Solutions',
                description: 'Tailored strategies to meet your specific business needs.',
                icon: <Settings className="w-8 h-8"/>,
                gradient: 'from-[#5bb6bb] to-[#6ec6ab]'
            },
            {
                title: 'Continuous Support',
                description: 'Ongoing maintenance and optimization for sustained success.',
                icon: <Headphones className="w-8 h-8"/>,
                gradient: 'from-[#36a0d0] to-[#6ec6ab]'
            },
        ].map((item, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="group">
          <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className={`h-1 bg-gradient-to-r ${item.gradient}`}></div>
            <div className="p-8">
              <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4 text-center">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-center text-lg">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>))}
    </div>
  </div>
    </section>

     {/* Core Features Section */}
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Core Features of SAP S/4HANA®
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] mx-auto rounded-full"></div>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
            {
                title: 'AI-Powered Automation',
                description: 'Streamline repetitive tasks with embedded AI.',
                icon: <Cpu className="w-8 h-8"/>,
                gradient: 'from-[#36a0d0] to-[#5bb6bb]'
            },
            {
                title: 'Real-Time Analytics',
                description: 'Gain actionable insights with live data reporting.',
                icon: <BarChart3 className="w-8 h-8"/>,
                gradient: 'from-[#5bb6bb] to-[#6ec6ab]'
            },
            {
                title: 'Industry-Specific Solutions',
                description: 'Tailored solutions for over 25 industries.',
                icon: <Building2 className="w-8 h-8"/>,
                gradient: 'from-[#36a0d0] to-[#6ec6ab]'
            },
        ].map((feature, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="group">
          <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient}`}></div>
            
            <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4 text-center">
              {feature.title}
            </h3>

            <p className="text-gray-600 text-center text-lg">
              {feature.description}
            </p>
          </div>
        </motion.div>))}
    </div>
  </div>
    </section>

    {/* Section Divider */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"></div>

   {/* Deployment Section */}
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }} className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Which Deployment is Right for Me?
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        SAP S/4HANA® offers flexible deployment options to align with your business strategy. 
        Choose the one that fits your organizational requirements, budget, and long-term goals.
      </p>
    </motion.div>

    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
            {
                title: 'On-Premise',
                description: `Perfect for businesses that need complete control over their data and IT infrastructure. 
            Offers extensive customization options and is ideal for industries with strict compliance requirements.`,
                features: [
                    'Full control over hardware and data.',
                    'Ideal for heavily regulated industries.',
                    'Extensive customization and flexibility.',
                    'Requires upfront infrastructure investment.',
                ],
                icon: <Server className="w-12 h-12 text-white"/>,
            },
            {
                title: 'Cloud',
                description: `Best suited for businesses looking for scalability, reduced IT costs, and faster implementation. 
            Provides regular updates and managed services, freeing up internal resources.`,
                features: [
                    'Scalable and cost-effective.',
                    'No upfront infrastructure investment.',
                    'Automatic updates and managed services.',
                    'Fast implementation for rapid deployment.',
                ],
                icon: <Cloud className="w-12 h-12 text-white"/>,
            },
            {
                title: 'Hybrid',
                description: `A combination of on-premise and cloud deployment. Ideal for businesses that need the flexibility 
            of the cloud while retaining critical processes on-premise.`,
                features: [
                    'Combines the benefits of both on-premise and cloud.',
                    'Flexibility to keep critical data on-premise.',
                    'Scalable for growing business needs.',
                    'Supports gradual cloud migration.',
                ],
                icon: <Link className="w-12 h-12 text-white"/>,
            },
        ].map((option, index) => (<motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: index * 0.2 },
                },
            }} className="group relative">
          <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab]"></div>
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                {option.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-8">
                {option.description}
              </p>
              
              <ul className="space-y-3 text-left w-full">
                {option.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#36a0d0] mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>))}
              </ul>
            </div>
          </div>
        </motion.div>))}
    </div>
  </div>
    </section>



      {/* CTA Section */}
    <section className="py-20 text-center bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Ready to Transform Your Business?
    </h2>
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Contact Smart National Solutions today to explore how SAP S/4HANA® can help achieve your business goals.
    </p>
    <a href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
      Contact Us
      <ArrowRight className="ml-2 h-5 w-5"/>
    </a>
  </div>
    </section>

    </>);
}
