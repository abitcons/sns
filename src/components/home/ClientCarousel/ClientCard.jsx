import { motion } from 'framer-motion';
export default function ClientCard({ name, logo }) {
    return (<motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-[220px] h-[140px] bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <img src={logo} alt={`${name} logo`} className="w-auto h-auto max-w-[70%] max-h-[70%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300" style={{
            objectFit: 'contain', // Ensures the logo scales proportionally
        }} loading="lazy"/>
      </div>
    </motion.div>);
}
