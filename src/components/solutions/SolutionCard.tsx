import { Link } from 'react-router-dom';
import type { Solution } from '../../types';

interface SolutionCardProps extends Solution {
  index: number;
}

export default function SolutionCard({
  title,
  description,
  logo,
  features = [],
  link,
}: SolutionCardProps) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-lg relative overflow-hidden flex flex-col min-h-[400px]">
      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] transform origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
      
      {/* Logo Container */}
      <div className="flex justify-center items-center h-20 w-full mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0]/5 via-transparent to-[#6ec6ab]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {logo && (
          <img
            src={logo}
            alt={`${title} logo`}
            className="h-full w-auto object-contain relative z-10"
          />
        )}
      </div>

      {/* Content */}
      <div className="text-left flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-[#36a0d0] mb-3 group-hover:text-[#5bb6bb] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          {description}
        </p>
        
        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-3 text-gray-600 text-sm flex-grow">
            {features.map((feature, idx) => (
              <li 
                key={idx}
                className="flex items-center space-x-2 transform transition-all duration-200 hover:translate-x-1"
              >
                <span className="text-[#5bb6bb] flex-shrink-0">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Button */}
        {link.startsWith('http') ? (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-[#36a0d0] text-white py-3 px-4 rounded-lg 
                     text-sm font-medium transition-all duration-300 hover:bg-[#5bb6bb] group/button mt-6"
          >
            <span className="relative inline-flex items-center">
              Learn More
              <svg 
                className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/button:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        ) : (
          <Link
            to={link}
            className="inline-flex items-center justify-center w-full bg-[#36a0d0] text-white py-3 px-4 rounded-lg 
                     text-sm font-medium transition-all duration-300 hover:bg-[#5bb6bb] group/button mt-6"
          >
            <span className="relative inline-flex items-center">
              Learn More
              <svg 
                className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/button:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}