import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export default function SAPAnalyticsCloud() {
    return (<>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SAP Analytics Cloud - Unlock Data-Driven Insights</title>
        <meta name="description" content="Discover SAP Analytics Cloud, the ultimate solution for data visualization, planning, and predictive analytics, tailored for businesses in Saudi Arabia and the Middle East."/>
        <meta name="keywords" content="SAP Analytics Cloud, Data Visualization, Predictive Analytics, Saudi Arabia, Middle East, SAP Solutions"/>
        <link rel="canonical" href="https://www.nationalsol.com/solutions/analytics-cloud"/>
        <meta property="og:title" content="SAP Analytics Cloud - Unlock Data-Driven Insights"/>
        <meta property="og:description" content="SAP Analytics Cloud empowers businesses in Saudi Arabia and the Middle East to make data-driven decisions with powerful analytics and predictive insights."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.nationalsol.com/solutions/analytics-cloud"/>
        <meta property="og:image" content="/images/sap-analytics-cloud-banner.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-gray-900 mb-6">
            SAP Analytics Cloud: Unlock Data-Driven Insights
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leverage the power of SAP Analytics Cloud to visualize your data, plan effectively, and gain predictive insights that drive business success.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose SAP Analytics Cloud?
              </h2>
              <ul className="space-y-4">
                {[
            'Integrated analytics, planning, and predictive tools',
            'Interactive dashboards for real-time data visualization',
            'AI-driven insights to forecast trends and patterns',
            'Seamless integration with SAP and non-SAP data sources',
            'Secure cloud-based environment for collaboration and scalability',
        ].map((feature, index) => (<li key={index} className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"/>
                    <span className="text-gray-600">{feature}</span>
                  </li>))}
              </ul>
            </div>
            <motion.img src="/images/sap-analytics-cloud-dashboard.jpg" alt="SAP Analytics Cloud Dashboard" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Benefits of SAP Analytics Cloud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
            { title: 'Enhanced Data Visualization', description: 'Create interactive dashboards to make data insights accessible and actionable.' },
            { title: 'Predictive Analytics', description: 'Harness AI to forecast trends and drive proactive decision-making.' },
            { title: 'Integrated Planning', description: 'Combine planning and analytics for a unified approach to business strategy.' },
        ].map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Empower Your Business with SAP Analytics Cloud
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how SAP Analytics Cloud can transform your data into actionable insights, driving smarter decisions and strategic success.
          </p>
          <a href="https://www.sap.com/products/analytics-cloud.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Learn More
            <ArrowRight className="ml-2 h-5 w-5"/>
          </a>
        </div>
      </section>
    </>);
}
