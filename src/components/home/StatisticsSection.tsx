import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../../styles/animations';
import AnimatedCounter from '../shared/AnimatedCounter';

interface Statistic {
  value: number;
  suffix?: string;
  label: string;
}

const statistics: Statistic[] = [
  { value: 35, suffix: '+', label: 'Successful Projects' },
  { value: 100, suffix: '+', label: 'Satisfied Clients' },
  { value: 15, suffix: '+', label: 'Years Experience' },
];

export default function StatisticsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            >
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
              />
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}