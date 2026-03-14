
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../styles/animations';
import Team from "../components/About/Team";
import AboutSection from '../components/About/AboutSection';
import React from 'react';


const About = () => {
  const [] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us - Smart National Solutions | Digital Transformation in Saudi Arabia</title>
        <meta
          name="description"
          content="Discover how Smart National Solutions (SNS) leads digital transformation in Saudi Arabia with tailored SAP solutions, innovation, and contributions to Vision 2030."
        />
        <meta
          name="keywords"
          content="Smart National Solutions, SAP Gold Partner, Saudi Vision 2030, digital transformation, SAP solutions, Riyadh technology company, innovation in KSA"
        />
        <link rel="canonical" href="https://www.nationalsol.com/about" />
        <meta property="og:title" content="About Us - Smart National Solutions | Digital Transformation in Saudi Arabia" />
        <meta
          property="og:description"
          content="Learn about Smart National Solutions, our mission, values, and achievements. Discover how we empower businesses in Saudi Arabia with innovative solutions aligned with Vision 2030."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nationalsol.com/about" />
        <meta property="og:image" content="/images/about-sns-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Smart National Solutions" />
        <meta
          name="twitter:description"
          content="Smart National Solutions specializes in cutting-edge SAP solutions and digital transformation, driving Vision 2030 objectives in Saudi Arabia."
        />
        <meta name="twitter:image" content="/images/about-sns-og.jpg" />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "About Us",
          description:
            "Discover how Smart National Solutions leads digital transformation in Saudi Arabia with tailored SAP solutions, innovation, and contributions to Vision 2030.",
          url: "https://www.nationalsol.com/about",
          publisher: {
            "@type": "Organization",
            name: "Smart National Solutions",
            logo: "https://www.nationalsol.com/logo.png",
          },
        })}
      </script>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-6">
            Transforming Tomorrow with Smart National Solutions
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg leading-relaxed">
            Leading digital transformation and innovation for a better future aligned with Vision 2030.
          </motion.p>
        </div>
      </section>

{/* About Section */}
<AboutSection/>

{/* Company History Section */}
<section className="py-20 bg-gray-50 relative overflow-hidden">
  {/* Gradient Background for Headline and Subheadline */}
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] py-12 text-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-4"
      >
        Our Journey
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg max-w-3xl mx-auto leading-relaxed"
      >
        Milestones of Excellence in Driving Digital Transformation Across Saudi Arabia and the Middle East.
      </motion.p>
    </div>
  </motion.div>

  {/* Journey Map Section */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
    <div className="flex items-center relative">
      {[2010, 2015, 2020, 2023].map((year, index) => (
        <React.Fragment key={year}>
          {/* Milestone */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.4 }}
            className="relative flex flex-col items-center text-center mx-4"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mb-6"
            >
              <img
                src={`/Icons/${
                  year === 2010
                    ? "SNS-Icon-Logo"
                    : year === 2015
                    ? "SAPGold"
                    : year === 2020
                    ? "SNAM"
                    : "Expansion"
                }.svg`}
                alt={`${year}`}
                className={`${
                  year === 2010 || year === 2015 ? "h-24 w-24" : "h-20 w-20"
                }`}
              />
            </motion.div>
            {/* Year */}
            <h3 className="text-3xl font-semibold text-primary mb-2">{year}</h3>
            {/* Headline */}
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              {year === 2010
                ? "Founded in Riyadh"
                : year === 2015
                ? "SAP Gold Partnership"
                : year === 2020
                ? "Innovating with AI"
                : "Regional Expansion"}
            </h4>
            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-sm">
              {year === 2010
                ? "Smart National Solutions (SNS) began its journey in Riyadh, Saudi Arabia, with the goal of leading the digital transformation landscape."
                : year === 2015
                ? "Achieved SAP Gold Partner status, showcasing expertise in delivering SAP solutions across Saudi Arabia."
                : year === 2020
                ? "Launched SNAM AI, revolutionizing operational efficiency with cutting-edge AI-driven solutions."
                : "Expanded operations to GCC countries, delivering tailored digital solutions across the region."}
            </p>
          </motion.div>

          {/* Arrow */}
          {index < 3 && (
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>

  {/* CTA Section */}
  <div className="mt-16 py-10 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-center rounded-lg shadow-lg">
    <h3 className="text-4xl font-bold text-white mb-4">
      Ready to Transform Your Business?
    </h3>
    <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
      Discover how we can help your organization achieve its digital transformation goals with tailored solutions and expert guidance.
    </p>
    <a
      href="/contact"
      className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
    >
      Contact Us Today
    </a>
  </div>
</section>




 {/* CEO Message Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="order-2 lg:order-1"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        A Message from Our CEO
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        "At Smart National Solutions (SNS), we are pioneering a new era of digital transformation in the Kingdom of Saudi Arabia and the Middle East. Guided by Saudi Vision 2030, we leverage advanced AI-powered solutions and SAP integrations to drive innovation, enhance operational efficiency, and deliver unmatched value to our clients."
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        By integrating cutting-edge AI technologies into our services, SNS empowers businesses to make smarter decisions, optimize processes, and stay ahead in a competitive landscape. Our AI solutions, combined with our expertise as an SAP Gold Partner, set a new benchmark for excellence and reliability in the region.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Together, let us embrace the transformative potential of AI and innovation to create a sustainable and prosperous future for the Kingdom and beyond."
      </p>
      <div className="mt-6">
        <p className="text-xl font-semibold text-gray-900">Abdulmajed Almousa</p>
        <p className="text-gray-600 text-md">Chief Executive Officer</p>
      </div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="order-1 lg:order-2 flex justify-center"
    >
      <img
        src="/images/CEO.jpg"
        alt="CEO Abdulmajed Almousa"
        className="rounded-lg shadow-lg w-full lg:w-[80%] xl:w-[90%] hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  </div>
</section>
 {/* Team Section */}
 <Team/>


{/* Achievements Section */}
<section className="py-20 bg-gradient-to-r from-white via-gray-100 to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="text-center mb-12"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Our Achievements
      </motion.h2>
      <motion.p
        variants={fadeIn}
        className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
      >
        At SNS, we are proud to showcase our milestones that reflect our commitment to excellence, innovation, and customer satisfaction.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Achievement Card 1 */}
      <motion.div
        whileHover={{ translateY: -10 }}
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
      >
        <div className="text-primary text-5xl font-bold mb-4">50+</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Successful Implementations
        </h3>
        <p className="text-gray-600">
          Completed over 50 end-to-end implementations, driving transformation for businesses of all sizes.
        </p>
      </motion.div>

      {/* Achievement Card 2 */}
      <motion.div
        whileHover={{ translateY: -10 }}
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
      >
        <div className="text-primary text-5xl font-bold mb-4">20+</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          AMS Projects
        </h3>
        <p className="text-gray-600">
          Delivered more than 20 Application Management Service (AMS) projects with exceptional customer satisfaction.
        </p>
      </motion.div>

      {/* Achievement Card 3 */}
      <motion.div
        whileHover={{ translateY: -10 }}
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
      >
        <div className="text-primary text-5xl font-bold mb-4">90+</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Expert Consultants
        </h3>
        <p className="text-gray-600">
          Powered by a team of over 90 highly skilled consultants delivering tailored SAP solutions.
        </p>
      </motion.div>

      {/* Achievement Card 4 */}
      <motion.div
        whileHover={{ translateY: -10 }}
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
      >
        <div className="text-primary text-5xl font-bold mb-4">15+</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Years of Excellence
        </h3>
        <p className="text-gray-600">
          Over 15 years of delivering innovative and cutting-edge solutions across the Kingdom and beyond.
        </p>
      </motion.div>
    </div>
  </div>
</section>


     {/* Our Story Section */}
<section className="py-20 bg-gradient-to-r from-[#5bb6bb] to-[#36a0d0] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="text-center mb-12"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl font-bold mb-6"
      >
        Our Story
      </motion.h2>
      <motion.p
        variants={fadeIn}
        className="text-lg leading-relaxed max-w-4xl mx-auto text-white/90"
      >
        At SNS, we are committed to transforming the digital landscape by empowering businesses to excel with innovative, tailored solutions. Our journey reflects our unwavering dedication to shaping a future defined by success, collaboration, and cutting-edge technology.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Mission Section */}
      <motion.div
        variants={fadeIn}
        whileHover={{ translateY: -10 }}
        className="bg-white/90 text-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
      >
        <img
          src="/Icons/Mission.gif"
          alt="Mission Icon"
          className="h-20 mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
        <p className="text-lg leading-relaxed">
          To empower organizations with digital solutions that transform operations and drive long-term growth.
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        variants={fadeIn}
        whileHover={{ translateY: -10 }}
        className="bg-white/90 text-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
      >
        <img
          src="/Icons/Vision.gif"
          alt="Vision Icon"
          className="h-20 mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
        <p className="text-lg leading-relaxed">
          To be the go-to partner for businesses striving for digital excellence and operational efficiency.
        </p>
      </motion.div>
    </div>
  </div>
</section>


{/* Our Values Section */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="text-3xl font-bold text-gray-800 mb-6 text-center"
    >
      Our Core Values
    </motion.h2>
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="text-lg text-gray-600 mb-10 text-center"
    >
      At the heart of everything we do, our core values drive us to deliver excellence, foster innovation, and maintain unwavering integrity. Here’s what defines us:
    </motion.p>

    {/* Values Grid */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {[
        { title: "Customer-Centricity", description: "Putting our customers first in everything we do." },
        { title: "Innovation", description: "Continuously pushing boundaries with cutting-edge solutions." },
        { title: "Excellence", description: "Maintaining the highest standards in our deliverables." },
        { title: "Integrity", description: "Operating with transparency and ethical principles." },
      ].map((value, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="relative p-6 bg-white rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
        >
          {/* Pop-Up Effect */}
          <div className="absolute inset-0 rounded-lg shadow-xl transition-all duration-300 opacity-0 hover:opacity-100 pointer-events-none bg-gray-100"></div>

          <h3 className="text-xl font-semibold text-primary mb-4">
            {value.title}
          </h3>
          <p className="text-gray-600">{value.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>  
{/* Saudi Vision 2030 Section */}
<section className="py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="text-center mb-12"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl font-bold text-white mb-6"
      >
        Contributing to Saudi Vision 2030
      </motion.h2>
      <motion.p
        variants={fadeIn}
        className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto"
      >
        At SNS, we are committed to driving innovation and excellence to help Saudi Arabia achieve Vision 2030. By providing tailored solutions, we empower businesses to transform their operations, embrace cutting-edge technologies, and achieve sustainable growth.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Innovation Card */}
      <motion.div
        variants={fadeIn}
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
      >
        <div className="h-24 w-24 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src="/Icons/Innovation.gif"
            alt="Innovation"
            className="h-20 w-20 object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">Innovation</h3>
        <p className="text-gray-700">
          Introducing advanced technologies to support Saudi Vision 2030’s ambitious goals.
        </p>
      </motion.div>

      {/* Sustainability Card */}
      <motion.div
        variants={fadeIn}
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
      >
        <div className="h-24 w-24 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src="/Icons/Sustainability.gif"
            alt="Sustainability"
            className="h-20 w-20 object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">Sustainability</h3>
        <p className="text-gray-700">
          Fostering long-term growth through eco-friendly and sustainable solutions.
        </p>
      </motion.div>

      {/* Empowerment Card */}
      <motion.div
        variants={fadeIn}
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
      >
        <div className="h-24 w-24 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src="/Icons/Empowerment.gif"
            alt="Empowerment"
            className="h-20 w-20 object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">Empowerment</h3>
        <p className="text-gray-700">
          Empowering organizations to lead the way in realizing Vision 2030's objectives.
        </p>
      </motion.div>
    </div>
  </div>
</section>
      {/* Why Work With SNS Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="text-center mb-12"
    >
      <motion.h2
        variants={fadeIn}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Why Work With SNS?
      </motion.h2>
      <motion.p
        variants={fadeIn}
        className="text-lg text-gray-600 max-w-3xl mx-auto"
      >
        Trusted by industry leaders, SNS offers certified expertise and tailored solutions to meet your business needs.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          logo: "/Logo/SAP Gold partner .svg",
          title: "SAP Gold Partner",
          description:
            "SNS is proud to be an SAP Gold Partner, recognized for our success in implementation and client support.",
        },
        {
          logo: "/Logo/SAP Certified .svg",
          title: "Certified Partner Center of Expertise",
          description:
            "We are SAP PCOE certified to assist in identifying, building, and managing SAP systems tailored to your needs.",
        },
        {
          logo: "/Logo/ELM.svg",
          title: "Business Applications Partner",
          description:
            "Strategic partner for ELM, delivering innovative business applications and enterprise solutions.",
          logoSize: "h-20", // Bigger ELM logo
        },
        {
          logo: "",
          title: "50+ Projects Delivered",
          description:
            "Successfully completed over 50 end-to-end implementations in Saudi Arabia, with 20+ AMS projects.",
        },
      ].map((highlight, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          whileHover={{ translateY: -10 }}
          className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center"
        >
          {highlight.logo ? (
            <img
              src={highlight.logo}
              alt={highlight.title}
              className={`mx-auto mb-4 object-contain ${
                highlight.logoSize || "h-16"
              }`}
            />
          ) : (
            <div className="text-transparent bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] bg-clip-text text-6xl font-bold mb-4">
              50+
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {highlight.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {highlight.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Discover Our Creative Solutions Section */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 sm:px-8 lg:px-12">
    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative w-full max-w-md lg:max-w-lg">
        <img
          src="/images/Discover SNS solutions.png"
          alt="Discover SNS Solutions"
          className="rounded-lg border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#36a0d0]/10 rounded-lg"></div>
      </div>
    </motion.div>

    {/* Text Content Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
      <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
        Discover Advanced Digital Solutions in Saudi Arabia
      </h2>
      <p className="text-lg leading-relaxed text-gray-600 mb-6">
        At <span className="font-semibold text-[#36a0d0]">Smart National Solutions</span> (SNS), we empower businesses in Saudi Arabia and the Middle East with tailored digital solutions. Our expertise drives efficiency, growth, and innovation in the ever-evolving digital landscape.
      </p>
      <p className="text-lg leading-relaxed text-gray-600 mb-6">
        With SAP® SuccessFactors® add-ons like <strong>SNAM Travel</strong>, <strong>SNAM Muqeem</strong>, and <strong>SNAM Yaqeen</strong>, we deliver solutions that optimize workflows, ensure compliance, and foster operational excellence.
      </p>
      <p className="text-lg leading-relaxed text-gray-600 mb-8">
        From AI-driven analytics to transformative enterprise tools, SNS is committed to redefining success for organizations across the region. Let us help your business achieve sustainable growth and a competitive edge.
      </p>
      <Link
        to="/solutions"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
      >
        Explore Our Solutions
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </motion.div>
  </div>
</section>






    </>
  );
};

export default About;
