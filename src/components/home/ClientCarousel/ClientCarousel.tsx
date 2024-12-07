import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeIn, staggerContainer } from '../../../styles/animations';
import useClientCarousel from './useClientCarousel';

const clients = [
  { name: 'Alakaria', logo: '/Clients Logo/Alakaria.jpg' },
  { name: 'Awqaf', logo: '/Clients Logo/Awqaf.png' },
  { name: 'Bayan', logo: '/Clients Logo/Bayan.jpg' },
  { name: 'EEC', logo: '/Clients Logo/EEC.png' },
  { name: 'ELM', logo: '/Clients Logo/ELM.png' },
  { name: 'Fransi Saudi Bank', logo: '/Clients Logo/Fransi Saudi Bank.jpg' },
  { name: 'G20 Saudi', logo: '/Clients Logo/Alat.svg' },
  { name: 'GAMI', logo: '/Clients Logo/GAMI.svg' },
  { name: 'GASCO', logo: '/Clients Logo/GASCO.jpg' },
  { name: 'Najm', logo: '/Clients Logo/Najm.jpg' },
  { name: 'NUPCO', logo: '/Clients Logo/nupco.jpg' },
  { name: 'SITCO', logo: '/Clients Logo/SITCO.jpg' },
  { name: 'TETCO', logo: '/Clients Logo/TETCO.jpg' },
  { name: 'seven', logo: '/Clients Logo/Seven.png' },
  { name: 'riyadh airports', logo: '/Clients Logo/riyadh_airports.svg' },
];

function ClientCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 w-[220px] h-[140px] bg-white rounded-lg shadow-lg flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className="max-w-[80%] max-h-[80%] object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function ClientCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollLeft, scrollRight, canScrollLeft, canScrollRight } = useClientCarousel(containerRef);

  return (
    <section>
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
            Who We Work With
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-lg"
          >
            Our trusted clients thrive with our ERP solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Client Carousel Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <button
              onClick={scrollLeft}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-primary hover:text-white hover:bg-primary transition-colors ${
                !canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div ref={containerRef} className="overflow-hidden px-4">
              <motion.div
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-8 py-8"
              >
                {clients.map((client, index) => (
                  <ClientCard key={index} {...client} />
                ))}
              </motion.div>
            </div>

            <button
              onClick={scrollRight}
              className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-primary hover:text-white hover:bg-primary transition-colors ${
                !canScrollRight ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
