import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase, BarChart } from 'lucide-react';
import { Trophy, MapPin, Award, Settings, Clock, CheckCircle } from 'lucide-react';
export default function SuccessFactors() {
    return (<>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SAP SuccessFactors - Premier HR Management Solutions in Saudi Arabia and Middle East</title>
        <meta name="description" content="Explore SAP SuccessFactors, the top-rated cloud-based HCM suite revolutionizing HR management, talent acquisition, and employee engagement for businesses in Saudi Arabia and the Middle East."/>
        <meta name="keywords" content="SAP SuccessFactors, HR solutions, cloud HCM, talent management, employee engagement, Saudi Arabia, Middle East"/>
        <link rel="canonical" href="https://www.nationalsol.com/solutions/hr/"/>
        <meta property="og:title" content="SAP SuccessFactors - Premier HR Management Solutions in Saudi Arabia and Middle East"/>
        <meta property="og:description" content="Discover SAP SuccessFactors for optimized HR operations, tailored for businesses in Saudi Arabia and the Middle East."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.nationalsol.com/solutions/hr/"/>
        <meta property="og:image" content="/images/sap-successfactors-banner.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}>
            <h1 className="text-4xl font-bold mb-6">
              SAP SuccessFactors: Redefining HR Excellence
            </h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Transform your HR operations with SAP SuccessFactors – the leading cloud-based HCM solution in Saudi Arabia and the Middle East. Empower talent, streamline processes, and elevate employee engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Revolutionize Your HR with SAP SuccessFactors
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              SAP SuccessFactors offers a comprehensive suite of tools designed to optimize HR processes and improve employee experiences. From recruitment to performance management, it’s built for scalability and success.
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-4">
              <li>Enhanced Talent Management Solutions.</li>
              <li>Comprehensive Workforce Analytics.</li>
              <li>Cloud-based Flexibility and Scalability.</li>
              <li>Intuitive User Experience with SAP Fiori®.</li>
            </ul>
          </div>
          <motion.img src="/images/sap-successfactors-dashboard.png" alt="SAP SuccessFactors Dashboard" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="rounded-lg shadow-lg lg:w-1/2"/>
        </div>
      </section>
       {/* Why SNS Section */}
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Image Column */}
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:w-5/12">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#36a0d0]/20 via-[#5bb6bb]/20 to-[#6ec6ab]/20 rounded-3xl blur-lg"></div>
          <img src="/images/sapaward2.png" alt="SNS Best SAP SuccessFactors Partner" className="relative rounded-2xl w-full object-cover"/>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
            <Trophy className="w-8 h-8 text-[#36a0d0]"/>
            <p className="text-sm font-semibold text-gray-900 mt-2">Best Partner 2023</p>
          </div>
        </div>
      </motion.div>

      {/* Content Column */}
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:w-7/12">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose SNS for
            <span className="relative ml-2">
              <span className="relative z-10">SAP SuccessFactors?</span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-[#36a0d0]/20 to-[#6ec6ab]/20 -z-0"></div>
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Smart National Solutions, recognized as the Best SAP SuccessFactors Partner (2023), provides unmatched expertise in delivering HR solutions tailored for businesses in Saudi Arabia and the Middle East.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
            {
                title: "Regional Expertise",
                description: "Deep understanding of Middle Eastern business practices and HR requirements",
                icon: <MapPin className="w-6 h-6 text-[#36a0d0]"/>
            },
            {
                title: "Award-Winning Team",
                description: "Recognized excellence in SAP SuccessFactors implementation and support",
                icon: <Award className="w-6 h-6 text-[#5bb6bb]"/>
            },
            {
                title: "Localized Solutions",
                description: "Customized HR solutions aligned with Saudi labor laws and regulations",
                icon: <Settings className="w-6 h-6 text-[#6ec6ab]"/>
            },
            {
                title: "24/7 Support",
                description: "Round-the-clock technical assistance and consultation services",
                icon: <Clock className="w-6 h-6 text-[#36a0d0]"/>
            }
        ].map((item, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start space-x-4 group">
                <div className="p-2 rounded-lg bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-[#36a0d0]/10 to-[#6ec6ab]/10 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-3">Our Achievements</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#36a0d0]"/>
                <span className="text-gray-600">100+ Successful Implementations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#5bb6bb]"/>
                <span className="text-gray-600">98% Client Satisfaction Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#6ec6ab]"/>
                <span className="text-gray-600">15+ Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
    </section>

    {/* Key Benefits Section */}
    <section className="bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] py-24 text-white relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-white/5 bg-grid-pattern"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl font-bold mb-6">Key Benefits of SAP SuccessFactors</h2>
      <div className="w-24 h-1 bg-white/30 mx-auto rounded-full mb-6"></div>
      <p className="text-lg text-white/90">
        Transform your HR processes with cutting-edge solutions that drive employee engagement and organizational success.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
            {
                icon: <Users className="w-10 h-10"/>,
                title: 'Empowered Workforce',
                description: 'Boost engagement with personalized experiences and self-service capabilities.',
                benefits: [
                    'Intuitive employee portals',
                    'Mobile-first experience',
                    'Personalized development paths'
                ]
            },
            {
                icon: <Briefcase className="w-10 h-10"/>,
                title: 'Efficient Recruitment',
                description: 'Streamline your hiring process and attract top talent with intelligent solutions.',
                benefits: [
                    'AI-powered candidate matching',
                    'Automated screening process',
                    'Seamless onboarding flow'
                ]
            },
            {
                icon: <BarChart className="w-10 h-10"/>,
                title: 'Actionable Insights',
                description: 'Make data-driven decisions with comprehensive HR analytics and reporting.',
                benefits: [
                    'Real-time performance metrics',
                    'Predictive analytics',
                    'Custom report generation'
                ]
            },
        ].map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="group">
          <div className="h-full p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 mb-6 mx-auto">
              {benefit.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center">
              {benefit.title}
            </h3>
            
            <p className="text-white/80 mb-6 text-center">
              {benefit.description}
            </p>

            <div className="space-y-3">
              {benefit.benefits.map((item, i) => (<div key={i} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                  <span className="text-white/80">{item}</span>
                </div>))}
            </div>
          </div>
        </motion.div>))}
    </div>

    {/* Bottom Stats */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
            { number: '98%', label: 'User Adoption Rate' },
            { number: '45%', label: 'Faster Recruitment' },
            { number: '3x', label: 'Employee Engagement' },
            { number: '60%', label: 'Time Saved in HR Tasks' },
        ].map((stat, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
          <div className="text-3xl font-bold mb-2">{stat.number}</div>
          <div className="text-white/80 text-sm">{stat.label}</div>
        </motion.div>))}
    </div>
  </div>
    </section>
   {/* Key Modules Section */}
    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-4">Key Modules of SAP SuccessFactors</h2>
    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
      Comprehensive suite of HR solutions designed to optimize your workforce management
    </p>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {[
            'Recruiting Management',
            'Onboarding Solutions',
            'Performance and Goals',
            'Compensation Management',
            'Succession and Development',
            'Learning Management System',
            'Workforce Analytics and Planning',
            'Employee Central and Payroll',
            'Employee Experience Management',
        ].map((module, index) => {
            // Cycle through theme colors
            const colors = ['#36a0d0', '#5bb6bb', '#6ec6ab'];
            const color = colors[index % 3];
            return (<li key={index} className="p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer" style={{
                    borderLeft: `4px solid ${color}`,
                    backgroundColor: `${color}08`
                }}>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}/>
              <span className="text-lg font-semibold text-gray-900">{module}</span>
            </div>
          </li>);
        })}
    </ul>
  </div>
    </section>
    {/*SNAM Solutions and SAP SuccessFactors Integration Section*/}
    <section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900">Unlock Business Potential with SNAM Solutions</h2>
      <p className="text-lg text-gray-600 mt-4">
        Seamlessly integrated with SAP SuccessFactors, our SNAM solutions — SNAM Travel, SNAM Muqeem, SNAM Yaqeen, and SNAM AI — offer a transformative approach to HR and business operations. Experience unparalleled efficiency, compliance, and productivity designed for businesses in Saudi Arabia and the Middle East.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold text-primary mb-4">Comprehensive Solutions Tailored for Your Needs</h3>
        <ul className="space-y-4">
          {[
            "SNAM Travel: Streamline business travel management with real-time insights and seamless integration.",
            "SNAM Muqeem: Simplify visa and Iqama management for resident employees, ensuring regulatory compliance.",
            "SNAM Yaqeen: Enhance HR operations with automated data management and efficient onboarding.",
            "SNAM AI: Drive productivity with AI-powered analytics, transforming decision-making processes.",
        ].map((feature, index) => (<li key={index} className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary mt-1"/>
              <span className="text-gray-600">{feature}</span>
            </li>))}
        </ul>
      </div>
      <motion.img src="/images/SNAM-V.png" alt="SNAM Solutions Integration" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="rounded-lg shadow-lg"/>
    </div>
  </div>
    </section>

    {/* Call to Action (CTA) Section */}
    <section className="py-20 bg-white text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Revolutionize Your Business?</h2>
    <p className="text-lg text-gray-600 mb-8">
      Explore how SNAM solutions can enhance your HR operations, drive compliance, and maximize efficiency. 
      Partner with us today to unlock the full potential of SAP SuccessFactors.
    </p>
    <a href="/Solutions/hr/snam" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
      Learn More
      <ArrowRight className="ml-2 h-5 w-5"/>
    </a>
  </div>
    </section>


    </>);
}
