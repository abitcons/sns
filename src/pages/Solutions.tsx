import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../styles/animations';
import SolutionCard from '../components/solutions/SolutionCard';
import { solutions } from '../data/solutions';
import { aiSolutions } from '../data/aiSolutions';

// Define the interface for a solution object
interface Solution {
  title: string;
  description: string;
  logo?: string; // Optional logo property
  link: string;
  features?: string[]; // Optional features property
}

export default function Solutions() {
  // Separate refs for each section to avoid conflicts
  const [] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [snamRef, snamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Utility function for motion props
  const motionProps = (inView: boolean) => ({
    initial: 'hidden',
    animate: inView ? 'visible' : 'hidden',
    variants: staggerContainer,
  });

  // Function to render solution cards
  const renderSolutionCards = (solutionData: Solution[]) =>
    solutionData.map((solution, index) => (
      <SolutionCard
        key={index}
        index={index} // Pass the index as required by SolutionCardProps
        title={solution.title}
        description={solution.description}
        logo={solution.logo}
        link={solution.link}
        features={solution.features}
      />
    ));

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Solutions - Smart National Solutions</title>
        <meta
          name="description"
          content="Explore SNAM solutions suite, including SNAM Travel, SNAM Muqeem, SNAM Yaqeen, innovative AI solutions, and SAP tools to streamline your business operations."
        />
        <link rel="canonical" href="https://www.nationalsol.com/solutions" />
      </Helmet>

   {/* Hero Section */}
<section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
        Transform Your Business with SAP® Solutions and SNAM Innovations
      </motion.h1>
      <motion.p
        variants={fadeIn}
        className="text-lg leading-relaxed max-w-3xl mx-auto"
      >
        Drive growth and efficiency with SAP®’s world-class tools and SNS’s custom SNAM Solutions. Tailored to modern business challenges, our solutions empower organizations in Saudi Arabia and the Middle East.
      </motion.p>
    </motion.div>
  </div>
</section>


 {/* SAP Solutions Section */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center transform transition-all duration-500 hover:scale-105">
      Transform Your Business with SAP's Global Enterprise Solutions
    </h2>
    <div className="space-y-12">
      {/* Row 1: ERP and HR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ERP - SAP S/4HANA */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-[#36a0d0] mb-5 transition-colors duration-300 hover:text-[#5bb6bb]">
            ERP - SAP S/4HANA
          </h3>
          <div className="flex justify-center items-center h-20 w-full mb-5 transform transition-transform duration-300 hover:scale-105">
            <img
              src="/images/sap-s4hana-logo.png"
              alt="SAP S/4HANA Logo - Transform Global Operations"
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="text-gray-700 mb-4 text-sm">
            SAP S/4HANA empowers global enterprises with real-time insights, optimized operations, and unmatched scalability to thrive in a competitive world.
          </p>
          <ul className="space-y-2 text-gray-600 text-sm mb-4">
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Real-time data-driven decision-making
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Streamlined finance and supply chain processes
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Flexible deployment: Cloud, on-premise, or hybrid
            </li>
          </ul>
          <a
            href="/solutions/erp"
            className="bg-[#36a0d0] text-white py-2 px-4 rounded text-sm hover:bg-[#5bb6bb] transition-all duration-300 hover:shadow-md group"
          >
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
              Discover SAP S/4HANA
            </span>
          </a>
        </div>

        {/* HR - SAP SuccessFactors */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-[#36a0d0] mb-5 transition-colors duration-300 hover:text-[#5bb6bb]">
            HR - SAP SuccessFactors
          </h3>
          <div className="flex justify-center items-center h-20 w-full mb-5 transform transition-transform duration-300 hover:scale-105">
            <img
              src="/images/sap-successfactors-logo.png"
              alt="SAP SuccessFactors Logo - Redefine Workforce Excellence"
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="text-gray-700 mb-4 text-sm">
            SAP SuccessFactors redefines workforce management for enterprises worldwide, fostering innovation and driving employee engagement.
          </p>
          <ul className="space-y-2 text-gray-600 text-sm mb-4">
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Comprehensive talent and performance management
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Global payroll and compliance
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Actionable workforce analytics
            </li>
          </ul>
          <a
            href="/solutions/hr"
            className="bg-[#36a0d0] text-white py-2 px-4 rounded text-sm hover:bg-[#5bb6bb] transition-all duration-300 hover:shadow-md group"
          >
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
              Explore Workforce Solutions
            </span>
          </a>
        </div>
      </div>

      {/* Row 2: Customer Experience and Procurement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Customer Experience - SAP Hybris */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-[#36a0d0] mb-5 transition-colors duration-300 hover:text-[#5bb6bb]">
            Customer Experience - SAP Hybris
          </h3>
          <div className="flex justify-center items-center h-20 w-full mb-5 transform transition-transform duration-300 hover:scale-105">
            <img
              src="/images/sap-hybris-logo.png"
              alt="SAP Hybris Logo - Transform Customer Journeys Globally"
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="text-gray-700 mb-4 text-sm">
            SAP Hybris empowers businesses to create seamless, personalized customer experiences across all channels, boosting loyalty and growth.
          </p>
          <ul className="space-y-2 text-gray-600 text-sm mb-4">
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Omnichannel customer engagement
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> CRM and ERP integration
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Cloud-native and scalable architecture
            </li>
          </ul>
          <a
            href="/solutions/customer-experience"
            className="bg-[#36a0d0] text-white py-2 px-4 rounded text-sm hover:bg-[#5bb6bb] transition-all duration-300 hover:shadow-md group"
          >
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
              Enhance Customer Experience
            </span>
          </a>
        </div>

        {/* Procurement - SAP Ariba */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-[#36a0d0] mb-5 transition-colors duration-300 hover:text-[#5bb6bb]">
            Procurement - SAP Ariba
          </h3>
          <div className="flex justify-center items-center h-20 w-full mb-5 transform transition-transform duration-300 hover:scale-105">
            <img
              src="/images/sap-ariba-logo.png"
              alt="SAP Ariba Logo - Optimize Global Procurement"
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="text-gray-700 mb-4 text-sm">
            SAP Ariba enables seamless procurement processes, ensuring global businesses manage supply chains efficiently and sustainably.
          </p>
          <ul className="space-y-2 text-gray-600 text-sm mb-4">
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Smart spend management
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Supplier collaboration
            </li>
            <li className="transform transition-all duration-200 hover:translate-x-2">
              <span className="text-[#6ec6ab]">✔</span> Integration with ERP systems
            </li>
          </ul>
          <a
            href="/solutions/procurement"
            className="bg-[#36a0d0] text-white py-2 px-4 rounded text-sm hover:bg-[#5bb6bb] transition-all duration-300 hover:shadow-md group"
          >
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
              Optimize Procurement
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* AI Solutions Section */}
<section className="py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white relative overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-black/5"></div>
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white/10"
        style={{
          width: '600px',
          height: '600px',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)',
          opacity: 0.1
        }}
      />
    ))}
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h2 className="text-3xl font-bold mb-4">
      Innovating with AI Solutions
    </h2>
    <p className="text-white/90 mb-12 max-w-2xl mx-auto">
      Transform your business with our cutting-edge AI technologies
    </p>
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center md:max-w-3xl mx-auto"
    >
      {aiSolutions.map((solution, index) => (
        <div 
          key={index}
          className="group bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
        >
          {/* Decorative Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] transform origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
          
          {/* Logo Container */}
          <div className="flex justify-center items-center h-20 w-full mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0]/5 via-transparent to-[#6ec6ab]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={solution.logo}
              alt={solution.title}
              className="h-full w-auto object-contain relative z-10"
            />
          </div>

          {/* Content */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-[#36a0d0] mb-3 group-hover:text-[#5bb6bb] transition-colors duration-300">
              {solution.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {solution.description}
            </p>
            
            {/* Features List */}
            <ul className="space-y-3 text-gray-600 text-sm mb-6">
              {solution.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex}
                  className="flex items-center space-x-2 transform transition-all duration-200 hover:translate-x-1"
                >
                  <span className="text-[#5bb6bb] flex-shrink-0">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <a 
              href={solution.link}
              className="inline-flex items-center justify-center w-full bg-[#36a0d0] text-white py-3 px-4 rounded-lg 
                       text-sm font-medium transition-all duration-300 hover:bg-[#5bb6bb] group"
            >
              <span className="relative inline-flex items-center">
                Learn More
                <svg 
                  className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* SNAM Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Explore SNAM Solutions
          </h2>
          <motion.div
            ref={snamRef}
            {...motionProps(snamInView)}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {renderSolutionCards(solutions)}
          </motion.div>
        </div>
      </section>

 
    </>
  );
}
