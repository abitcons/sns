import { FC } from 'react';
import { motion } from 'framer-motion';

interface Capability {
  title: string;
  description: string;
  icon: string;
}

interface Service {
  title: string;
  description: string;
}

const AIDataAnalytics: FC = () => {
  const capabilities: Capability[] = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and make proactive decisions to stay ahead in the market.',
      icon: '/Services Icons/Predictive-Analytics.svg',
    },
    {
      title: 'Data Visualization',
      description: 'Create interactive dashboards to monitor performance and track KPIs in real-time.',
      icon: '/Services Icons/Data-Visualization.svg',
    },
    {
      title: 'Big Data Analysis',
      description: 'Transform complex datasets into meaningful insights for strategic planning.',
      icon: '/Services Icons/Big-Data.svg',
    },
    {
      title: 'AI Automation',
      description: 'Streamline workflows and reduce costs by integrating AI-powered automation.',
      icon: '/Services Icons/AI-Automation.svg',
    },
    {
      title: 'Customer Insights',
      description: 'Gain a deeper understanding of customer behavior to deliver personalized experiences.',
      icon: '/Services Icons/Customer-Insights.svg',
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify potential risks and prevent fraud with advanced AI-driven solutions.',
      icon: '/Services Icons/Risk-Mitigation.svg',
    },
  ];

  const services: Service[] = [
    {
      title: 'AI Strategy Consulting',
      description: 'Build a robust AI strategy to transform your business operations and gain a competitive edge in the Middle East.',
    },
    {
      title: 'Advanced Data Insights',
      description: 'Leverage data-driven insights to make informed decisions, optimize performance, and improve ROI in real-time.',
    },
    {
      title: 'Process Optimization with AI',
      description: 'Streamline workflows and automate repetitive tasks with our AI-powered solutions tailored for KSA businesses.',
    },
    {
      title: 'AI-Driven Security Solutions',
      description: 'Protect your data and infrastructure with advanced AI-driven cybersecurity solutions designed for todays digital threats.',
    },
    {
      title: 'Customer Analytics & Engagement',
      description: 'Understand your customers deeply and enhance their experience with AI-powered analytics and engagement tools.',
    },
    {
      title: 'Trend Prediction & Market Analysis',
      description: 'Stay ahead in the market with predictive analytics, helping you forecast trends and adapt to dynamic business landscapes.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Transform Data Into Actionable Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg leading-relaxed"
          >
            Smart National Solutions empowers businesses in Saudi Arabia and the Middle East to achieve excellence with advanced AI and data analytics solutions.
          </motion.p>
        </div>
      </section>

      {/* Why Choose SNS Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Why Choose Smart National Solutions?
      </h2>
      <p className="text-lg text-gray-700 mb-12 text-center">
        At SNS, we deliver tailored, scalable, and secure AI solutions for data-driven decision-making.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: '/Services Icons/Expert-Team.gif',
            title: 'Expert Team',
            description: 'Led by professionals with decades of experience.',
          },
          {
            icon: '/Services Icons/Proven-Results.gif',
            title: 'Proven Results',
            description: 'Delivering measurable AI-driven outcomes.',
          },
          {
            icon: '/Services Icons/Secure-Scalable.gif',
            title: 'Secure & Scalable',
            description: 'Reliable and adaptable solutions for diverse needs.',
          },
          {
            icon: '/Services Icons/Innovation-at-Core.gif',
            title: 'Innovation at Core',
            description: 'Leveraging cutting-edge technologies for excellence.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative group h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
            <div className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col items-center justify-between h-full">
              <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-center">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


  {/* Key Capabilities Section */}
<section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold text-white mb-6">
        Key Capabilities in AI & Data Analytics
      </h2>
      <p className="text-lg text-white/90">
        Explore the transformative power of AI and data analytics designed to drive innovation and insights.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {capabilities.map((capability, index) => (
        <motion.div
          key={index}
          className="group h-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col relative overflow-hidden cursor-pointer">
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
            
            {/* Icon container with enhanced hover effect */}
            <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
              <img
                src={capability.icon}
                alt={capability.title}
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center relative z-10 group-hover:scale-105 transition-transform duration-500">
              {capability.title}
            </h3>
            <p className="text-gray-600 text-center relative z-10">
              {capability.description}
            </p>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-700 transition-opacity z-20">
              <div className="absolute inset-0 translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Services Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold text-gray-800 mb-6">
        Leading AI & Data Analytics Services
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Unlock the full potential of your business with cutting-edge AI and Data Analytics solutions.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group cursor-pointer h-full"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            
            {/* Top border line animation */}
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-700" />
            
            {/* Content with flex layout for equal height */}
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    {/* Call-to-Action Section */}
<section className="py-20 bg-white">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
  >
    <div className="bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-2xl relative group">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />
      
      <div className="bg-white rounded-2xl px-8 py-12 relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 transition-all duration-500 group-hover:transform group-hover:scale-105">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-lg text-gray-600 mb-8 transition-all duration-500 relative">
          Partner with Smart National Solutions to elevate your operations with data and AI-driven solutions.
        </p>
        
        {/* Enhanced button with background animation */}
        <motion.a
          href="/contact"
          className="relative inline-block group/btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-sm transition-all duration-500 group-hover/btn:blur-md" />
          <div className="relative px-8 py-4 bg-primary text-white font-medium rounded-xl transition-all duration-500 group-hover/btn:bg-opacity-90">
            Contact Us Today
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shine" />
          </div>
        </motion.a>

        {/* Corner decorative elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl transition-all duration-500 group-hover:border-primary/40" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl transition-all duration-500 group-hover:border-primary/40" />
      </div>
    </div>
  </motion.div>
</section>
    </>
  );
};

export default AIDataAnalytics;