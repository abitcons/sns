import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define types for partner data
interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: string;
}

// Define animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Move partners data outside component to prevent recreation on each render
const partners: Partner[] = [
  { 
    id: 1, 
    name: "SAP", 
    logo: '/Partners Logo/SAP.svg',
    description: "Global Leader in Enterprise Software Solutions",
    category: "Enterprise Solutions"
  },
  { 
    id: 2, 
    name: "Elm", 
    logo: '/Partners Logo/ELM.svg',
    description: "Leading Digital Solutions Provider in Saudi Arabia",
    category: "Digital Transformation"
  },
  { 
    id: 3, 
    name: "Alphaiota", 
    logo: "/Partners Logo/alphaiota.svg",
    description: "Innovative Technology Solutions Provider",
    category: "Technology Innovation"
  },
  { 
    id: 4, 
    name: "Tallymarks", 
    logo: "/Partners Logo/TMC.webp",
    description: "Specialized IT Services & Solutions",
    category: "IT Services"
  },
  { 
    id: 5, 
    name: "Data Plus", 
    logo: "/Partners Logo/dataplus.png",
    description: "Advanced Data Analytics & Solutions",
    category: "Data Analytics"
  }
];

const PartnersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const partnersPerSlide = 3;
  const totalSlides = Math.ceil(partners.length / partnersPerSlide);

  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout>;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoPlaying, totalSlides]);

  const handleSlideChange = (direction: 'next' | 'prev') => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => {
      if (direction === 'next') {
        return (prev + 1) % totalSlides;
      }
      return (prev - 1 + totalSlides) % totalSlides;
    });
  };

  const getCurrentPartners = () => {
    const start = currentSlide * partnersPerSlide;
    return partners.slice(start, start + partnersPerSlide);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Gradient Headline Section */}
      <div className="bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] py-10 text-center text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-extrabold mb-4"
          >
            Strategic Technology Partners
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-lg"
          >
            Empowering digital transformation through strategic alliances with industry leaders.
          </motion.p>
        </motion.div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Slider Content */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => handleSlideChange('prev')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-[#36a0d0] group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={() => handleSlideChange('next')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-[#36a0d0] group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Slider */}
            <div className="overflow-hidden py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center gap-8"
                >
                  {getCurrentPartners().map((partner, index) => (
                    <motion.div
                      key={partner.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="group relative w-full max-w-sm"
                    >
                      <div className="relative bg-white rounded-2xl p-8 h-96 flex flex-col transition-all duration-500 transform hover:-translate-y-2">
                        {/* Primary shadow */}
                        <div className="absolute inset-0 rounded-2xl bg-white shadow-lg transition-shadow duration-500 group-hover:shadow-2xl" />
                        
                        {/* Subtle accent line */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#36a0d0] rounded-t-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:w-32" />
                        
                        {/* Logo container */}
                        <div className="relative h-32 flex items-center justify-center">
                          <div className="w-36 h-16 relative flex items-center justify-center">
                            <img
                              src={partner.logo}
                              alt={`${partner.name} logo`}
                              className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/fallback-logo.svg'; // Add a fallback logo
                              }}
                            />
                          </div>
                        </div>

                        {/* Content container */}
                        <div className="relative flex-grow flex flex-col items-center justify-center text-center mt-6">
                          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-gray-50 text-[#36a0d0] mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                            {partner.category}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                            {partner.name}
                          </h3>
                          <p className="text-gray-600 max-w-xs transition-transform duration-300 group-hover:-translate-y-1">
                            {partner.description}
                          </p>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute top-4 right-4 transform rotate-45 transition-transform duration-500 group-hover:rotate-90">
                          <div className="w-2 h-2 border-t-2 border-r-2 border-[#36a0d0]" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-8 h-1 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab]'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;