
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Logo({ className = '', variant = 'default' }) {
    // Use a different SVG path based on the variant
    const logoPath = variant === 'white'
        ? '/Logo/SNS-logo-white.svg' // White version of the logo
        : '/Logo/SNS logo SVG SVG-01.svg'; // Default version of the logo
    return (<Link to="/">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className={`inline-flex items-center ${className}`}>
        <img src={logoPath} alt="SNS Logo" className="h-16 w-auto"/>
      </motion.div>
    </Link>);
}
