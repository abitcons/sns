import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export default function SAPAriba() {
    return (<>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SAP Ariba - Streamline Procurement Processes</title>
        <meta name="description" content="Explore SAP Ariba, the ultimate solution for managing procurement and supply chain operations, designed for businesses in Saudi Arabia and the Middle East."/>
        <meta name="keywords" content="SAP Ariba, Procurement Management, Supply Chain Optimization, Saudi Arabia, Middle East, SAP Solutions"/>
        <link rel="canonical" href="https://www.nationalsol.com/solutions/ariba"/>
        <meta property="og:title" content="SAP Ariba - Streamline Procurement Processes"/>
        <meta property="og:description" content="SAP Ariba empowers businesses in Saudi Arabia and the Middle East to enhance procurement efficiency, reduce costs, and build resilient supply chains."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.nationalsol.com/solutions/ariba"/>
        <meta property="og:image" content="/images/sap-ariba-banner.jpg"/>
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
        }} className="text-5xl font-extrabold mb-6">
        Revolutionize Your Procurement with SAP® Ariba®
      </motion.h1>
      <motion.p variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
        }} className="text-xl leading-relaxed max-w-3xl mx-auto">
        Empower your business with the ultimate procurement solution. 
        SAP® Ariba® transforms supply chain management, drives cost savings, 
        and fosters seamless supplier collaboration for unmatched efficiency.
      </motion.p>
    </motion.div>
  </div>
    </section>



    {/* Introduction Section for SAP® Ariba® */}
    <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why SAP® Ariba®?
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            SAP® Ariba® is the world’s leading procurement and supply chain solution, designed to help businesses streamline 
            processes, reduce costs, and ensure compliance. With robust tools for supplier collaboration, sourcing, and procurement, 
            SAP® Ariba® empowers organizations to make smarter, data-driven decisions.
          </p>
          <ul className="space-y-4">
            {[
            'End-to-end procurement and supply chain management.',
            'Cloud-based solutions for seamless supplier collaboration.',
            'Comprehensive analytics for smarter decision-making.',
            'Enhanced compliance with global regulations and standards.',
            'Cost optimization through efficient sourcing and procurement.',
        ].map((feature, index) => (<li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#36a0d0] mt-2"/>
                <span className="text-gray-600">{feature}</span>
              </li>))}
          </ul>
        </motion.div>
      </div>
      <motion.img src="/images/sap-ariba-dashboard.png" alt="SAP® Ariba® Dashboard" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="rounded-lg shadow-lg"/>
    </div>
  </div>
    </section>
    {/* Why SAP® Ariba® with SNS Section */}
    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">
        Why SAP® Ariba® with SNS?
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
        Partner with SNS to unlock the full potential of SAP® Ariba® and revolutionize your procurement and supply chain operations. 
        With proven expertise and a deep understanding of SAP® solutions, SNS ensures seamless integration, implementation, and support.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
            {
                title: 'Proven Expertise',
                description: "SNS is an award-winning SAP® partner with a proven track record of successful SAP® Ariba® implementations across diverse industries.",
            },
            {
                title: 'Tailored Solutions',
                description: "Receive customized SAP® Ariba® solutions designed to align with your specific business needs, ensuring maximum ROI and scalability.",
            },
            {
                title: 'Seamless Integration',
                description: "SNS ensures smooth integration of SAP® Ariba® with your existing SAP® ecosystem for a unified digital experience.",
            },
            {
                title: 'Local Market Knowledge',
                description: "Leverage SNS’s deep understanding of Saudi Arabian and Middle Eastern markets to ensure compliance and localized solutions.",
            },
            {
                title: 'Continuous Support',
                description: "Benefit from ongoing support and maintenance to optimize your SAP® Ariba® solution and adapt to evolving business needs.",
            },
            {
                title: 'Accelerated Results',
                description: "Achieve rapid results with SNS’s agile implementation methodologies, ensuring minimal downtime and maximum efficiency.",
            },
        ].map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="relative bg-gradient-to-r from-[#36a0d0]/10 to-[#5bb6bb]/10 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] rounded-t-lg"></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </motion.div>))}
    </div>
  </div>
    </section>


     {/* Key Benefits Section */}
    <section className="bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] py-20 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold mb-12 text-center">Key Benefits of SAP® Ariba®</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
            {
                title: 'Seamless Supplier Collaboration',
                description: 'Enhance supplier relationships through streamlined communication and real-time collaboration tools, ensuring transparency and trust.',
            },
            {
                title: 'Strategic Cost Management',
                description: 'Achieve measurable cost savings with advanced sourcing strategies, dynamic discounts, and optimized procurement processes.',
            },
            {
                title: 'Comprehensive Compliance',
                description: 'Ensure adherence to local and international procurement standards with built-in compliance tracking and reporting tools.',
            },
            {
                title: 'Enhanced Decision-Making',
                description: 'Leverage powerful analytics and actionable insights to drive smarter, data-driven procurement decisions.',
            },
            {
                title: 'End-to-End Visibility',
                description: 'Gain full visibility across the procurement lifecycle, from sourcing to payment, ensuring greater control and efficiency.',
            },
            {
                title: 'Scalable for Growth',
                description: 'Easily adapt to growing business needs with a flexible and scalable platform designed for modern supply chains.',
            },
        ].map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </motion.div>))}
    </div>
  </div>
    </section>
    {/* SAP® Ariba® Core Features Section */}
    <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">SAP® Ariba® Core Features</h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
        Discover the transformative capabilities of SAP® Ariba® to streamline procurement, enhance supplier collaboration, and optimize business operations.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
            {
                title: 'Procurement Management',
                description: 'Automate procurement workflows to increase efficiency, control costs, and enhance compliance with corporate policies.',
            },
            {
                title: 'Supplier Collaboration',
                description: 'Seamlessly collaborate with suppliers using real-time communication and integrated tools for streamlined operations.',
            },
            {
                title: 'Spend Visibility',
                description: 'Gain comprehensive insights into spending patterns with advanced analytics for better decision-making.',
            },
            {
                title: 'Contract Management',
                description: 'Create, track, and manage contracts efficiently while ensuring compliance with global standards.',
            },
            {
                title: 'Strategic Sourcing',
                description: 'Optimize sourcing processes with advanced strategies that reduce costs and identify high-value suppliers.',
            },
            {
                title: 'Catalog Management',
                description: 'Maintain accurate and up-to-date supplier catalogs for simplified procurement and improved efficiency.',
            },
        ].map((feature, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="relative bg-gradient-to-r from-white to-[#f9f9f9] p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] rounded-t-lg"></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </motion.div>))}
    </div>
  </div>
    </section>


      {/* CTA Section */}
    <section className="py-20 text-center bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Transform Procurement with SAP® Ariba®
    </h2>
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Discover how SAP® Ariba® can help your organization achieve procurement excellence and build a resilient supply chain. 
      Partner with SNS for expert guidance and seamless implementation.
    </p>
    <a href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
      Contact Us
      <ArrowRight className="ml-2 h-5 w-5"/>
    </a>
  </div>
    </section>

    </>);
}
