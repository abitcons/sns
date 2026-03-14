import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeIn } from '../../styles/animations';

const CloudServices = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Computing Services in Saudi Arabia | Smart National Solutions</title>
        <meta
          name="description"
          content="Leverage secure and scalable cloud computing solutions from Smart National Solutions to modernize your infrastructure and drive digital innovation across Saudi Arabia and the Middle East."
        />
        <meta
          name="keywords"
          content="Cloud Computing Services, Scalable Cloud Solutions, Digital Innovation Saudi Arabia, Cloud Modernization, Smart National Solutions"
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
            Transform Your Business with Cloud Computing Services
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-lg leading-relaxed"
          >
            Discover how Smart National Solutions empowers organizations in Saudi Arabia and the Middle East with advanced cloud solutions for unparalleled efficiency and innovation.
          </motion.p>
        </div>
      </section>

{/* Why SNS Section */}
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
        At SNS, we are redefining cloud computing for businesses in Saudi Arabia and the Middle East by delivering tailored, scalable, and secure solutions that drive innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: "/Services Icons/Unmatched-Security.gif",
            title: "Unmatched Security",
            description: "Protect your sensitive data with enterprise-grade security measures.",
          },
          {
            icon: "/Services Icons/Business-Scalability.gif",
            title: "Business Scalability",
            description: "Adapt to growth with scalable cloud infrastructure tailored to your needs.",
          },
          {
            icon: "/Services Icons/Cost-Efficiency.gif",
            title: "Cost Efficiency",
            description: "Optimize operational costs while boosting performance and productivity.",
          },
          {
            icon: "/Services Icons/Innovation-at-Core.gif",
            title: "Innovation at Core",
            description: "Leverage the latest cloud technologies to transform your business.",
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



{/* Our Cloud Services Section */}
<section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold text-white mb-6">
        Cloud Computing Services by SNS
      </h2>
      <p className="text-lg text-white/90">
        Explore our innovative solutions designed to elevate your business to the cloud.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Cloud Migration',
          description: 'Seamlessly migrate your systems to the cloud with minimal disruption.',
          icon: '/Services Icons/Cloud-Migration.svg',
        },
        {
          title: 'Infrastructure as a Service (IaaS)',
          description: 'Access scalable, on-demand infrastructure to drive business growth.',
          icon: '/Services Icons/Infrastructure-Service (IaaS).svg',
        },
        {
          title: 'Platform as a Service (PaaS)',
          description: 'Simplify application development and deployment with managed services.',
          icon: '/Services Icons/Platform-Service (PaaS).svg',
        },
        {
          title: 'Cloud Security',
          description: 'Ensure robust data protection and compliance with top-tier security.',
          icon: '/Services Icons/Cloud-Security.svg',
        },
        {
          title: 'Hybrid Cloud Solutions',
          description: 'Combine on-premise and cloud systems for ultimate flexibility.',
          icon: '/Services Icons/Hybrid-Cloud.svg',
        },
        {
          title: 'Cloud Cost Optimization',
          description: 'Maximize ROI with tailored strategies to reduce costs.',
          icon: '/Services Icons/Cloud-Cost-Optimization.svg',
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
          Partner with SNS for Cloud Excellence
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your business infrastructure with our secure and scalable cloud solutions. Let SNS guide you through your digital transformation journey.
        </p>
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
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl transition-all duration-500 group-hover:border-primary/40" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl transition-all duration-500 group-hover:border-primary/40" />
      </div>
    </div>
  </motion.div>
</section>

    </>
  );
};

export default CloudServices;
