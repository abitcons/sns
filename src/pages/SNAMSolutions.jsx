import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { solutions } from '../data/solutions';
import SolutionCard from '../components/solutions/SolutionCard';
export default function SNAMSolutions() {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.2 } },
    };
    return (<>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SNAM Solutions - Empowering Saudi Businesses</title>
        <meta name="description" content="SNAM offers advanced solutions for corporate travel management, residency management, and employee verification tailored for Saudi businesses."/>
        <meta name="keywords" content="SNAM Solutions, Business Travel, Residency Management, Employee Verification, SAP Solutions"/>
        <meta name="author" content="Smart National Solutions"/>
        <link rel="canonical" href="/solutions/snam"/>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50" aria-label="SNAM Solutions Overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">SNAM Solutions</h1>
          <p className="text-lg text-gray-600">
            Discover how SNAM Travel, SNAM Muqeem, and SNAM Yaqeen are transforming business operations for companies in Saudi Arabia and beyond.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={cardVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (<motion.div key={index} variants={cardVariants}>
                <SolutionCard {...solution} index={index}/>
              </motion.div>))}
          </motion.div>
        </div>
      </section>
    </>);
}
