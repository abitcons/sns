import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeIn } from '../../styles/animations';
import type { Solution } from '../../types';

interface SolutionCardProps extends Solution {
  index: number;
}

export default function SolutionCard({ title, description, icon: Icon, features, href, index }: SolutionCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      custom={index}
      className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="p-8">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={href}
          className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}