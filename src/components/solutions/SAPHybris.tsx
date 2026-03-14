import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


export default function SAPHybris() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SAP Hybris - Revolutionize Customer Engagement</title>
        <meta
          name="description"
          content="Explore SAP Hybris, a cutting-edge solution for omnichannel commerce, marketing, and customer engagement, tailored to meet the demands of businesses in Saudi Arabia and the Middle East."
        />
        <meta
          name="keywords"
          content="SAP Hybris, Customer Engagement, Omnichannel Commerce, Saudi Arabia, Middle East, SAP Solutions"
        />
        <link rel="canonical" href="https://www.nationalsol.com/solutions/hybris" />
        <meta property="og:title" content="SAP Hybris - Revolutionize Customer Engagement" />
        <meta
          property="og:description"
          content="SAP Hybris offers businesses in Saudi Arabia and the Middle East the tools to enhance customer experiences and drive sales through innovative technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nationalsol.com/solutions/hybris" />
        <meta property="og:image" content="/images/sap-hybris-banner.jpg" />
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
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="text-4xl font-bold mb-6"
      >
        SAP Hybris: Revolutionize Customer Engagement
      </motion.h1>
      <motion.p
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
        className="text-lg leading-relaxed max-w-3xl mx-auto"
      >
        Empower your business with SAP Hybris, a solution designed to deliver seamless customer experiences, drive revenue, and build stronger relationships.
      </motion.p>
    </motion.div>
  </div>
</section>


  {/* Introduction Section for SAP® Hybris® */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover the Power of SAP® Hybris®
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            SAP® Hybris® is a cutting-edge solution designed to transform customer engagement and drive business growth. 
            With its robust capabilities, SAP® Hybris® empowers businesses to deliver exceptional customer experiences 
            across all channels, ensuring brand loyalty and long-term success.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Key Features of SAP® Hybris®:
          </h3>
          <ul className="space-y-4">
            {[
              'Comprehensive omnichannel commerce capabilities for seamless shopping experiences.',
              'AI-powered personalized marketing campaigns to engage customers effectively.',
              'Flexible and scalable architecture to grow with your business needs.',
              'Real-time analytics for actionable customer insights and smarter decisions.',
              'Enhanced customer loyalty through tailored, meaningful interactions.',
            ].map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-3 h-3 rounded-full bg-[#36a0d0] mt-1" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <motion.img
        src="/images/sap-hybris-dashboard.png"
        alt="SAP® Hybris® Dashboard"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>
{/* Why SAP® Hybris® with SNS Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">
        Why SAP® Hybris® with SNS?
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
        Partner with SNS to harness the full potential of SAP® Hybris® and transform your customer engagement strategy. 
        With extensive expertise in SAP® solutions, SNS ensures seamless implementation, optimization, and support tailored to your business needs.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Certified Expertise',
          description:
            "Work with an award-winning SAP® partner offering certified consultants and a proven track record in implementing SAP® Hybris® solutions.",
        },
        {
          title: 'Customized Solutions',
          description:
            "Get tailored SAP® Hybris® implementations to meet your unique business requirements, ensuring maximum ROI and scalability.",
        },
        {
          title: 'Comprehensive Support',
          description:
            "Experience unmatched post-implementation support from SNS, ensuring optimal performance and continuous innovation.",
        },
        {
          title: 'Local Market Insights',
          description:
            "Leverage SNS’s deep understanding of the Saudi Arabian and Middle Eastern markets to deliver localized solutions with SAP® Hybris®.",
        },
        {
          title: 'Seamless Integration',
          description:
            "Benefit from SNS’s expertise in integrating SAP® Hybris® with other SAP® solutions for a unified, efficient digital ecosystem.",
        },
        {
          title: 'Proven Results',
          description:
            "Join leading enterprises that have transformed their commerce operations with SAP® Hybris® and SNS’s strategic approach.",
        },
      ].map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative bg-gradient-to-r from-[#36a0d0]/10 to-[#5bb6bb]/10 p-8 rounded-lg shadow-lg text-left transform hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] rounded-t-lg"></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  {/* Key Benefits Section */}
<section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold mb-12 text-center">Key Benefits of SAP® Commerce Cloud</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: 'Omnichannel Excellence',
          description:
            "Unify customer experiences across digital and physical touchpoints with SAP®'s integrated commerce platform, ensuring consistent and personalized interactions.",
        },
        {
          title: 'Real-Time Analytics',
          description:
            "Make data-driven decisions with SAP®'s powerful analytics engine, delivering actionable insights for precise marketing campaigns and optimized sales strategies.",
        },
        {
          title: 'Scalable Solutions',
          description:
            "Expand confidently with SAP®'s enterprise-grade platform, designed to handle growing transaction volumes while maintaining superior performance.",
        },
      ].map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


           

     {/* CTA Section */}
<section className="py-20 text-center bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Elevate Customer Engagement with SAP® Hybris®
    </h2>
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Partner with SNS to unlock the full potential of SAP® Hybris® and deliver exceptional customer experiences that drive sustainable growth.
    </p>
    <a
      href="/contact"
      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
    >
      Contact Us
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  </div>
</section>

    </>
  );
}
