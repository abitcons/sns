import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeIn } from '../../styles/animations';
import type { Service } from '../../types';

interface ServiceCardProps extends Service {
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      custom={index}
      className="group relative bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <a
            href="#"
            className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}