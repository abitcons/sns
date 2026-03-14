import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeIn } from '../../styles/animations';

const DataManagement = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise Data Management Solutions | Smart National Solutions</title>
        <meta
          name="description"
          content="Organize, protect, and leverage your business data effectively with Smart National Solutions' enterprise data management services in Saudi Arabia and the Middle East."
        />
        <meta
          name="keywords"
          content="Enterprise Data Management, Business Data Solutions, Data Security, Data Analytics, Smart National Solutions Saudi Arabia"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold mb-6"
          >
            Empower Your Business with Enterprise Data Management
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-lg leading-relaxed"
          >
            Unlock the potential of your business data with secure and scalable enterprise data management solutions tailored for Saudi Arabia and the Middle East.
          </motion.p>
        </div>
      </section>

 {/* Why Choose Us Section */}
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
        At Smart National Solutions, we understand the critical role of data in driving business success. Our enterprise data management services are designed to help you organize, protect, and leverage your data effectively.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: "/Services Icons/Data-Integration.gif",
            title: "Comprehensive Solutions",
            description: "From data integration to data security, we cover all aspects of enterprise data management.",
          },
          {
            icon: "/Services Icons/Scalable-Infrastructure.gif",
            title: "Scalable Infrastructure",
            description: "Ensure seamless scalability to meet growing data needs.",
          },
          {
            icon: "/Services Icons/Data-Insights.gif",
            title: "Data-Driven Insights",
            description: "Leverage analytics to unlock actionable insights.",
          },
          {
            icon: "/Services Icons/Compliance.gif",
            title: "Regulatory Compliance",
            description: "Ensure your data management practices align with regional regulations in Saudi Arabia and the Middle East.",
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

{/* Data Management Services Section */}
<section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold text-white mb-6">
        Enterprise Data Management Services by SNS
      </h2>
      <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto">
        Manage your data efficiently and securely with tailored solutions designed to empower businesses across Saudi Arabia and the Middle East.
      </p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Data Integration",
          description: "Combine data from multiple sources into a unified system.",
          icon: "/Services Icons/Data-Integration.svg",
        },
        {
          title: "Data Security",
          description: "Protect sensitive business data with top-tier security measures.",
          icon: "/Services Icons/Data-Security.svg",
        },
        {
          title: "Data Governance",
          description: "Ensure your data is accurate, secure, and compliant with regulations.",
          icon: "/Services Icons/Data-Governance.svg",
        },
        {
          title: "Data Analytics",
          description: "Gain actionable insights through advanced data analytics.",
          icon: "/Services Icons/Data-Analytics.svg",
        },
        {
          title: "Big Data Solutions",
          description: "Manage and analyze large-scale data sets efficiently.",
          icon: "/Services Icons/Big-Data-Solutions.svg",
        },
        {
          title: "Data Backup & Recovery",
          description: "Safeguard your business data with reliable backup and recovery solutions.",
          icon: "/Services Icons/Data-Backup-Recovery.svg",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="group h-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
            <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center relative z-10 group-hover:scale-105 transition-transform duration-500">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center relative z-10">
              {service.description}
            </p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-700 transition-opacity z-20">
              <div className="absolute inset-0 translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Call-to-Action Section */}
<section className="py-20 bg-primary/5">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
  >
    <div className="bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-2xl relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />
      <div className="bg-white rounded-2xl px-8 py-12 relative">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 transition-all duration-500 group-hover:transform group-hover:scale-105">
          Ready to Unlock the Potential of Your Data?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Partner with Smart National Solutions to organize, protect, and leverage your business data effectively. Contact us today to learn more.
        </p>
        <motion.a
          href="/contact"
          className="relative inline-block group/btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-sm transition-all duration-500 group-hover/btn:blur-md" />
          <div className="relative px-8 py-4 bg-primary text-white font-medium rounded-xl transition-all duration-500 group-hover/btn:bg-opacity-90">
            Contact Us Now
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shine" />
          </div>
        </motion.a>
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl transition-all duration-500 group-hover:border-primary/40" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl transition-all duration-500 group-hover:border-primary/40" />
      </div>
    </div>
  </motion.div>
</section>

    </>
  );
};

export default DataManagement;
