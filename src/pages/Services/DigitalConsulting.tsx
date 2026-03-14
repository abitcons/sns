import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const DigitalConsulting = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation Consulting Services | Smart National Solutions</title>
        <meta
          name="description"
          content="Strategic digital transformation consulting services to help organizations embrace technology and transform operations for enhanced efficiency and growth in Saudi Arabia and the Middle East."
        />
        <meta
          name="keywords"
          content="Digital Transformation Consulting, Business Transformation, Technology Consulting, Saudi Arabia, Middle East, Smart National Solutions"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      

      {/* Hero Section */}
<section className="relative py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white text-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
    <h1 className="text-5xl font-extrabold mb-6">
      Strategic Digital Transformation Consulting
    </h1>
    <p className="text-lg leading-relaxed max-w-3xl">
      Strategic guidance to help organizations embrace digital technologies and transform their operations for enhanced efficiency and growth.
    </p>
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
        Partner with us for tailored strategies and unparalleled expertise in driving your digital transformation journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: '/Services Icons/Strategic-Planning.gif',
            title: 'Strategic Planning',
            description: 'Define clear and actionable digital transformation roadmaps.',
          },
          {
            icon: '/Services Icons/Technology-Integration.gif',
            title: 'Technology Integration',
            description: 'Seamlessly adopt cutting-edge technologies.',
          },
          {
            icon: '/Services Icons/Operational-Efficiency.gif',
            title: 'Operational Efficiency',
            description: 'Optimize processes to achieve peak performance.',
          },
          {
            icon: '/Services Icons/Saudi-Vision-2030.gif',
            title: 'Alignment with Vision 2030',
            description: 'Transformations aligned with national goals and objectives.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative group"
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
              <p className="text-gray-700 text-center">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>








 {/* Digital Consulting Services Section */}
<section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold text-white mb-6">
        Our Digital Consulting Services
      </h2>
      <p className="text-lg text-white/90">
        Tailored solutions to transform your business digitally.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Digital Strategy Development',
          description: 'Define clear goals and roadmaps for digital transformation.',
          icon: '/Services Icons/strategy.svg',
        },
        {
          title: 'Technology Integration',
          description: 'Seamlessly incorporate new technologies into existing systems.',
          icon: '/Services Icons/integration.svg',
        },
        {
          title: 'Process Optimization',
          description: 'Streamline operations for enhanced efficiency and effectiveness.',
          icon: '/Services Icons/optimization.svg',
        },
        {
          title: 'Change Management',
          description: 'Facilitate smooth transitions with effective change strategies.',
          icon: '/Services Icons/change.svg',
        },
        {
          title: 'Data-Driven Transformation',
          description: 'Use data insights to guide strategic decisions.',
          icon: '/Services Icons/data.svg',
        },
        {
          title: 'Innovation Workshops',
          description: 'Foster a culture of innovation within your organization.',
          icon: '/Services Icons/innovation-workshops.svg',
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
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />

      <div className="bg-white rounded-2xl px-8 py-12 relative">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 transition-all duration-500 group-hover:transform group-hover:scale-105">
          Ready to Transform Your Organization?
        </h2>
        <p className="text-lg text-gray-600 mb-8 transition-all duration-500 relative max-w-2xl mx-auto">
          Let Smart National Solutions guide your organization through its digital transformation journey. Contact us today to discuss your needs.
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
            Contact Us Now
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

export default DigitalConsulting;
