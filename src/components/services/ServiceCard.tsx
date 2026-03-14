import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react'; // Import a default icon
import { fadeIn } from '../../styles/animations';
import type { LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  icon?: LucideIcon; // ✅ Made optional
  link?: string;
}

interface ServiceCardProps extends Service {
  index: number;
  isHovered?: boolean;
}

export default function ServiceCard({ name, description, icon: Icon = Activity, index, link }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      custom={index}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#36a0d0]/5 via-[#5bb6bb]/5 to-[#6ec6ab]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#36a0d0]/10 to-[#6ec6ab]/10 rounded-full blur-2xl" />
      </div>

      <div className="relative p-6 flex flex-col justify-between h-full">
        {/* Icon Section */}
        <div className="relative mb-6 flex justify-center">
          <div className="relative p-[2px] rounded-full bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab]">
            <div className="bg-white p-4 rounded-full">
              <Icon className="h-10 w-10 text-[#36a0d0] transform group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-grow space-y-4 text-center">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Link Button */}
        {link && (
          <div className="mt-6 flex justify-center">
            <a
              href={link}
              className="relative inline-flex items-center px-6 py-2 rounded-lg overflow-hidden group/button"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] transition-transform duration-300 group-hover/button:scale-105" />
              <span className="relative flex items-center text-white font-medium">
                <span className="transform group-hover/button:translate-x-[-4px] transition-transform duration-300">
                  Learn more
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover/button:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
