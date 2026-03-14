import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/images/sapaward1.png",
        "/images/sapaward2.png"
    ];
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);
    return (<div className="relative w-full h-full rounded-xl">
      <div className="relative w-full h-full perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} initial={{ rotateY: 90, opacity: 0, scale: 0.8 }} animate={{
            rotateY: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }} exit={{
            rotateY: -90,
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.8, ease: "easeIn" }
        }} className="w-full h-full">
            <img src={images[currentIndex]} alt={`Award ${currentIndex + 1}`} className="w-full h-full object-cover rounded-xl"/>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (<button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-4' : 'bg-white/50'}`}/>))}
      </div>
    </div>);
};
const AboutSection = () => {
    return (<section className="py-12 bg-gradient-to-r from-gray-100 via-white to-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8">
        {/* Image Section with Slider */}
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative aspect-[4/3]">
          <ImageSlider />
        </motion.div>

        {/* Content Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Smart National Solutions
          </h2>
          <h3 className="text-2xl font-semibold text-primary">
            AI and SAP Solutions for KSA and the Middle East
          </h3>
          <p className="text-lg text-gray-700">
            SNS, a trusted SAP Gold Partner, delivers award-winning AI-powered solutions aligned with Saudi Vision 2030. With headquarters in Riyadh and operations in Egypt, we specialize in optimizing workflows, enhancing compliance, and driving innovation.
          </p>

          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-3">
            <li>
              <strong>AI Expertise:</strong> SNAM AI drives predictive analytics and automation.
            </li>
            <li>
              <strong>Flagship Products:</strong> SNAM Travel, SNAM Muqeem, and SNAM Yaqeen streamline business operations.
            </li>
            <li>
              <strong>Awards:</strong> Best SAP SuccessFactors Partner (2023) and Fastest Growing Partner in Public Sector (2020).
            </li>
            <li>
              <strong>Regional Presence:</strong> Offices in Riyadh and Egypt ensure seamless support.
            </li>
          </ul>

          <div className="pt-4 flex items-center">
            <Link to="/contact" className="inline-flex items-center bg-primary text-white font-semibold text-xl px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300">
              Contact Us to Transform Your Business
              <ArrowRight className="ml-2 h-5 w-5"/>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>);
};
export default AboutSection;
